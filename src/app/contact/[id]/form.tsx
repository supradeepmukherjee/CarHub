'use client'

import { contact } from "@/actions/contact"
import ErrorMsg from "@/app/add/errorMsg"
import TestDrive from "@/app/car/[id]/testDrive"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { contactSchema, ContactSchema } from "@/lib/zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

const Form = ({ id }: { id: string }) => {
  const [loading, setLoading] = useState(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactSchema>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      carId: id,
      content: '',
      email: '',
      name: '',
      phone: ''
    }
  })
  const onSubmit = async (data: ContactSchema) => {
    const id = toast.loading('Sending your Message to the Seller. Please Wait...')
    setLoading(true)
    try {
      await contact(data)
      toast.success('Thank you for Contacting the Seller', { id })
      reset()
    } catch (err) {
      console.log(err)
      toast.error('Oops, Something Went Wrong while Sending your Message to the Seller', { id })
    } finally {
      setLoading(false)
    }
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name" className="text-sm font-medium">
            Name
          </Label>
          <Input id="name" placeholder="Enter your Full Name" {...register('name')} />
          {errors.name && <ErrorMsg t={errors.name.message!} />}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-medium">
            Email ID
          </Label>
          <Input id="email" placeholder="Enter your Email ID" {...register('email')} />
          {errors.email && <ErrorMsg t={errors.email.message!} />}
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone" className="text-sm font-medium">
            Phone No.
          </Label>
          <Input id="phone" placeholder="Enter your Phone Number" {...register('phone')} />
          {errors.phone && <ErrorMsg t={errors.phone.message!} />}
        </div>
        <div className="space-y-2">
          <Label htmlFor="content" className="text-sm font-medium">
            Message
          </Label>
          <Textarea placeholder="Explain your Message in detail..." rows={4} {...register('content')} id="content" />
          {errors.content && <ErrorMsg t={errors.content.message!} />}
        </div>
        <div className="flex items-center gap-4">
          <Button type="submit" disabled={loading} className="flex-1">
            {loading ? 'Sending your Message' : 'Send Message'}
          </Button>
          <TestDrive carId={id} />
        </div>
      </div>
    </form>
  )
}

export default Form