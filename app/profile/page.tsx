import Image from "next/image"
import Link from "next/link"
import { Mail, MapPin, Phone, Star, Settings } from "lucide-react"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const mockUserProfile = {
  name: "Priya Sharma",
  email: "priya.sharma@example.com",
  phone: "+91 98765 12345",
  location: "Mumbai, Bandra West",
  businessName: "Priya's Street Eats",
  profileImage: "/images/generic-avatar.png",
  totalOrders: 124,
  favoriteSuppliersCount: 3,
  pendingOrders: 2,
}

const mockRecentOrders= [
  {
    id: "s1",
    name: "Fresh Greens Mart",
    category: "Vegetables",
    rating: 4.8,
    imageUrl: "/mart.jpg",
  },
  {
    id: "ORD006",
    item: "Mustard Oil (5L)",
    supplier: "Oil & Ghee Emporium",
    status: "In Transit",
    date: "2024-07-25",
  },
  {
    id: "ORD007",
    item: "Cumin Seeds (2kg)",
    supplier: "Spice Route Traders",
    status: "Pending",
    date: "2024-07-26",
  },
]

const mockFavoriteSuppliers = [
  { id: "s1", name: "Fresh Greens Mart", category: "Vegetables", rating: 4.8 },
  { id: "s3", name: "Oil & Ghee Emporium", category: "Oils", rating: 4.9 },
]

export default function ProfilePage() {
  return (
    <div className="flex-1 p-4 md:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">My Profile</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* User Info Card */}
          <Card className="lg:col-span-1 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 flex flex-col items-center text-center">
            <Avatar className="h-24 w-24 mb-4 border-4 border-supply-primary shadow-md">
              <AvatarImage src="/images/generic-avatar.png" alt={mockUserProfile.name} />
              <AvatarFallback>{mockUserProfile.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{mockUserProfile.name}</h2>
            <p className="text-lg text-supply-text dark:text-gray-300 mb-2">{mockUserProfile.businessName}</p>
            <div className="space-y-2 text-sm text-supply-text dark:text-gray-300">
              <div className="flex items-center justify-center gap-2">
                <Mail className="h-4 w-4" />
                <span>{mockUserProfile.email}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{mockUserProfile.phone}</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>{mockUserProfile.location}</span>
              </div>
            </div>
            <Separator className="my-4 w-full bg-gray-200 dark:bg-gray-700" />
            <div className="flex gap-4 w-full justify-center">
              <Button
                asChild
                variant="outline"
                className="rounded-lg text-supply-primary border-supply-primary hover:bg-supply-primary/10 bg-transparent dark:border-supply-primary/50 dark:hover:bg-supply-primary/20"
              >
                <Link href="/settings">
                  <Settings className="h-4 w-4 mr-2" /> Edit Profile
                </Link>
              </Button>
            </div>
          </Card>

          {/* Stats and Activity */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 text-center">
                <CardTitle className="text-sm font-medium text-supply-text dark:text-gray-300">Total Orders</CardTitle>
                <CardContent className="p-0 pt-2">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">{mockUserProfile.totalOrders}</div>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 text-center">
                <CardTitle className="text-sm font-medium text-supply-text dark:text-gray-300">
                  Favorite Suppliers
                </CardTitle>
                <CardContent className="p-0 pt-2">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">
                    {mockUserProfile.favoriteSuppliersCount}
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4 text-center">
                <CardTitle className="text-sm font-medium text-supply-text dark:text-gray-300">
                  Pending Orders
                </CardTitle>
                <CardContent className="p-0 pt-2">
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">
                    {mockUserProfile.pendingOrders}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Orders */}
            <Card className="bg-white dark:bg-gray-800 rounded-xl shadow-md">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl text-gray-900 dark:text-white">Recent Orders</CardTitle>
                <Button asChild variant="ghost" className="text-supply-primary hover:bg-supply-primary/10">
                  <Link href="/dashboard#orders">View All</Link>
                </Button>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-gray-200 dark:border-gray-700">
                      <TableHead className="text-supply-text dark:text-gray-400">Order ID</TableHead>
                      <TableHead className="text-supply-text dark:text-gray-400">Item</TableHead>
                      <TableHead className="text-supply-text dark:text-gray-400">Supplier</TableHead>
                      <TableHead className="text-supply-text dark:text-gray-400">Status</TableHead>
                      <TableHead className="text-supply-text dark:text-gray-400">Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {mockRecentOrders.map((order) => (
                      <TableRow key={order.id} className="border-gray-100 dark:border-gray-800">
                        <TableCell className="font-medium text-gray-900 dark:text-white">{order.id}</TableCell>
                        <TableCell className="text-supply-text dark:text-gray-300">{order.item}</TableCell>
                        <TableCell className="text-supply-text dark:text-gray-300">{order.supplier}</TableCell>
                        <TableCell>
                          <Badge
                            className={
                              order.status === "Delivered"
                                ? "bg-supply-success text-white"
                                : order.status === "In Transit"
                                  ? "bg-supply-primary text-white"
                                  : "bg-yellow-500 text-white"
                            }
                          >
                            {order.status}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-supply-text dark:text-gray-300">{order.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Favorite Suppliers */}
            <Card className="bg-white dark:bg-gray-800 rounded-xl shadow-md">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-xl text-gray-900 dark:text-white">Favorite Suppliers</CardTitle>
                <Button asChild variant="ghost" className="text-supply-primary hover:bg-supply-primary/10">
                  <Link href="/dashboard#favorites">Manage Favorites</Link>
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {mockFavoriteSuppliers.map((supplier) => (
                    <Card
                      key={supplier.id}
                      className="shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700"
                    >
                      <CardContent className="p-4 flex items-center gap-4">
                        <Image
                          src={`/images/generic-avatar.png`}
                          alt={`${supplier.name} logo`}
                          width={50}
                          height={50}
                          className="rounded-full object-cover border border-gray-200 dark:border-gray-700"
                        />
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-900 dark:text-white">{supplier.name}</h3>
                          <p className="text-sm text-supply-text dark:text-gray-300">{supplier.category}</p>
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
      </div>
    </div>
  )
}
