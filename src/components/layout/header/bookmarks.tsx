import { getStarred } from "@/actions/user"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import { Image } from "@imagekit/next"
import { BookmarkIcon } from "lucide-react"
import Link from "next/link"
import { Suspense } from "react"
import Unstar from "./unstar"

const Bookmarks = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <p className="flex items-center hover:bg-muted cursor-pointer gap-1 p-1">
          <BookmarkIcon className="h-4 w-4" /> Saved
        </p>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="flex items-center gap-1">
            Bookmarks <BookmarkIcon className="h-4 w-4" />
          </SheetTitle>
        </SheetHeader>
        <Suspense fallback={<Skeleton className="h-[calc(100vh-64px)]" />}>
          <ScrollArea className="h-[calc(100vh-64px)] p-4">
            <div className="flex flex-col gap-4">
              <Main />
            </div>
          </ScrollArea>
        </Suspense>
      </SheetContent>
    </Sheet>
  )
}

const Main = async () => {
  const cars = await getStarred()
  if (!cars) return (
    <p className="text-center">
      No Cars Found
    </p>
  )
  if (cars.length === 0) return (
    <p className="text-center">
      No Cars Saved
    </p>
  )
  return cars.map(c => (
    <Card key={c.id} className="overflow-hidden">
      <div className="relative h-48">
        <Image src={c.imgs[0]} alt={c.name} fill className="object-cover" />
        <Unstar id={c.id} />
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <div className="">
            <h3 className="text-xl font-semibold">
              {c.name}
            </h3>
            <p className="text-sm text-gray-500">
              {c.year} - {c.mileage} miles
            </p>
          </div>
          <p className="text-xl font-bold text-primary">
            Rs. {c.price}
          </p>
        </div>
        <div className="flex gap-2 mt-4">
          <Button className="w-full" asChild>
            <Link href={'/car/' + c.id}>
              View Details
            </Link>
          </Button>
          <Button className="w-full" asChild variant='outline'>
            <Link href={'/contact/' + c.id}>
              Contact Seller
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  ))
}

export default Bookmarks