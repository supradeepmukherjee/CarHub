'use server'

import { ai } from "@/lib/ai"
import { carNotFound, extractJSON } from "@/lib/utils"

export const generate = async (name: string, desc: string) => {
    const imgPath = `${name}.jpg`
    try {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_IMGKIT_URL}/ik-genimg-prompt-${(encodeURIComponent(desc))}/${imgPath}`,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Basic ${btoa(process.env.IMGKIT_PRIVATE_KEY!)}:`
                }
            }
        )
        if (!res.ok) throw new Error('Failed to generate image')
        const blob = await res.blob()
        const buffer = await blob.arrayBuffer()
        const base64 = Buffer.from(buffer).toString('base64')
        return {
            base64Data: `data:image/jpeg;base64,${base64}`,
            name: imgPath
        }
    } catch (err) {
        console.log(err)
        throw new Error('Failed to Generate Image')
    }
}

export const autoGenerate = async (name: string) => {
    const res = await ai.generateCarAgent(name)
    return extractJSON(res)
}

export const search = async (t: string) => {
    const res = await ai.searchAgent(t)
    if (carNotFound(res)) throw new Error('No Car Found')
    return res
}