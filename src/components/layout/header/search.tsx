'use client'

import { search } from "@/actions/ai"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { SearchIcon, SmileIcon } from "lucide-react"
import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"
import { toast } from "sonner"
import { string } from "zod"

const Search = () => {
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [desc, setDesc] = useState('')
  const router = useRouter()
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!desc || desc.trim() === '') return toast.error('Please type something first')
    setLoading(true)
    try {
      const res: 'No Car Found' | 'Error generating car search' | string = await search(desc)
      const id = string().parse(res)
      toast.success('WOW! A car has matched your search.')
      router.replace('/car/' + id)
      setOpen(false)
    } catch (err) {
      console.log(err)
      if(err instanceof Error) toast.error('Sorry! No Car Found.')
      else toast.error('OOPS! Something went wrong.')
  } finally {
      setDesc('')
      setLoading(false)
    }
  }
  return (
    <Dialog onOpenChange={setOpen} open={open}>
      <DialogTrigger className="ml-auto mr-4 flex items-center gap-1 bg-muted rounded-lg px-4 py-2 hover:bg-muted">
        <SearchIcon className="h-4 w-4" /> Search with AI
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            What type of car do you like?
          </DialogTitle>
          <DialogDescription>
            You can tell specifications like color, type, model. eg. I like a red SUV with a sunroof
          </DialogDescription>
        </DialogHeader>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <Textarea
            placeholder="Write about your dream car"
            value={desc}
            onChange={e => setDesc(e.target.value)}
            rows={5}
            className="max-h-[20rem]"
            // @ts-expect-error abc
            style={{ fieldSizing: 'content' }}
          />
          <Button disabled={loading} className="flex items-center gap-1">
            {loading ?
              'Searching...'
              :
              <>
                <SmileIcon className="h-5 w-5" /> Find my Dream Car
              </>}
          </Button>
        </form>
      </DialogContent>
    </Dialog>

  )
}

export default Search