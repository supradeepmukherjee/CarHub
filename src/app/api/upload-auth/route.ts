import { getUploadAuthParams } from '@imagekit/next/server'

export async function GET() {
    return Response.json(getUploadAuthParams({
        privateKey: process.env.IMGKIT_PRIVATE_KEY!,
        publicKey: process.env.NEXT_PUBLIC_IMGKIT_PUBLIC_KEY!
    }))
}