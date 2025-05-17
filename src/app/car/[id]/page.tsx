import { getAllCars, getCarByID, getSellerInfo } from "@/actions/car"
import { getProfile } from "@/actions/user"
import { auth } from "@/auth"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Skeleton } from "@/components/ui/skeleton"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Image } from "@imagekit/next"
import { Calendar, Clock, Gauge, MapPin, PenTool, Shield } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import { FaDoorOpen, FaWrench } from 'react-icons/fa'
import { PiEngineFill, PiSeatFill } from 'react-icons/pi'
import CoverBtn from "./coverBtn"


type Props = { params: Promise<{ id?: string }> }

const Car = ({ params }: Props) => (
  <div className="container mx-auto py-10">
    <main className="min-h-screen bg-white dark:bg-zinc-900 pb-16">
      <div className="relative bg-black h-[60vh]">
        <Suspense fallback={<Skeleton className="h-full w-full" />}>
          <Cover params={params} />
        </Suspense>
      </div>
      <div className="max-w-7xl mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Suspense fallback={
            <div className="lg:col-span-2">
              <Skeleton className="h-96 w-full" />
            </div>
          }>
            <Main params={params} />
          </Suspense>
          <Suspense fallback={<Skeleton className="h-96 w-full" />}>
            <Sidebar params={params} />
          </Suspense>
        </div>
      </div>
    </main>
  </div>
)

const Cover = async ({ params }: Props) => {
  const { id } = await params
  if (!id) return notFound()
  const car = await getCarByID(id)
  if (!car) return notFound()
  const session = await auth()
  if (!session?.user) return
  const user = await getProfile(session.user.email)
  return car.imgs.length > 0 ? (
    <>
      <Image src={car.imgs[0]} alt={car.name} className="object-cover" fill />
      <CoverBtn carID={car.id} savedBy={car.savedBy} userID={user?.id} />
    </>
  )
    : <div className="h-full bg-gray-200" />
}

const Main = async ({ params }: Props) => {
  const { id } = await params
  if (!id) return notFound()
  const car = await getCarByID(id)
  if (!car) return notFound()
  return (
    <div className="lg:col-span-2">
      <Card className="mb-8">
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div className="">
              <h1 className="text-3xl font-bold mb-2">
                {car.name}
              </h1>
              <div className="flex items-center gap-2 text-gray-600">
                <MapPin className="h-4 w-4" />
                <span>
                  {car.location}
                </span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold text-primary">
                Rs. {car.price}
              </p>
              <p className="text-sm text-gray-500">
                Market Price
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-gray-500" />
              <span>
                {car.year}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Gauge className="h-4 w-4 text-gray-500" />
              <span>
                {car.mileage} km
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-gray-500" />
              <span>
                {car.transmission}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <PenTool className="h-4 w-4 text-gray-500" />
              <span>
                {car.fuelType}
              </span>
            </div>
          </div>
          <ScrollArea>
            <div className="flex gap-2 py-4">
              {car.features.map((f, i) => (
                <Badge key={i} className="flex-none" variant='secondary'>
                  {f}
                </Badge>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </CardContent>
      </Card>
      <Tabs defaultValue="details" className="mb-8">
        <TabsList className="w-full">
          <TabsTrigger value="details" className="flex-1">
            Vehicle Details
          </TabsTrigger>
          <TabsTrigger value="features" className="flex-1">
            Features & Specs
          </TabsTrigger>
          <TabsTrigger value="history" className="flex-1">
            History
          </TabsTrigger>
        </TabsList>
        <TabsContent value="details" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                Description
              </h3>
              <p className="text-gray-600 mb-6">
                {car.desc}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="font-semibold">
                    Performance
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>
                      0-60 km/h: {car.specs?.acceleration} seconds
                    </li>
                    <li>
                      Top Speed: {car.specs?.topSpeed} km/h
                    </li>
                    <li>
                      Horsepower: {car.specs?.hp} hp
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold">
                    Dimensions
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>
                      Length: {car.specs?.length} mm
                    </li>
                    <li>
                      Width: {car.specs?.width} mm
                    </li>
                    <li>
                      Height: {car.specs?.height} mm
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="features" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                Features
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p className="font-semibold">
                    Engine
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li className="flex items-center gap-1">
                      <PiEngineFill /> Engine Capacity: {car.specs?.engineCapacity} cc
                    </li>
                    <li className="flex items-center gap-1">
                      <FaWrench /> Torque: {car.specs?.torque} nm
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold">
                    Interior
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li className="flex items-center gap-1">
                      <PiSeatFill /> Seats: {car.specs?.seats}
                    </li>
                    <li className="flex items-center gap-1">
                      <FaDoorOpen /> Doors: {car.specs?.doors}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="space-y-2">
                  <p className="font-semibold">
                    Safety
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>
                      Airbags: { }
                    </li>
                    <li>
                      ABS: { }
                    </li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold">
                    Warranty
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>
                      { }
                    </li>
                  </ul>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="space-y-2">
                  <p className="font-semibold">
                    Colors
                  </p>
                  <ul className="text-sm text-gray-600 flex gap-2 items-center">
                    {car.colors.map(c => <li className="w-10 h-10 rounded-md" key={c} style={{ backgroundColor: c }} />)}
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="font-semibold">
                    Type
                  </p>
                  <ul className="text-sm text-gray-600 flex gap-2 items-center">
                    <li className="w-10 h-10 rounded-md">
                      {car.type}
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="history" className="mt-6">
          <Card>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">
                History
              </h3>
              <p className="text-gray-600">
                This car has a clean history with no accidents reported.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

const Sidebar = async ({ params }: Props) => {
  const { id } = await params
  if (!id) return notFound()
  const seller = await getSellerInfo(id)
  if (!seller) return notFound()
  return (
    <div className="">
      <Card className="sticky top-4">
        <CardContent className="p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative h-16 w-16">
              <Image
                alt={seller.name}
                src={'https://ik.imagekit.io/83jhglbgl/default-image.jpg'} className="rounded-full object-cover"
                width={200}
                height={400}
              />
            </div>
            <div className="">
              <h3 className="font-semibold">
                {seller.name}
              </h3>
              <p className="text-sm text-gray-500">
                Verified Dealer
              </p>
              <div className="flex items-center gap-1 text-sm text-primary">
                <Shield className="h-4 w-4" />
                <span>
                  Premium Seller
                </span>
              </div>
            </div>
          </div>
          <Link href={'/contact/' + seller.carId}>
            <Button className="w-full mb-3">
              Contact Seller
            </Button>
          </Link>

        </CardContent>
      </Card>
    </div>
  )
}

export default Car