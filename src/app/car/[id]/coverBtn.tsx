'use client'

import { star } from "@/actions/car"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { HeartIcon, Share2Icon } from "lucide-react"
import { useOptimistic } from "react"
import { toast } from "sonner"

const copy = async (s: string) => {
  try {
    navigator.clipboard.writeText(s)
    toast.success('Copied to Clipboard')
  } catch (err) {
    console.log(err)
    toast.success('Failed to copy!')
  }
}

const CoverBtn = (
  { carID, savedBy, userID }
    :
    {
      savedBy: { id: string }[]
      carID: string
      userID: string
    }
) => {
  const isSavedByMe = savedBy.some(({ id }) => id === userID)
  const [isSaved, startTransition] = useOptimistic(isSavedByMe, s => !s)
  return (
    <div className="absolute top-4 right-4 flex gap-2">
      <Button variant='outline' size='icon' onClick={() => copy(window.location.href)}>
        <Share2Icon className="h-5 w-5" />
      </Button>
      <form action={async () => {
        startTransition(true)
        await star(carID)
      }}>
        <Button variant='outline' size='icon'>
          <HeartIcon className={cn('h-5 w-5', isSaved ? 'fill-primary' : '')} />
        </Button>
      </form>
    </div>
  )
}

export default CoverBtn