'use server'

import { prisma } from "@/lib/prisma"
import { unstable_cache } from "next/cache"

export const getProfile = unstable_cache(async (email: string | null | undefined) => {
    if (!email) throw new Error('Email ID is required')
    const user = await prisma.user.findUnique({ where: { email } })
    if (!user) throw new Error('User Not Found')
    return user
}, [], { revalidate: 3600 * 24 })