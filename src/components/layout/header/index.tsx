import Link from "next/link"
import Search from "./search"
import Switch from "./themeSwitch"
import { auth, signOut } from "@/auth"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Image } from "@imagekit/next"
import { LogOutIcon } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import Bookmarks from "./bookmarks"

export const Header = () => {
  return (
    <header className="h-16 flex items-center">
      <Link href={`/`} className="ml-4">
        Logo
      </Link>
      <Search />
      <Switch />
      <HeaderAuth />
    </header>
  )
}

const HeaderAuth = async () => {
  const session = await auth()
  const user = session?.user
  const logout = async () => {
    'use server'
    await signOut()
  }
  return (
    <div className="flex items-center gap-4 mx-2">
      {user ?
        <Popover>
          <PopoverTrigger>
            <div className="flex items-center gap-2 cursor-pointer">
              <Image
                alt="User Avatar"
                src={user.image!}
                className="h-8 w-8 rounded-full"
                width={32}
                height={32}
              />
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-full px-0 py-2">
            <p className="p-2 font-bold">
              My Profile
            </p>
            <Separator />
            <Bookmarks />
            <form action={logout}>
              <button type="submit" className="flex w-full items-center hover:bg-muted gap-1 p-1">
                <LogOutIcon className="h-4 w-4" /> Log Out
              </button>
            </form>
          </PopoverContent>
        </Popover>
        :
        <Link href='/api/auth/signin' className="btn btn-primary cursor-pointer">
          <Button>
            Sign In
          </Button>
        </Link>
      }
    </div>
  )
}