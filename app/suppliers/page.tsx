"use client"

import { useState } from "react"
import { Search, MapPin, Filter, ChevronDown } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { SupplierCard } from "@/components/supplier-card"

const mockSuppliers = [
  {
    id: "1",
    name: "Fresh Greens Mart",
    rating: 4.8,
    reviews: 120,
    distance: "2.5 km",
    materials: ["Vegetables", "Fruits", "Herbs"],
    priceRange: "₹₹",
    deliverySpeed: "1-2 hours",
    imageUrl: "/mart.jpg",
  },
  {
    id: "2",
    name: "Spice Route Traders",
    rating: 4.5,
    reviews: 85,
    distance: "5.1 km",
    materials: ["Spices", "Pulses", "Grains"],
    priceRange: "₹₹₹",
    deliverySpeed: "Same day",
    imageUrl: "/spice.jpg",
  },
  {
    id: "3",
    name: "Oil & Ghee Emporium",
    rating: 4.9,
    reviews: 150,
    distance: "1.8 km",
    materials: ["Cooking Oils", "Ghee", "Dairy"],
    priceRange: "₹₹",
    deliverySpeed: "30 mins",
    imageUrl: "/oill.jpg",
  },
  {
    id: "4",
    name: "Bakery Essentials Co.",
    rating: 4.2,
    reviews: 60,
    distance: "7.0 km",
    materials: ["Flour", "Sugar", "Yeast"],
    priceRange: "₹",
    deliverySpeed: "Next day",
    imageUrl: "/bakery.jpg",
  },
  {
    id: "5",
    name: "Meat & Poultry Hub",
    rating: 4.7,
    reviews: 95,
    distance: "3.2 km",
    materials: ["Chicken", "Mutton", "Fish"],
    priceRange: "₹₹₹₹",
    deliverySpeed: "1 hour",
    imageUrl: "/meat.jpg",
  },
]

export default function SupplierDiscoveryPage() {
  const [category, setCategory] = useState("all")
  const [location, setLocation] = useState("current")

  return (
    <div className="flex-1 p-4 md:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Discover Suppliers</h1>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-supply-text dark:text-gray-400" />
            <Input
              type="text"
              placeholder="Search suppliers or materials..."
              className="w-full pl-10 pr-4 py-2 rounded-lg shadow-sm focus:ring-supply-primary focus:border-supply-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-200 dark:border-gray-700"
            />
          </div>
          <div className="relative flex-1">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-supply-text dark:text-gray-400" />
            <Input
              type="text"
              placeholder="Your location (e.g., Mumbai)"
              className="w-full pl-10 pr-4 py-2 rounded-lg shadow-sm focus:ring-supply-primary focus:border-supply-primary bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-200 dark:border-gray-700"
              defaultValue="Current Location"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center gap-2 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white text-supply-text hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 border-gray-200 dark:border-gray-700"
              >
                <Filter className="h-5 w-5" />
                Category: {category === "all" ? "All" : category}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <DropdownMenuLabel className="text-gray-900 dark:text-white">Filter by Category</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-700" />
              <DropdownMenuRadioGroup value={category} onValueChange={setCategory}>
                <DropdownMenuRadioItem
                  value="all"
                  className="text-gray-900 dark:text-gray-200 data-[state=checked]:bg-supply-primary data-[state=checked]:text-white"
                >
                  All Categories
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="Vegetables"
                  className="text-gray-900 dark:text-gray-200 data-[state=checked]:bg-supply-primary data-[state=checked]:text-white"
                >
                  Vegetables
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="Spices"
                  className="text-gray-900 dark:text-gray-200 data-[state=checked]:bg-supply-primary data-[state=checked]:text-white"
                >
                  Spices
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="Grains"
                  className="text-gray-900 dark:text-gray-200 data-[state=checked]:bg-supply-primary data-[state=checked]:text-white"
                >
                  Grains
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="Oils"
                  className="text-gray-900 dark:text-gray-200 data-[state=checked]:bg-supply-primary data-[state=checked]:text-white"
                >
                  Oils
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="Dairy"
                  className="text-gray-900 dark:text-gray-200 data-[state=checked]:bg-supply-primary data-[state=checked]:text-white"
                >
                  Dairy
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem
                  value="Meat"
                  className="text-gray-900 dark:text-gray-200 data-[state=checked]:bg-supply-primary data-[state=checked]:text-white"
                >
                  Meat & Poultry
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mockSuppliers.map((supplier) => (
            <SupplierCard key={supplier.id} {...supplier} />
          ))}
        </div>
      </div>
    </div>
  )
}
