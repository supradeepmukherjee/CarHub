'use client'

import { star } from "@/actions/car"
import { LucideX } from "lucide-react"
import { useFormStatus } from "react-dom"

const Unstar = ({ id }: { id: string }) => {
  const { pending } = useFormStatus()
  return (
    <form action={async () => await star(id)}>
      <button disabled={pending} className="absolute top-2 right-2 p-1 bg-white rounded-full hover:bg-muted">
        {pending ? <span className="w-5 h-5 border-2 border-b-black border-white rounded-full block animate-spin" /> : <LucideX />}
      </button>
    </form>
  )
}

export default Unstar