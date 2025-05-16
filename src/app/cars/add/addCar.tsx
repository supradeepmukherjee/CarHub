'use client'

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { carTypes } from "@/constants/cars"
import { addSchema, AddSchema } from "@/lib/zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { LucideWandSparkles, LucideX } from "lucide-react"
import { useCallback, useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import ErrorMsg from "./errorMsg"
import { CarType, FuelType, Transmission } from "@prisma/client"
import { useImgs } from "@/store/img"
import { addCar } from "@/actions/car"
import { toast } from "sonner"
import { autoGenerate } from "@/actions/ai"
import { Textarea } from "@/components/ui/textarea"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Image } from "@imagekit/next"

const AddCar = () => {
  const { imgs, addImg, removeImg, clearImgs } = useImgs()
  const [generating, setGenerating] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [features, setFeatures] = useState<string[]>([])
  const [colors, setColors] = useState<string[]>([])
  const [feature, setFeature] = useState('')
  const [color, setColor] = useState('')
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<AddSchema>({
    resolver: zodResolver(addSchema),
    defaultValues: {
      acceleration: undefined,
      brand: '',
      colors: [],
      desc: '',
      doors: undefined,
      engineCapacity: undefined,
      features: [],
      fuelType: undefined,
      height: undefined,
      hp: undefined,
      imgs: [],
      length: undefined,
      location: '',
      mileage: 0,
      name: '',
      price: 0,
      seats: undefined,
      sellerAddress: '',
      sellerCity: '',
      sellerCountry: '',
      sellerEmail: '',
      sellerImg: '',
      sellerName: '',
      sellerPhone: '',
      sellerPostalCode: '',
      sellerState: '',
      sellerWebsite: '',
      topSpeed: undefined,
      torque: undefined,
      transmission: 'MANUAL',
      type: undefined,
      weight: undefined,
      width: undefined,
      year: new Date().getFullYear()
    }
  })
  const addColor = useCallback(() => {
    if (!color || color.trim() === '' || colors.includes(color)) return
    const newColors = [...colors, color]
    setColors(newColors)
    setValue('colors', newColors)
    setColor('')
  }, [color, colors, setValue])
  const removeColor = useCallback((r: string) => {
    setColors(colors.filter(c => c !== r))
  }, [colors])
  const addFeature = useCallback(() => {
    if (!feature || feature.trim() === '' || features.includes(feature)) return
    const newFeatures = [...features, feature]
    setFeatures(newFeatures)
    setValue('features', newFeatures)
    setFeature('')
  }, [feature, features, setValue])
  const removeFeature = useCallback((r: string) => {
    setFeatures(features.filter(c => c !== r))
  }, [features])
  const handleGenerate = async () => {
    if (!watch('name')) return toast.error('Car Name is required to generate image')
    setGenerating(true)
    try {
      const res: AddSchema = await autoGenerate(watch('name'))
      if (!res) return toast.error('Sorry, Failed to generate car details.')
      setValues(res)
      localStorage.setItem('car-details', JSON.stringify(res))
      toast.success('Car Details generated successfully')
    } catch (err) {
      console.log(err)
      toast.error('Oops, Something Went Wrong while generating the car details')
    } finally {
      setGenerating(false)
    }
  }
  const onSubmit = async (data: AddSchema) => {
    const id = toast.loading('Adding New Car. Please Wait...')
    setSubmitting(true)
    try {
      await addCar(data)
      toast.success('New Car Added Successfully', { id })
      resetAll()
    } catch (err) {
      console.log(err)
      toast.error('Oops, Something Went Wrong while adding New Car', { id })
    } finally {
      setSubmitting(false)
    }
  }
  const resetAll = () => {
    clearImgs()
    setColor('')
    setColors([])
    setFeature('')
    setFeatures([])
    reset()
    localStorage.removeItem('car-details')
  }
  const setValues = useCallback((data: AddSchema, imgSaved = false) => {
    setColors(data.colors)
    setFeatures(data.features)
    Object.entries(data).forEach(([k, v]) => {
      if (!imgSaved) {
        if (k === 'imgs') return
        if (k === 'sellerImg') {
          setValue('sellerImg','/default.jpg')
          return
        }
      }
      setValue(k as keyof AddSchema, v as string)
    })
  }, [setValue])
  useEffect(() => {
    setValue('imgs', imgs)
    const savedDetails = localStorage.getItem('car-details')
    if (savedDetails) setValues(JSON.parse(savedDetails), true)
  }, [imgs, setValue, setValues])
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <p>
            Add New Car
          </p>
          <button onClick={handleGenerate} disabled={generating}>
            {generating ? <LucideWandSparkles className="animate-ping ease-out direction-alternate duration-300" /> : <LucideWandSparkles />}
          </button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              Basic Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">
                  Name
                </Label>
                <Input id="name" placeholder="eg. Best Car" {...register('name')} />
                {errors.name && <ErrorMsg t={errors.name.message!} />}
              </div>
              <div className="space-y-2">
                <Label htmlFor="brand">
                  Brand
                </Label>
                <Input id="brand" placeholder="eg. TATA" {...register('brand')} />
                {errors.brand && <ErrorMsg t={errors.brand.message!} />}
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">
                  Type
                </Label>
                <Select onValueChange={v => setValue('type', v as CarType)}>
                  <SelectTrigger>
                    <SelectValue placeholder='Select Car Type' />
                  </SelectTrigger>
                  <SelectContent>
                    {carTypes.map(t => (
                      <SelectItem value={t} key={t}>
                        {t.charAt(0) + t.slice(1).toLowerCase()}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.type && <ErrorMsg t={errors.type.message!} />}
              </div>
              <div className="space-y-2">
                <Label htmlFor="year">
                  Year
                </Label>
                <Input id="year" type="number" placeholder="eg. 2023"{...register('year')} />
                {errors.year && <ErrorMsg t={errors.year.message!} />}
              </div>
              <div className="space-y-2">
                <Label htmlFor="mileage">
                  Mileage
                </Label>
                <Input id="mileage" type="number" placeholder="eg. 69"{...register('mileage')} />
                {errors.mileage && <ErrorMsg t={errors.mileage.message!} />}
              </div>
              <div className="space-y-2">
                <Label htmlFor="price">
                  Price (Rs.)
                </Label>
                <Input id="price" type="number" placeholder="eg. 500000" {...register('price')} />
                {errors.price && <ErrorMsg t={errors.price.message!} />}
              </div>
              <div className="space-y-2">
                <Label htmlFor="transmission">
                  Transmission
                </Label>
                <Select onValueChange={v => setValue('transmission', v as Transmission)} defaultValue="AUTOMATIC">
                  <SelectTrigger>
                    <SelectValue placeholder='Select Transmission Type' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="AUTOMATIC">
                      Automatic
                    </SelectItem>
                    <SelectItem value="MANUAL">
                      Manual
                    </SelectItem>
                  </SelectContent>
                </Select>
                {errors.transmission && <ErrorMsg t={errors.transmission.message!} />}
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">
                  Fuel Type
                </Label>
                <Select onValueChange={v => setValue('fuelType', v as FuelType)}>
                  <SelectTrigger>
                    <SelectValue placeholder='Select Fuel Type' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="GASOLINE">
                      Gasoline
                    </SelectItem>
                    <SelectItem value="DIESEL">
                      Diesel
                    </SelectItem>
                    <SelectItem value="ELECTRIC">
                      Electric
                    </SelectItem>
                    <SelectItem value="HYBRID">
                      Hybrid
                    </SelectItem>
                  </SelectContent>
                </Select>
                {errors.fuelType && <ErrorMsg t={errors.fuelType.message!} />}
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">
                  Location
                </Label>
                <Input id="location" placeholder="eg. Sonagachi"{...register('location')} />
                {errors.location && <ErrorMsg t={errors.location.message!} />}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              Colors
            </h3>
            <div className="flex items-center gap-2">
              <Input placeholder="Add a Color" value={color} onChange={e => setColor(e.target.value)} />
              <Button type="button" onClick={addColor}>
                Add
              </Button>
            </div>
            {errors.colors && <ErrorMsg t={errors.colors.message!} />}
            <div className="flex flex-wrap gap-2">
              {colors.map((c, i) => (
                <Badge key={i} className="flex items-center gap-1">
                  {c} <LucideX className="h-3 w-3 cursor-pointer" onClick={() => removeColor(c)} />
                </Badge>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              Features
            </h3>
            <div className="flex items-center gap-2">
              <Input placeholder="Add a Feature" value={feature} onChange={e => setFeature(e.target.value)} />
              <Button type="button" onClick={addFeature}>
                Add
              </Button>
            </div>
            {errors.features && <ErrorMsg t={errors.features.message!} />}
            <div className="flex flex-wrap gap-2">
              {features.map((c, i) => (
                <Badge key={i} className="flex items-center gap-1">
                  {c} <LucideX className="h-3 w-3 cursor-pointer" onClick={() => removeFeature(c)} />
                </Badge>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              Car Specifications (Optional)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="engineCapacity">
                  Engine Capacity (cc)
                </Label>
                <Input id="engineCapacity" placeholder="eg. 69" {...register('engineCapacity')} />
                {errors.engineCapacity && <ErrorMsg t={errors.engineCapacity.message!} />}
              </div>
              <div className="space-y-2">
                <Label htmlFor="hp">
                  Horse Power
                </Label>
                <Input id="hp" placeholder="eg. 6969" {...register('hp')} />
                {errors.hp && <ErrorMsg t={errors.hp.message!} />}
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">
                  Torque (nm)
                </Label>
                <Input id="torque" placeholder="eg. 690" {...register('torque')} />
                {errors.torque && <ErrorMsg t={errors.torque.message!} />}
              </div>
              <div className="space-y-2">
                <Label htmlFor="acceleration">
                  0-60km/h(sec)
                </Label>
                <Input id="acceleration" type="number" placeholder="eg. 6.9"{...register('acceleration')} />
                {errors.acceleration && <ErrorMsg t={errors.acceleration.message!} />}
              </div>
              <div className="space-y-2">
                <Label htmlFor="topSpeed">
                  Top Speed (km/h)
                </Label>
                <Input id="topSpeed" type="number" placeholder="eg. 169"{...register('topSpeed')} />
                {errors.topSpeed && <ErrorMsg t={errors.topSpeed.message!} />}
              </div>
              <div className="space-y-2">
                <Label htmlFor="doors">
                  Doors
                </Label>
                <Input id="doors" type="number" placeholder="eg. 4" {...register('doors')} />
                {errors.doors && <ErrorMsg t={errors.doors.message!} />}
              </div>
              <div className="space-y-2">
                <Label htmlFor="seats">
                  Seats
                </Label>
                <Input id="seats" type="number" placeholder="eg. 4" {...register('seats')} />
                {errors.seats && <ErrorMsg t={errors.seats.message!} />}
              </div>
              <div className="space-y-2">
                <Label htmlFor="length">
                  Length (mm)
                </Label>
                <Input id="length" type="number" placeholder="eg. 4" {...register('length')} />
                {errors.length && <ErrorMsg t={errors.length.message!} />}
              </div>
              <div className="space-y-2">
                <Label htmlFor="width">
                  Width (mm)
                </Label>
                <Input id="width" type="number" placeholder="eg. 4" {...register('width')} />
                {errors.width && <ErrorMsg t={errors.width.message!} />}
              </div>
              <div className="space-y-2">
                <Label htmlFor="height">
                  Height (mm)
                </Label>
                <Input id="height" type="number" placeholder="eg. 4" {...register('height')} />
                {errors.height && <ErrorMsg t={errors.height.message!} />}
              </div>
              <div className="space-y-2">
                <Label htmlFor="weight">
                  Weight (kg)
                </Label>
                <Input id="weight" type="number" placeholder="eg. 4" {...register('weight')} />
                {errors.weight && <ErrorMsg t={errors.weight.message!} />}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              Description
            </h3>
            <div className="space-y-2">
              <Label htmlFor="desc">
                Description
              </Label>
              <Textarea id="desc" rows={6} placeholder="Provide a detailed description of the car." {...register('desc')} />
              {errors.desc && <ErrorMsg t={errors.desc.message!} />}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              Images
            </h3>
            <div className="space-y-2">
              <Label htmlFor="img">
                Image URL
              </Label>
              <div className="flex items-center gap-2">
                <Input id='img' placeholder="Enter the URL of the image (direct link image path)" />
                <Button type="button" onClick={() => addImg()}>
                  Add
                </Button>
              </div>
              {errors.imgs && <ErrorMsg t={errors.imgs.message!} />}
            </div>
            {imgs.length > 0 && (
              <Carousel>
                <CarouselContent>
                  {imgs.map(i => (
                    //check without relative
                    <CarouselItem key={i} className="relative">
                      <Image alt={`img-${i}`} src={i} width={1000} height={500} className="w-full h-96 object-cover" />
                      <button type="button" onClick={() => removeImg(i)} className="bg-primary p-1 rounded-full text-secondary absolute top-2 right-2">
                        <LucideX className="h-5 w-5" />
                      </button>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious /> <CarouselNext />
              </Carousel>
            )}
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">
              Seller Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="sellerName">
                  Seller Name
                </Label>
                <Input id="sellerName" placeholder="eg. Desi Naam" {...register('sellerName')} />
                {errors.sellerName && <ErrorMsg t={errors.sellerName.message!} />}
              </div>
              <div className="space-y-2">
                <Label htmlFor="sellerPhone">
                  Phone
                </Label>
                <Input id="sellerPhone" placeholder="eg. +91 6969696969" {...register('sellerPhone')} />
                {errors.sellerPhone && <ErrorMsg t={errors.sellerPhone.message!} />}
              </div>
              <div className="space-y-2">
                <Label htmlFor="sellerEmail">
                  Email ID
                </Label>
                <Input id="sellerEmail" placeholder="eg. desi@mail.com" {...register('sellerEmail')} />
                {errors.sellerEmail && <ErrorMsg t={errors.sellerEmail.message!} />}
              </div>
              <div className="space-y-2">
                <Label htmlFor="sellerWebsite">
                  Website
                </Label>
                <Input id="sellerWebsite" placeholder="eg. https://example.com" {...register('sellerWebsite')} />
                {errors.sellerWebsite && <ErrorMsg t={errors.sellerWebsite.message!} />}
              </div>
              <div className="space-y-2">
                <Label htmlFor="sellerImg">
                  Profile Image URL
                </Label>
                <Input id="sellerImg" placeholder="eg. https://example.com/profile.jpg" {...register('sellerImg')} />
                {errors.sellerImg && <ErrorMsg t={errors.sellerImg.message!} />}
              </div>
              <div className="space-y-2">
                <Label htmlFor="sellerImg">
                  Profile Image URL
                </Label>
                <Input id="sellerImg" placeholder="eg. https://example.com/profile.jpg" {...register('sellerImg')} />
                {errors.sellerImg && <ErrorMsg t={errors.sellerImg.message!} />}
              </div>
              <div className="space-y-2">
                <Label htmlFor="sellerAddress">
                  Address
                </Label>
                <Input id="sellerAddress" placeholder="eg. Nabanna, Bangladesh" {...register('sellerAddress')} />
                {errors.sellerAddress && <ErrorMsg t={errors.sellerAddress.message!} />}
              </div>
              <div className="space-y-2">
                <Label htmlFor="sellerCity">
                  City
                </Label>
                <Input id="sellerCity" placeholder="eg. Nabanna, Bangladesh" {...register('sellerCity')} />
                {errors.sellerCity && <ErrorMsg t={errors.sellerCity.message!} />}
              </div>
              <div className="space-y-2">
                <Label htmlFor="sellerState">
                  State
                </Label>
                <Input id="sellerState" placeholder="eg. Nabanna, Bangladesh" {...register('sellerState')} />
                {errors.sellerState && <ErrorMsg t={errors.sellerState.message!} />}
              </div>
              <div className="space-y-2">
                <Label htmlFor="sellerPostalCode">
                  Postal Code
                </Label>
                <Input id="sellerPostalCode" placeholder="eg. Nabanna, Bangladesh" {...register('sellerPostalCode')} />
                {errors.sellerPostalCode && <ErrorMsg t={errors.sellerPostalCode.message!} />}
              </div>
              <div className="space-y-2">
                <Label htmlFor="sellerCountry">
                  Country
                </Label>
                <Input id="sellerCountry" placeholder="eg. Nabanna, Bangladesh" {...register('sellerCountry')} />
                {errors.sellerCountry && <ErrorMsg t={errors.sellerCountry.message!} />}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4 pt-4">
            <Button type="submit" disabled={submitting}>
              Add Car
            </Button>
          </div>
        </form>
      </CardContent>
    </Card >
  )
}

export default AddCar