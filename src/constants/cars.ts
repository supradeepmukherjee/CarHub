export const carTypes = [
    'SEDAN',
    'SUV',
    'TRUCK',
    'COUPE',
    'CONVERTIBLE',
    'HATCHBACK',
    'WAGON',
    'VAN',
    'PICKUP',
    'SPORTS',
] as const

export const fuelTypes = [
    'PETROL',
    'DIESEL',
    'ELECTRIC',
    'HYBRID',
] as const

export type CarType = (typeof carTypes)[number]
export type FuelType = (typeof fuelTypes)[number]