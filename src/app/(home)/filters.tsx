'use client'

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Popover, PopoverContent } from "@/components/ui/popover"
import { carTypes } from "@/constants/cars"
import { PopoverTrigger } from "@radix-ui/react-popover"
import { Filter } from "lucide-react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const Filters = () => {
  const router = useRouter()
  const [filters, setFilters] = useState<string[]>([])
  useEffect(() => {
    const query = window.location.href.split('?')?.[1]
    const queries = query?.split('&') || []
    const typeQuery = queries.find(q => q.startsWith('type='))
    const types = typeQuery ? typeQuery.split('=')[1].split(',') : []
    setFilters(types.map(t => t.toUpperCase()))
  }, [])
  useEffect(() => {
    const id = setTimeout(() => {
      const query = window.location.href.split('?')?.[1]
      const queries = query?.split('&') || []
      const newQuery = queries.length > 0 ?
        queries.map(q => {
          if (q.startsWith('type=')) return `type=${filters.join(',')}`
          return q
        })
        : [`type=${filters.join(',')}`]
      router.push(`?${newQuery.join('&')}`)
    }, 700);
    return () => {
      clearTimeout(id)
    }
  }, [filters, router])
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant='outline'>
          <Filter className='mr-2 w-4 h-4' /> Filter
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full">
        <h5 className="font-bold">
          Car Type
        </h5>
        <div className="flex flex-col gap-1 p-2">
          {carTypes.map(c => (
            <div key={c} className="flex items-center space-x-2">
              <Checkbox
                id={c}
                checked={filters.includes(c)}
                onCheckedChange={change => setFilters(change ? [...filters, c] : filters.filter(t => t !== c))}
              />
              <label htmlFor={c} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {c}
              </label>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default Filters