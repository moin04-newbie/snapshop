  import Image from "next/image"
  import { Star, MapPin, Phone, Mail, Clock } from "lucide-react"

  import { Button } from "@/components/ui/button"
  import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
  import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
  import { Badge } from "@/components/ui/badge"
  import { Separator } from "@/components/ui/separator"

  const mockSupplierData = {
    id: "1",
    name: "Fresh Greens Mart",
    imageUrl: "/mart.jpg",
    profileImage: "/mart.jpg",
    rating: 4.8,
    reviews: 120,
    distance: "2.5 km",
    location: "Mumbai, Bandra West",
    contact: {
      phone: "+91 98765 43210",
      email: "freshgreens@gmail.com",
    },
    description:
      "Fresh Greens Mart is your trusted source for farm-fresh vegetables, fruits, and herbs. We prioritize quality and timely delivery to ensure your street food business thrives. Our produce is sourced directly from local farms, ensuring freshness and supporting local agriculture.",
    materialsOffered: [
      { name: "Potatoes", price: "₹25", unit: "kg", availability: "In Stock" },
      { name: "Tomatoes", price: "₹30", unit: "kg", availability: "In Stock" },
      { name: "Onions", price: "₹20", unit: "kg", availability: "Low Stock" },
      { name: "Coriander", price: "₹10", unit: "bunch", availability: "In Stock" },
      { name: "Spinach", price: "₹15", unit: "bunch", availability: "In Stock" },
      { name: "Green Chillies", price: "₹40", unit: "kg", availability: "In Stock" },
    ],
    deliveryInfo: "Same-day delivery for orders placed before 2 PM. Minimum order value ₹500.",
    reviewsList: [
      {
        vendor: "Sharma Ji's Pav Bhaji",
        rating: 5,
        comment: "Always fresh and delivered on time! Highly recommend for vegetables.",
        date: "2023-10-26",
      },
      {
        vendor: "Chaat Corner",
        rating: 4,
        comment: "Good quality produce, sometimes delivery can be a bit slow during peak hours.",
        date: "2023-09-15",
      },
      {
        vendor: "Dosa Delight",
        rating: 5,
        comment: "Excellent service and competitive prices. My go-to for all greens.",
        date: "2023-08-01",
      },
    ],
  }

  export default function SupplierProfilePage({ params }: { params: { id: string } }) {
    // In a real app, you'd fetch data based on params.id
    const supplier = mockSupplierData

    if (!supplier) {
      return <div className="p-8 text-center text-supply-text dark:text-gray-300">Supplier not found.</div>
    }

    return (
      <div className="flex-1 p-4 md:p-6 lg:p-8">
        <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden">
          {/* Banner Image */}
          <div className="relative h-48 md:h-64 w-full">
            <Image
              src={supplier.imageUrl || "/mart.jpg"}
              alt={`${supplier.name} banner`}
              layout="fill"
              objectFit="cover"
              className="rounded-t-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-t-xl" />
            <div className="absolute bottom-4 left-4 flex items-center gap-4">
              <Image
                src={supplier.profileImage || "/spice.jpg"}
                alt={`${supplier.name} profile`}
                width={80}
                height={80}
                className="rounded-full border-4 border-white dark:border-gray-800 shadow-md"
              />
              <h1 className="text-3xl font-bold text-white">{supplier.name}</h1>
            </div>
          </div>

          <div className="p-4 md:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Supplier Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-4 text-supply-text dark:text-gray-300">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-semibold text-lg">{supplier.rating.toFixed(1)}</span>
                  <span className="text-sm">({supplier.reviews} reviews)</span>
                </div>
                <Separator orientation="vertical" className="h-6 bg-gray-200 dark:bg-gray-700" />
                <div className="flex items-center gap-1">
                  <MapPin className="h-5 w-5" />
                  <span>{supplier.distance} away</span>
                </div>
              </div>

              <p className="text-supply-text dark:text-gray-300 leading-relaxed">{supplier.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="shadow-sm bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-gray-900 dark:text-white">Contact Info</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-supply-text dark:text-gray-300">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      <span>{supplier.contact.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span>{supplier.contact.email}</span>
                    </div>
                  </CardContent>
                </Card>
                <Card className="shadow-sm bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg text-gray-900 dark:text-white">Delivery</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2 text-supply-text dark:text-gray-300">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>{supplier.deliveryInfo}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Live Price Board */}
              <Card className="shadow-md bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">Live Price Board</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow className="border-gray-200 dark:border-gray-700">
                        <TableHead className="text-supply-text dark:text-gray-400">Material</TableHead>
                        <TableHead className="text-supply-text dark:text-gray-400">Price</TableHead>
                        <TableHead className="text-supply-text dark:text-gray-400">Unit</TableHead>
                        <TableHead className="text-supply-text dark:text-gray-400">Availability</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {supplier.materialsOffered.map((material, index) => (
                        <TableRow key={index} className="border-gray-100 dark:border-gray-800">
                          <TableCell className="font-medium text-gray-900 dark:text-white">{material.name}</TableCell>
                          <TableCell className="text-supply-text dark:text-gray-300">{material.price}</TableCell>
                          <TableCell className="text-supply-text dark:text-gray-300">{material.unit}</TableCell>
                          <TableCell>
                            <Badge
                              className={
                                material.availability === "In Stock"
                                  ? "bg-supply-success text-white"
                                  : "bg-yellow-500 text-white"
                              }
                            >
                              {material.availability}
                            </Badge>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>

            {/* Order Button & Reviews */}
            <div className="lg:col-span-1 space-y-6">
              <Button className="w-full bg-supply-primary text-white px-8 py-3 text-lg rounded-lg shadow-md hover:shadow-lg transition-all hover:bg-supply-primary/90">
                Order Now
              </Button>

              <Card className="shadow-md bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700">
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900 dark:text-white">Vendor Reviews</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {supplier.reviewsList.map((review, index) => (
                    <div
                      key={index}
                      className="border-b pb-4 last:border-b-0 last:pb-0 border-gray-100 dark:border-gray-800"
                    >
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-gray-800 dark:text-white">{review.vendor}</span>
                        <div className="flex items-center">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < review.rating
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "fill-muted stroke-muted-foreground dark:fill-gray-700 dark:stroke-gray-600"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-supply-text dark:text-gray-300">{review.comment}</p>
                      <p className="text-xs text-gray-400 mt-1">{review.date}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }
