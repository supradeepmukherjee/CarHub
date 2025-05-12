import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Skeleton } from "@/components/ui/skeleton"
import { BookmarkIcon } from "lucide-react"
import { Suspense } from "react"

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

            </div>
          </ScrollArea>
        </Suspense>
      </SheetContent>
    </Sheet>
  )
}

export default Bookmarks