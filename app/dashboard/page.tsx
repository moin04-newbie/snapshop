import Image from "next/image"
import Link from "next/link"
import { Truck, Star, RefreshCcw, CheckCircle, XCircle, Clock, ShoppingCart } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const mockOrders = [
  {
    id: "ORD001",
    item: "Potatoes (50kg)",
    supplier: "Fresh Greens Mart",
    status: "Delivered",
    deliveryDate: "2024-07-20",
    reorderId: "1",
    imageUrl: "/Pot.jpg",
  },
  {
    id: "ORD002",
    item: "Red Chilli Powder (10kg)",
    supplier: "Spice Route Traders",
    status: "In Transit",
    deliveryDate: "2024-07-28",
    reorderId: "2",
    imageUrl: "/chilli.jpg",
  },
  {
    id: "ORD003",
    item: "Refined Sunflower Oil (20L)",
    supplier: "Oil & Ghee Emporium",
    status: "Pending",
    deliveryDate: "2024-07-27",
    reorderId: "3",
    imageUrl: "/oil.jpg",
  },
  {
    id: "ORD004",
    item: "Onions (100kg)",
    supplier: "Local Produce Co.",
    status: "Cancelled",
    deliveryDate: "2024-07-18",
    reorderId: "4",
    imageUrl: "/onion.jpg",
  },
]

const mockFavoriteSuppliers = [
  {
    id: "1",
    name: "Fresh Greens Mart",
    materials: ["Vegetables", "Fruits"],
    rating: 4.8,
    imageUrl: "/mart.jpg",
  },
  {
    id: "2",
    name: "Spice Route Traders",
    materials: ["Spices", "Grains"],
    rating: 4.5,
    imageUrl: "/spice.jpg",
  },
  {
    id: "3",
    name: "Oil & Ghee Emporium",
    materials: ["Cooking Oils", "Ghee"],
    rating: 4.9,
    imageUrl: "/oill.jpg",
  },
]

export default function VendorDashboard() {
  return (
    <div className="flex-1 p-4 md:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Vendor Dashboard</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Quick Stats */}
          <Card className="bg-white dark:bg-gray-800 rounded-xl shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-supply-text dark:text-gray-300">Total Orders</CardTitle>
              <ShoppingCart className="h-4 w-4 text-supply-text dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">124</div>
              <p className="text-xs text-supply-text dark:text-gray-400">+15% from last month</p>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-800 rounded-xl shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-supply-text dark:text-gray-300">
                Pending Deliveries
              </CardTitle>
              <Truck className="h-4 w-4 text-supply-text dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">2</div>
              <p className="text-xs text-supply-text dark:text-gray-400">1 in transit, 1 pending</p>
            </CardContent>
          </Card>
          <Card className="bg-white dark:bg-gray-800 rounded-xl shadow-md">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-supply-text dark:text-gray-300">
                Favorite Suppliers
              </CardTitle>
              <Star className="h-4 w-4 text-supply-text dark:text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{mockFavoriteSuppliers.length}</div>
              <p className="text-xs text-supply-text dark:text-gray-400">Your top choices</p>
            </CardContent>
          </Card>
        </div>

        {/* Current & Past Orders */}
        <Card id="orders" className="bg-white dark:bg-gray-800 rounded-xl shadow-md mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-gray-900 dark:text-white">Current & Past Orders</CardTitle>
            <CardDescription className="text-supply-text dark:text-gray-300">
              Track your orders and reorder quickly.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-gray-200 dark:border-gray-700">
                  <TableHead className="w-[80px] text-supply-text dark:text-gray-400">Item</TableHead>
                  <TableHead className="text-supply-text dark:text-gray-400">Supplier</TableHead>
                  <TableHead className="text-supply-text dark:text-gray-400">Status</TableHead>
                  <TableHead className="hidden md:table-cell text-supply-text dark:text-gray-400">
                    Delivery Date
                  </TableHead>
                  <TableHead className="text-right text-supply-text dark:text-gray-400">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockOrders.map((order) => (
                  <TableRow key={order.id} className="border-gray-100 dark:border-gray-800">
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Image
                          src={order.imageUrl || "/images/generic-banner.png"}
                          alt={order.item}
                          width={40}
                          height={40}
                          className="rounded-md object-cover"
                        />
                        <span className="font-medium text-gray-900 dark:text-white">{order.item}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-supply-text dark:text-gray-300">{order.supplier}</TableCell>
                    <TableCell>
                      <Badge
                        className={
                          order.status === "Delivered"
                            ? "bg-supply-success text-white"
                            : order.status === "In Transit"
                              ? "bg-supply-primary text-white"
                              : order.status === "Pending"
                                ? "bg-yellow-500 text-white"
                                : "bg-red-500 text-white"
                        }
                      >
                        {order.status === "Delivered" && <CheckCircle className="h-3 w-3 mr-1" />}
                        {order.status === "In Transit" && <Truck className="h-3 w-3 mr-1" />}
                        {order.status === "Pending" && <Clock className="h-3 w-3 mr-1" />}
                        {order.status === "Cancelled" && <XCircle className="h-3 w-3 mr-1" />}
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="hidden md:table-cell text-supply-text dark:text-gray-300">
                      {order.deliveryDate}
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="outline"
                        size="sm"
                        className="rounded-lg text-supply-primary hover:bg-supply-primary/10 hover:text-supply-primary bg-transparent border-supply-primary dark:border-supply-primary/50"
                      >
                        <RefreshCcw className="h-4 w-4 mr-2" /> Reorder
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Favorite Suppliers List */}
        <Card id="favorites" className="bg-white dark:bg-gray-800 rounded-xl shadow-md">
          <CardHeader>
            <CardTitle className="text-xl text-gray-900 dark:text-white">Favorite Suppliers</CardTitle>
            <CardDescription className="text-supply-text dark:text-gray-300">
              Your preferred raw material partners.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {mockFavoriteSuppliers.map((supplier) => (
                <Card
                  key={supplier.id}
                  className="shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
                >
                  <CardContent className="p-4 flex items-center gap-4">
                    <Image
                      src={supplier.imageUrl || "/oill.jpg"}
                      alt={`${supplier.name} logo`}
                      width={50}
                      height={50}
                      className="rounded-full object-cover border border-gray-200 dark:border-gray-700"
                    />
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 dark:text-white">{supplier.name}</h3>
                      <p className="text-sm text-supply-text dark:text-gray-300">{supplier.materials.join(", ")}</p>
                      <div className="flex items-center text-xs text-supply-text dark:text-gray-400">
                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
                        <span>{supplier.rating.toFixed(1)}</span>
                      </div>
                    </div>
                    <Button
                      asChild
                      variant="ghost"
                      size="sm"
                      className="rounded-lg text-supply-primary hover:bg-supply-primary/10"
                    >
                      <Link href={`/suppliers/${supplier.id}`}>View</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
