export const authenticator = async () => {
    try {
        const res = await fetch('/api/upload-auth')
        if (!res.ok) {
            const err = await res.text()
            throw new Error(`Response failed with status ${res.status}: ${err}`)
        }
        const data = await res.json()
        return data
    } catch (err) {
        console.log(err)
        throw new Error('Authentication Request Failed')
    }
}