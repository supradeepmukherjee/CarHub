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
import { getCars } from '@/actions/car'

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
          src={`/CarHub/cover.avif`}
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
            <Link href='/add'>
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
  const { page = 1, type = 'all' } = await searchParams
  const cars = await getCars(Number(page), type)
  return cars.map(c => (
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
          <Button className='w-[50%]' asChild>{/* try without asChild */}
            <Link href={`/car/${c.id}`}>
              View Details
            </Link>
          </Button>
          <Button className='w-[50%]' asChild variant='outline'>{/* try without asChild */}
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

export default Page