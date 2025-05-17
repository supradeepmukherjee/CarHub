import { carTypes, fuelTypes } from '@/constants/cars'
import { z } from 'zod'

export const generateImgSchema = z.object({
    name: z.string().min(3, 'File Name must be atleast 5 characters'),
    desc: z.string().min(5, 'Description must be atleast 5 characters')
})

export type GenerateImgSchema = z.infer<typeof generateImgSchema>

export const addSchema = z.object({
    name: z.string().min(3, 'Name must be atleast 3 characters'),
    brand: z.string().min(1, 'Brand is Required'),
    type: z.enum(carTypes),
    year: z.coerce.number().int().min(1900).max(new Date().getFullYear() + 1),
    mileage: z.coerce.number().int().positive('Mileage must be positive'),
    colors: z.array(z.string()).min(1, 'Atleast 1 color is required'),
    features: z.array(z.string()).min(1, 'Atleast 1 feature is required'),
    price: z.coerce.number().positive('Price must be positive'),
    desc: z.string().min(20, 'Description must be atleast 20 characters'),
    imgs: z.array(z.string()).min(1, 'Atleast 1 image is required'),
    transmission: z.enum(['AUTOMATIC', 'MANUAL']),
    location: z.string().min(2, 'Location is Required'),
    fuelType: z.enum(fuelTypes),

    engineCapacity: z.coerce.number().positive().optional(),
    doors: z.coerce.number().int().positive().optional(),
    seats: z.coerce.number().int().positive().optional(),
    topSpeed: z.coerce.number().int().positive().optional(),
    acceleration: z.coerce.number().int().positive().optional(),
    hp: z.coerce.number().int().positive().optional(),
    torque: z.coerce.number().int().positive().optional(),
    length: z.coerce.number().int().positive().optional(),
    width: z.coerce.number().int().positive().optional(),
    height: z.coerce.number().int().positive().optional(),
    weight: z.coerce.number().int().positive().optional(),

    sellerName: z.string().min(2, 'Seller name must be atleast 2 characters'),
    sellerImg: z.string().optional(),
    sellerPhone: z.string().length(10, 'Phone Number must be of 10 digits'),
    sellerEmail: z.string().email('Valid Email Id is required'),
    sellerAddress: z.string().min(20, 'Address must be atleast 20 characters'),
    sellerCity: z.string().min(2, 'City must be atleast 2 characters'),
    sellerState: z.string().min(2, 'State must be atleast 2 characters'),
    sellerPostalCode: z.string().min(2, 'Postal Code must be atleast 2 characters'),
    sellerCountry: z.string().min(2, 'Country must be atleast 2 characters'),
    sellerWebsite: z.string().url('Valid URL is required')
})

export type AddSchema = z.infer<typeof addSchema>

export const contactSchema = z.object({
    carId: z.string().nonempty('Car ID is required'),
    content: z.string().nonempty('Message is required'),
    name: z.string().optional(),
    email: z.string().email('Invalid Email ID').optional(),
    phone: z.string().optional()
})

export type ContactSchema = z.infer<typeof contactSchema>