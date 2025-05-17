import { getCarByID, getSellerInfo } from "@/actions/car"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { cn } from "@/lib/utils"
import { Image } from "@imagekit/next"
import { format } from "date-fns"
import { Mail, MapPin, Phone } from "lucide-react"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import Form from "./form"

type Props = { params: Promise<{ id?: string }> }

const Contact = ({ params }: Props) => (
  <main className="min-h-screen py-16">
    <div className="max-w-7xl mx-auto px-4">
      <Suspense fallback={<Loader />}>
        <Main params={params} />
      </Suspense>
    </div>
  </main>
)

const Main = async ({ params }: Props) => {
  const { id } = await params
  if (!id) return notFound()
  const car = await getCarByID(id)
  if (!car) return notFound()
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle>
              Contact Seller
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-4 p-4 bg-primary/5 rounded-lg">
              <div className="relative h-20 w-32 flex-shrink-0">
                <Image alt={car.name} src={car.imgs[0]} className="rounded-lg object-cover" fill />
              </div>
              <div className="">
                <h2 className="font-semibold">
                  {car.name}
                </h2>
                <p className="text-sm text-gray-500">
                  {car.year} - {car.mileage} km
                </p>
                <p className="text-lg font-bold text-primary mt-1">
                  Rs. {car.price}
                </p>
              </div>
            </div>
            <Form id={id} />
          </CardContent>
        </Card>
      </div>
      <div className="">
        <Card>
          <CardHeader>
            Seller Information
          </CardHeader>
          <CardContent className="space-y-6">
            <Suspense fallback={<Skeleton className="h-16 w-16" />}>
              <Seller id={id} />
            </Suspense>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

const Seller = async ({ id }: { id: string }) => {
  if (!id) return notFound()
  const seller = await getSellerInfo(id)
  if (!seller) return notFound()
  return (
    <>
      <div className="flex items-center gap-4">
        <div className="relative h-16 w-16">
          <Image
            alt={seller.name}
            src={seller.img || 'https://ik.imagekit.io/83jhglbgl/default-image.jpg'} className="rounded-full object-cover"
            width={200}
            height={200}
          />
        </div>
        <div className="">
          <h3 className="font-semibold">
            {seller.name}
          </h3>
          <p className="text-sm text-gray-500">
            Verified Seller since {format(new Date(seller.createdAt), 'MMMM yyyy')}
          </p>
        </div>
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <MapPin className="h-5 w-5 text-gray-500" />
          <div className="">
            <p className="font-medium">
              Location
            </p>
            <p className="text-sm text-gray-500">
              {seller.address}, {seller.city}, {seller.state}, {seller.country}, {seller.postalCode}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Phone className="h-5 w-5 text-gray-500" />
          <div className="">
            <p className="font-medium">
              Phone
            </p>
            <p className="text-sm text-gray-500">
              {seller.phone}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-gray-500" />
          <div className="">
            <p className="font-medium">
              Email
            </p>
            <p className="text-sm text-gray-500">
              {seller.email}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Mail className="h-5 w-5 text-gray-500" />
          <div className="">
            <p className="font-medium">
              Business Hours
            </p>
            <p className="text-sm text-gray-500">
              Mon - Sat: 9 AM - 7 PM
            </p>
            <p className="text-sm text-gray-500">
              Sun: 10 AM - 5 PM
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

const Loader = () => (
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
    <Skeleton className="h-96 lg:col-span-2" />
    <div className="lg:col-span-1">
      {new Array(8).map((_, i) => <Skeleton className={cn('h-96', i > 0 ? 'mt-4' : '')} key={i} />)}
    </div>
  </div>
)

export default Contact