'use server'

import { auth } from "@/auth"
import { prisma } from "@/lib/prisma"
import { unstable_cache } from "next/cache"

export const getProfile = unstable_cache(async (email: string | null | undefined) => {
    if (!email) throw new Error('Email ID is required')
    const user = await prisma.user.findUnique({ where: { email } })
    if (!user) throw new Error('User Not Found')
    return user
}, [], { revalidate: 3600 * 24 })

export const getStarred = async () => {
    const session = await auth()
    const authUser = session?.user
    if (!authUser) throw new Error('Unauthenticated')
    const user = await getProfile(authUser.email)
    if (!user) throw new Error('User Not Found')
    const cars = await prisma.car.findMany({
        where: { savedBy: { some: { id: user.id } } },
        include: {
            specs: true,
            savedBy: { select: { id: true } }
        }
    })
    return cars
}