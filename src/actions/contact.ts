'use server'

import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { contactSchema, ContactSchema } from "@/lib/zod"

export const contact = async (data: ContactSchema) => {
    contactSchema.parse(data)
    const { carId, content, email, name, phone } = data
    if (!carId) throw new Error('Car ID are required')
    const session = await auth()
    if (!session?.user) throw new Error('User not Authenticated')
    const user = await prisma.user.findUnique({
        where: { email: session.user.email! },
        select: { id: true }
    })
    if (!user) throw new Error('User not Found')
    const car = await prisma.car.findUnique({
        where: { id: carId },
        select: { id: true }
    })
    if (!car) throw new Error('Car not Found')
    await prisma.msg.create({
        data: {
            content,
            email,
            name,
            phone,
            userId: user.id
        }
    })
}