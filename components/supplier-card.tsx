import Image from "next/image"
import Link from "next/link"
import { Star, MapPin, Truck, Clock } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface SupplierCardProps {
  id: string
  name: string
  rating: number
  reviews: number
  distance: string
  materials: string[]
  priceRange: string
  deliverySpeed: string
  imageUrl: string
}

export function SupplierCard({
  id,
  name,
  rating,
  reviews,
  distance,
  materials,
  priceRange,
  deliverySpeed,
  imageUrl,
}: SupplierCardProps) {
  return (
    <Card className="w-full max-w-sm bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      <CardHeader className="p-0 relative h-40">
        <Image
          src={imageUrl || "/images/generic-banner.png"}
          alt={`${name} banner`}
          layout="fill"
          objectFit="cover"
          className="rounded-t-xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-xl" />
        <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white">
          <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
          <span className="font-semibold">{rating.toFixed(1)}</span>
          <span className="text-sm">({reviews} reviews)</span>
        </div>
      </CardHeader>
      <CardContent className="p-4 space-y-3">
        <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{name}</CardTitle>
        <CardDescription className="flex items-center gap-2 text-supply-text dark:text-gray-300">
          <MapPin className="h-4 w-4" />
          <span>{distance} away</span>
        </CardDescription>
        <div className="flex flex-wrap gap-2">
          {materials.map((material, index) => (
            <Badge
              key={index}
              variant="secondary"
              className="bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
            >
              {material}
            </Badge>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm text-supply-text dark:text-gray-300">
          <div className="flex items-center gap-1">
            <Truck className="h-4 w-4" />
            <span>{priceRange}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{deliverySpeed}</span>
          </div>
        </div>
        <Button
          asChild
          className="w-full bg-supply-primary text-white hover:bg-supply-primary/90 rounded-lg shadow-sm hover:shadow-md transition-all"
        >
          <Link href={`/suppliers/${id}`}>View Profile</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
