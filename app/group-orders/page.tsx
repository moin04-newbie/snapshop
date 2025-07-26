import Image from "next/image"
import { MapPin, Users, Clock, CheckCircle } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
// Removed MapWidget import due to missing module

const mockGroupOrders = [
  {
    id: "go1",
    item: "Potatoes (50kg)",
    supplier: "Fresh Greens Mart",
    currentVendors: 3,
    targetVendors: 5,
    eta: "2 days",
    location: "Mumbai, Bandra",
    imageUrl: "/Pot.jpg",
  },
  {
    id: "go2",
    item: "Red Chilli Powder (10kg)",
    supplier: "Spice Route Traders",
    currentVendors: 2,
    targetVendors: 4,
    eta: "3 days",
    location: "Delhi, Karol Bagh",
    imageUrl: "/chilli.jpg",
  },
  {
    id: "go3",
    item: "Refined Sunflower Oil (20L)",
    supplier: "Oil & Ghee Emporium",
    currentVendors: 5,
    targetVendors: 5,
    eta: "1 day",
    location: "Bangalore, Koramangala",
    imageUrl: "/oil.jpg",
  },
  {
    id: "go4",
    item: "Onions (100kg)",
    supplier: "Local Produce Co.",
    currentVendors: 1,
    targetVendors: 3,
    eta: "4 days",
    location: "Chennai, T. Nagar",
    imageUrl: "/onion.jpg",
  },
]

export default function GroupOrderPage() {
  return (
    <div className="flex-1 p-4 md:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Group Orders</h1>
        <p className="text-lg text-supply-text dark:text-gray-300 mb-8">
          Join forces with nearby vendors to unlock bulk discounts on raw materials.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map Integration */}
          <Card className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
            <CardHeader className="p-4 pb-0">
              <CardTitle className="text-xl text-gray-900 dark:text-white">Nearby Group Orders Map</CardTitle>
              <CardDescription className="text-supply-text dark:text-gray-300">
                Visualize active group orders in your area.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center text-supply-text dark:text-gray-400">
                {/* TODO: MapWidget component not found. Replace with a placeholder for now. */}
                <span className="text-center text-gray-500 dark:text-gray-400">
                  Map coming soon
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Group Order List */}
          <div className="space-y-6">
            {mockGroupOrders.map((order) => (
              <Card
                key={order.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-4 flex items-center gap-4">
                  <Image
                    src={order.imageUrl || "/images/generic-banner.png"}
                    alt={order.item}
                    width={80}
                    height={80}
                    className="rounded-lg object-cover"
                  />
                  <div className="flex-1 space-y-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{order.item}</h3>
                    <p className="text-sm text-supply-text dark:text-gray-300">
                      Supplier: <span className="font-medium">{order.supplier}</span>
                    </p>
                    <p className="text-sm text-supply-text dark:text-gray-300 flex items-center gap-1">
                      <MapPin className="h-4 w-4" /> {order.location}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-supply-text dark:text-gray-300">
                      <Users className="h-4 w-4" />
                      <span>
                        {order.currentVendors}/{order.targetVendors} vendors joined
                      </span>
                      <Progress
                        value={(order.currentVendors / order.targetVendors) * 100}
                        className="w-24 h-2 bg-gray-200 dark:bg-gray-700 [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:bg-supply-success"
                      />
                    </div>
                    <p className="text-sm text-supply-text dark:text-gray-300 flex items-center gap-1">
                      <Clock className="h-4 w-4" /> ETA: {order.eta}
                    </p>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    {order.currentVendors === order.targetVendors ? (
                      <Badge className="bg-supply-success text-white px-3 py-1 rounded-full flex items-center gap-1">
                        <CheckCircle className="h-4 w-4" /> Deal Closed
                      </Badge>
                    ) : (
                      <Button className="bg-supply-primary text-white hover:bg-supply-primary/90 rounded-lg shadow-sm hover:shadow-md transition-all">
                        Join Order
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
