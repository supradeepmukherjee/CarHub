import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const extractJSON = (s: string) => {
  const match = s.match(/\{[\s\S]*?\}/)
  if (!match) throw new Error('No JSON Object found in the string provided')
  return JSON.parse(match[0])
}

export const carNotFound = (r: string) => (/No car found/i.test(r)) ? true: false