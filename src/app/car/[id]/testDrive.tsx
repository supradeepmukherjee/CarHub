'use client'

import { scheduleDrive } from "@/actions/car"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"

const TestDrive = ({ carId }: { carId: string }) => {
  const [date, setDate] = useState<Date>()
  const [open, setOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const min = new Date()
  min.setDate(min.getDate() + 1)
  const max = new Date()
  max.setDate(max.getDate() + 30)
  const handleSubmit = async () => {
    if (!date) return toast.error('Please Select a Date for your Test Drive ')
    setSubmitting(true)
    try {
      await scheduleDrive({ date, carId })
      setOpen(false)
      toast.success('Congratulations! Your Test Drive has been Scheduled Successfully')
    } catch (err) {
      console.log(err)
      toast.error('Oops, Something went wrong while scheduling your test drive')
    } finally {
      setSubmitting(false)
    }
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant='outline' className="w-full">
          Schedule Test Drive
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            Schedule a Test Drive
          </DialogTitle>
          <DialogDescription>
            Select a Date for Test Drive
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col space-y-4 py-4">
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant='outline' className="w-full justify-start text-left font-normal">
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ?
                      format(date, 'PPP')
                      :
                      <span>
                        Pick a Date
                      </span>
                    }
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={d =>
                      d < min ||
                      d > max ||
                      d.getDay() === 0 // Not on Sunday
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
          <Button onClick={handleSubmit} disabled={submitting || !date}>
            {submitting ? 'Scheduling your Test Drive...' : 'Schedule Test Drive'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default TestDrive