import { z } from 'zod'

export const generateImgSchema = z.object({
    name: z.string().min(3, 'File Name must be of atleast 5 characters'),
    desc: z.string().min(5, 'Description must be of atleast 5 characters')
})

export type GenerateImgSchema = z.infer<typeof generateImgSchema>