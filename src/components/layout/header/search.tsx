'use client'

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
import { useState } from "react"

const Search = () => {
  const [loading, setLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const [desc, setDesc] = useState('')
  const handleSubmit = async () => {
    setLoading(true)
    try {

    } catch (err) {
      console.log(err)
    } finally {
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