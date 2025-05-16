'use server'

import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { AddSchema } from "@/lib/zod"
import { revalidatePath, unstable_cache } from "next/cache"

export const addCar = async (data: AddSchema) => {
    const session = await auth()
    const authUser = session?.user
    if (!authUser) throw new Error('User not Authenticated')
    const dbUser = await prisma.user.findUnique({ where: { email: authUser.email! } })
    if (!dbUser) throw new Error('User not Found')
    const { brand, desc, location, mileage, name, price, type, year, colors, features, fuelType, imgs, transmission, acceleration, doors, engineCapacity, height, hp, length, seats, topSpeed, torque, weight, width, sellerAddress, sellerCity, sellerCountry, sellerEmail, sellerName, sellerPhone, sellerPostalCode, sellerState, sellerWebsite, sellerImg } = data
    await prisma.$transaction(async t => {
        const car = await t.car.create({
            data: {
                brand,
                desc,
                location,
                mileage,
                name,
                price,
                type,
                year,
                colors,
                features,
                fuelType,
                imgs,
                transmission,
                userId: dbUser?.id
            }
        })
        await Promise.all([
            t.seller.create({
                data: {
                    name: sellerName,
                    address: sellerAddress,
                    carId: car.id,
                    city: sellerCity,
                    country: sellerCountry,
                    email: sellerEmail,
                    img: sellerImg,
                    phone: sellerPhone,
                    postalCode: sellerPostalCode,
                    state: sellerState,
                    website: sellerWebsite
                }
            }),
            t.specs.create({
                data: {
                    acceleration, engineCapacity, doors, height, hp, length, seats, topSpeed, torque, weight, width,
                    carId: car.id
                }
            })
        ])
        return car
    })
    revalidatePath('/')
}
