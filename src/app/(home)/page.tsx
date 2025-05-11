import { Input } from '@/components/ui/input'
import { } from '@prisma/client'
import { Image } from '@imagekit/next'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { CarIcon, Plus, Search } from 'lucide-react'
import Filters from './filters'
import Link from 'next/link'
import { Suspense } from 'react'
import { Card, CardContent } from '@/components/ui/card'

type Props = {
  searchParams:
  Promise<{
    type: string,
    page: string
  }>
}

const Page = ({ searchParams }: Props) => (
  <main className='min-h-screen'>
    <section className="relative h-[500px] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          alt='hero card'
          src={`/cover.avif`}
          fill
          className='object-cover brightness-50'
        />
      </div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl font-bold mb-6 text-white">
          Find your Dream Car
        </h1>
        <p className="text-xl mb-8 text-white">
          Browse through 1000s of Quality Cars
        </p>

        <div className="bg-white dark:bg-zinc-950 rounded-lg p-4 max-w-4xl mx-auto shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input placeholder='Search' className='md:col-span-2' />
            <Select>
              <SelectTrigger>
                <SelectValue placeholder='Price Range' />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='0-500000'>
                  Rs.0 - Rs.5,00,000
                </SelectItem>
                <SelectItem value='500000-1000000'>
                  Rs.5,00,000 - Rs.10,00,000
                </SelectItem>
                <SelectItem value='1000000-1500000'>
                  Rs.10,00,000 - Rs.15,00,000
                </SelectItem>
                <SelectItem value='1500000-2000000'>
                  Rs.15,00,000 - Rs.20,00,000
                </SelectItem>
                <SelectItem value='2000000++'>
                  Rs.20,00,000+
                </SelectItem>
              </SelectContent>
            </Select>
            <Button className='w-full'>
              <Search className='mr-2 h-4 w-4' /> Search
            </Button>
          </div>
        </div>
      </div>
    </section>
    <section className="max-w-7xl mx-auto py-16 px-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">
          Featured Cars
        </h2>
        <div className="flex gap-2">
          <Filters />
          <Button asChild>
            <Link href='/cars/add'>
              <Plus className='mr-2 h-4 w-4' /> Add Listing
            </Link>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Suspense fallback={<div className='h-48 bg-gray-200 animate-pulse'></div>}>
          <Featured searchParams={searchParams} />
        </Suspense>
      </div>
    </section>
    <section className="bg-neutral-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <div className="text-center" key={i}>
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CarIcon className='h-8 w-8' />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {f.title}
              </h3>
              <p className="text-grey-400">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </main>
)

const Featured = async ({ searchParams }: Props) => {
  const { page = '1', type = 'all' } = await searchParams
  return sampleCars.map(c => (
    <Card key={c.id} className='overflow-hidden'>
      <div className="relative h-48">
        <Image src={c.imgs[0]} alt={c.name} fill className='object-cover' />
      </div>
      <CardContent className='p-4'>
        <div className="flex justify-between items-start mb-2">
          <div className="">
            <h3 className="text-xl font-semibold">
              {c.name}
            </h3>
            <p className="text-sm text-gray-500">
              {c.year} | {c.mileage} km
            </p>
          </div>
          <p className="text-xl font-bold text-primary">
            Rs.{c.price.toLocaleString()}
          </p>
        </div>
        <div className="flex gap-2 mt-4">
          <Button className='w-full' asChild>{/* try without asChild */}
            <Link href={`/cars/${c.id}`}>
              View Details
            </Link>
          </Button>
          <Button className='w-full' asChild variant='outline'>{/* try without asChild */}
            <Link href={`/contact/${c.id}`}>
              Contact Seller
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  ))
}

const features = [
  {
    title: 'Verified Dealers',
    desc: 'All our dealers are thoroughly vetted and verified to ensure quality service'
  },
  {
    title: 'Secure Transactions',
    desc: 'Your purchases are protected with our secure payment system'
  },
  {
    title: 'Quality Guarantee',
    desc: 'Every vehicle undergoes a rigorous inspection process'
  },
]

const sampleCars = [
  {
    id: "c1a1e5b2-8d9f-4b3e-9214-27c3bcb9d001",
    name: "Civic LX",
    brand: "Honda",
    type: "SEDAN",
    year: 2020,
    mileage: 25000,
    colors: ["Black", "Silver"],
    price: 22000.0,
    desc: "Reliable and fuel-efficient sedan with excellent handling.",
    imgs: ["https://example.com/civic-front.jpg", "https://example.com/civic-side.jpg"],
    userId: "user-001",
    isSold: false,
    isFeatured: true,
    isNew: false,
    features: ["Bluetooth", "Backup Camera", "Cruise Control"],
    location: "Bangalore",
    fuelType: "PETROL",
    transmission: "AUTOMATIC",
    specs: null,
    seller: null,
    createdAt: new Date("2023-05-10T08:00:00Z"),
    updatedAt: new Date("2024-04-15T08:00:00Z"),
    savedBy: [],
    reqs: []
  },
  {
    id: "d2f9a6b7-53fc-41e1-ae88-9f6e3bcb2d12",
    name: "Model Y",
    brand: "Tesla",
    type: "SUV",
    year: 2022,
    mileage: 12000,
    colors: ["White", "Red"],
    price: 54000.0,
    desc: "Electric SUV with autopilot and advanced safety features.",
    imgs: ["https://example.com/modely-front.jpg", "https://example.com/modely-interior.jpg"],
    userId: "user-002",
    isSold: false,
    isFeatured: false,
    isNew: true,
    features: ["Autopilot", "Panoramic Roof", "Touchscreen"],
    location: "Delhi",
    fuelType: "ELECTRIC",
    transmission: "AUTOMATIC",
    specs: null,
    seller: null,
    createdAt: new Date("2023-08-01T08:00:00Z"),
    updatedAt: new Date("2024-04-20T08:00:00Z"),
    savedBy: [],
    reqs: []
  },
  {
    id: "a7fbc239-cf74-40ef-8a6f-3c1dd93174fc",
    name: "Fortuner",
    brand: "Toyota",
    type: "SUV",
    year: 2021,
    mileage: 30000,
    colors: ["Gray", "Black"],
    price: 42000.0,
    desc: "Rugged SUV perfect for off-road and family travel.",
    imgs: ["https://example.com/fortuner-exterior.jpg", "https://example.com/fortuner-interior.jpg"],
    userId: "user-003",
    isSold: true,
    isFeatured: false,
    isNew: false,
    features: ["4WD", "Navigation", "Airbags"],
    location: "Mumbai",
    fuelType: "DIESEL",
    transmission: "MANUAL",
    specs: null,
    seller: null,
    createdAt: new Date("2023-01-15T08:00:00Z"),
    updatedAt: new Date("2024-02-20T08:00:00Z"),
    savedBy: [],
    reqs: []
  }
]

export default Page