'use client'

import { generate } from "@/actions/ai"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Skeleton } from "@/components/ui/skeleton"
import { Textarea } from "@/components/ui/textarea"
import { authenticator } from "@/lib/imgkit"
import { generateImgSchema, GenerateImgSchema } from "@/lib/zod"
import { useImgs } from "@/store/img"
import { zodResolver } from "@hookform/resolvers/zod"
import { ImageKitAbortError, ImageKitInvalidRequestError, ImageKitServerError, ImageKitUploadNetworkError, upload } from "@imagekit/next"
import NextImg from 'next/image'
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import ErrorMsg from "./errorMsg"

const GenerateImg = () => {
  const { addImg } = useImgs()
  const [img, setImg] = useState<{
    base64Data: string
    name: string
  }>()
  const [uploading, setUploading] = useState(false)
  const [generating, setGenerating] = useState(false)
  const [progress, setProgress] = useState(0)
  const abortController = new AbortController()
  const {
    formState: { errors },
    register,
    handleSubmit
  } = useForm<GenerateImgSchema>({
    defaultValues: {
      desc: '',
      name: ''
    },
    resolver: zodResolver(generateImgSchema),
  })
  const onSubmit = async ({ desc, name }: GenerateImgSchema) => {
    setGenerating(true)
    const id = toast.loading('Your Dream Car is loading...')
    try {
      if (!desc || !name) return toast.error('Name & Description are required')
      const data = await generate(name, desc)
      if (!data) return toast.error('Sorry, Failed to generate image')
      setImg(data)
      toast.success('Your Dream Car is ready', { id })
    } catch (err) {
      console.log(err)
      toast.error('Oops, Something Went Wrong while generating the image', { id })
    } finally {
      setGenerating(false)
    }
  }
  const handleUpload = async () => {
    if (!img) return toast.error('No Image to Save')
    setUploading(true)
    const id = toast.loading('Saving the Image. Please Wait...')
    let auth
    try {
      auth = await authenticator()
    } catch (err) {
      console.log(err)
      toast.error('Oops, Something Went Wrong while saving the image', { id })
      setUploading(false)
    }
    try {
      const res = await upload({
        ...auth,
        publicKey: process.env.NEXT_PUBLIC_IMGKIT_PUBLIC_KEY,
        file: img.base64Data,
        fileName: img.name,
        folder: 'CarHub',
        onProgress(event) {
          setProgress((event.loaded / event.total) * 100)
        },
        abortSignal: abortController.signal
      })
      if (!res.filePath) return toast.error('Oops, Something Went Wrong while saving the image', { id })
      addImg(res.filePath)
      toast.success('Image Saved Successfully', { id })
    } catch (error) {
      toast.error('Oops, Something Went Wrong while saving the image', { id })
      if (error instanceof ImageKitAbortError)
        console.error("Upload aborted:", error.reason);
      else if (error instanceof ImageKitInvalidRequestError)
        console.error("Invalid request:", error.message);
      else if (error instanceof ImageKitUploadNetworkError)
        console.error("Network error:", error.message);
      else if (error instanceof ImageKitServerError)
        console.error("Server error:", error.message);
      else
        console.error("Upload error:", error);
    } finally {
      setUploading(false)
    }
  }
  return (
    <div>
      <h1 className="text-2xl font-bold">
        Generate Image
      </h1>
      <p className="text-muted-foreground">
        Use AI to generate an image of your Dream Car
      </p>
      <form className="mt-4 flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-2">
          <Label htmlFor="desc">
            Description
          </Label>
          <Textarea id='desc' placeholder="Describe your Dream Car" rows={6} {...register('desc')} />
          {errors.desc && <ErrorMsg t={errors.desc.message!} />}
        </div>
        <div className="space-y-2">
          <Label htmlFor="name">
            File Name
          </Label>
          <Input id="name" placeholder="Enter a Name for the generated image" {...register('name')} />
          {errors.name && <ErrorMsg t={errors.name.message!} />}
        </div>
        <Button disabled={generating}>
          {generating ? 'Generating' : 'Generate Image'}
        </Button>
      </form>
      {img && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">
            Generated Image
          </h2>
          {generating ?
            // <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
            //   <p className="text-muted-foreground">
            //     Your Dream Car is waiting to get Real
            //   </p>
            // </div>
            <Skeleton className="w-full h-96 rounded-lg flex items-center justify-center" />
            :
            <NextImg alt="DREAM CAR" src={img.base64Data} className="w-full h-[25rem] object-cover rounded-lg" height={1000} width={1000} />
          }
        </div>
      )}
      <div className="flex justify-end gap-4 pt-4">
        {!uploading && <Button variant='outline' disabled={uploading} onClick={() => setImg({
          base64Data: '',
          name: ''
        })}>
          Cancel
        </Button>}
        <Button onClick={handleUpload} disabled={uploading}>
          {uploading ? 'Saving...' : 'Save Image'}
        </Button>
      </div>
      {progress > 0 && progress < 100 && (
        <div className="mt-4 w-full">
          <Progress value={progress} className="h-2" />
          <p className="text-sm text-muted-foreground mt-1">
            Uploading... {Math.round(progress)}%
          </p>
        </div>
      )}
    </div>
  )
}

export default GenerateImg