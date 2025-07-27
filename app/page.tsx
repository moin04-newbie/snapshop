"use client";
import Image from "next/image"
import Link from "next/link"
import { useAuth } from "@/lib/auth-context"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import {
  Package,
  MapPin,
  Truck,
  Star,
  DollarSign,
  Handshake,
  ClipboardCheck,
  MessageSquare,
  ArrowUp,
  ArrowDown,
  Loader2,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function LandingPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  // Redirect unauthenticated users to auth page
  useEffect(() => {
    if (!loading && !user) {
      router.push("/auth");
    }
  }, [user, loading, router]);

  // Show loading while checking auth state
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  // Don't render if user is not authenticated (will redirect)
  if (!user) {
    return null;
  }
  const priceTickerItems = [
    { item: "Tomato", price: "₹18/kg", trend: "down" },
    { item: "Onion", price: "₹26/kg", trend: "up" },
    { item: "Potato", price: "₹22/kg", trend: "stable" },
    { item: "Green Chilli", price: "₹45/kg", trend: "up" },
    { item: "Ginger", price: "₹80/kg", trend: "down" },
    { item: "Garlic", price: "₹120/kg", trend: "up" },
    { item: "Coriander", price: "₹10/bunch", trend: "stable" },
    { item: "Lemon", price: "₹5/piece", trend: "down" },
  ]

  const howItWorksItems = [
    {
      title: "Discover Trusted Sellers",
      description: "Find verified raw material suppliers near you with ease.",
       imageUrl: "/trust.jpg", // ✅ Corrected path
    },
    {
      title: "Compare & Join Orders",
      description: "Compare live prices and join group orders for bigger savings.",
      imageUrl: "/comp.jpg",
    },
    {
      title: "Get Fast Delivery",
      description: "Receive your fresh ingredients quickly, right to your doorstep.",
      imageUrl: "/del.jpg",
    },
    {
      title: "Reorder with a Click",
      description: "Simplify your stock management with quick reorder options.",
      imageUrl: "/click.jpg",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-supply-background text-supply-text dark:bg-gray-900 dark:text-gray-200">
      <header className="flex items-center justify-between p-4 md:px-6 lg:px-8 border-b border-gray-200 dark:border-gray-700">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-supply-primary">
          <Package className="h-6 w-6" />
          <span>SupplySnap</span>
        </Link>
        <nav className="hidden md:flex items-center gap-4">
          <Link href="/suppliers" className="text-sm font-medium hover:text-supply-primary transition-colors">
            Suppliers
          </Link>
          <Link href="/group-orders" className="text-sm font-medium hover:text-supply-primary transition-colors">
            Group Orders
          </Link>
          <Link href="/dashboard" className="text-sm font-medium hover:text-supply-primary transition-colors">
            Dashboard
          </Link>
          <Button variant="ghost" className="text-sm font-medium hover:text-supply-primary transition-colors">
            Login
          </Button>
          <Button className="bg-supply-primary text-white hover:bg-supply-primary/90 rounded-lg shadow-md hover:shadow-lg transition-all">
            Sign Up
          </Button>
        </nav>
        <div className="md:hidden">{/* Mobile menu trigger would go here */}</div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center p-4 md:p-6 lg:p-8 text-center w-full">
        {/* Hero Section */}
        <section className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-8 items-center mb-12 w-full">
          <div className="space-y-6 text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
              <span className="text-supply-primary">SupplySnap:</span> Your Gateway to Fresh Ingredients.
            </h1>
            <p className="text-base md:text-lg text-supply-text dark:text-gray-300 leading-relaxed">
              Connecting Indian street food vendors with trusted raw material suppliers. Discover, compare, and save on
              quality ingredients.
            </p>
            <Button
              asChild
              className="bg-supply-primary text-white px-6 py-2 text-base rounded-lg shadow-md hover:shadow-lg transition-all hover:bg-supply-primary/90"
            >
              <Link href="/suppliers">Find Trusted Suppliers Now</Link>
            </Button>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-lg px-0 size-[500px] ml-16">
            <Image
              src="/vendor.jpg"
              alt="Hero Illustration: Vendor and Supplier"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>
        </section>

        {/* Live Price Ticker */}
        <section className="w-full max-w-screen-xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center ml-0 mr-72">
            Live Mandi Rates
          </h2>
          <div className="relative w-full overflow-hidden rounded-xl shadow-lg bg-mandi-board-bg border-2 border-gray-700">
            <div className="flex animate-scroll-left py-3 px-4 whitespace-nowrap">
              {Array(2)
                .fill(priceTickerItems)
                .flat()
                .map((item, index) => (
                  <div
                    key={index}
                    className="inline-flex items-center mx-6 text-mandi-board-text text-xl font-mono tracking-wide flex-shrink-0"
                  >
                    <span className="font-bold mr-2">{item.item}</span>
                    <span>{item.price}</span>
                    {item.trend === "up" && <ArrowUp className="h-5 w-5 ml-2 text-supply-success" />}
                    {item.trend === "down" && <ArrowDown className="h-5 w-5 ml-2 text-red-500" />}
                    {item.trend === "stable" && <span className="ml-2 text-gray-400">-</span>}
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* How It Works Carousel (Redesigned with animation) */}
        <section className="mt-16 max-w-screen-xl mx-auto text-center mb-12 w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 mr-72">
            How SupplySnap Works
          </h2>
          <div className="relative w-full overflow-hidden rounded-xl shadow-lg bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
            <div className="flex animate-scroll-left py-3 px-4 whitespace-nowrap">
              {Array(2)
                .fill(howItWorksItems)
                .flat()
                .map((item, index) => (
                  <Card
                    key={index}
                    className="inline-flex flex-col items-center justify-center mx-4 p-4 min-w-[240px] max-w-[260px] bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow flex-shrink-0"
                  >
                    <Image
                      src={item.imageUrl || "/images/generic-avatar.png"}
                      alt={item.title}
                      width={64}
                      height={64}
                      className="mb-4 rounded-full"
                    />
                    <CardTitle className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                      {item.title}
                    </CardTitle>
                    <CardContent className="p-0">
                      
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        {/* Map of Vendor Hotspots */}
        <section className="mt-16 w-full max-w-screen-xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 mr-72">
            Our Growing Network of Vendors
          </h2>
          <div className="relative w-full h-80 md:h-96 rounded-xl overflow-hidden shadow-lg bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
            {/* TODO: Replace this placeholder with a working map widget */}
            <span className="text-gray-500 dark:text-gray-300 text-lg">[Map coming soon]</span>
          </div>
        </section>

        {/* Vendor Story Section */}
        <section className="mt-16 max-w-screen-xl mx-auto text-center mb-12 w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Real Stories, Real Impact
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-left group hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-start gap-4 mb-4">
                  <Image
                    src="/images/generic-avatar.png"
                    alt="Vendor Story 1"
                    width={80}
                    height={80}
                    className="rounded-full object-cover border-2 border-supply-primary"
                  />
                  <div>
                    <p className="text-base italic text-gray-700 dark:text-gray-300 mb-2">
                      "Before SupplySnap, I had to wake up at 4 AM to chase suppliers. Now I just click and order, and
                      my ingredients arrive fresh. It's given me back my mornings!"
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-white">Meena Devi</p>
                    <p className="text-sm text-supply-text dark:text-gray-400">Chaat Wali, Delhi</p>
                  </div>
                </div>
                <div className="text-sm text-supply-text dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p>
                    **Journey:** Meena Devi, a veteran street food vendor, struggled with inconsistent supply and early
                    morning market runs.
                  </p>
                  <p>**Impact:** SupplySnap streamlined her sourcing, allowing her more time for family and rest.</p>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-left group hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="flex items-start gap-4 mb-4">
                  <Image
                    src="/images/generic-avatar.png"
                    alt="Vendor Story 2"
                    width={80}
                    height={80}
                    className="rounded-full object-cover border-2 border-supply-primary"
                  />
                  <div>
                    <p className="text-base italic text-gray-700 dark:text-gray-300 mb-2">
                      "The live price board and group orders are a game-changer. I'm saving so much on my daily
                      ingredients, which means more profit for my business!"
                    </p>
                    <p className="font-semibold text-gray-900 dark:text-white">Ravi Kumar</p>
                    <p className="text-sm text-supply-text dark:text-gray-400">Dosa Master, Mumbai</p>
                  </div>
                </div>
                <div className="text-sm text-supply-text dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p>
                    **Journey:** Ravi, a young entrepreneur, was looking for ways to optimize his costs and expand his
                    dosa stall.
                  </p>
                  <p>
                    **Impact:** SupplySnap's cost-saving features helped him increase his margins and invest in new
                    equipment.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Features Section */}
        <section className="mt-16 max-w-screen-xl mx-auto text-center mb-12 w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8">Why Choose SupplySnap?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-4">
              <CardHeader className="flex flex-col items-center p-0 pb-4">
                <Truck className="h-10 w-10 text-supply-primary mb-4" />
                <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
                  Verified Suppliers
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-supply-text dark:text-gray-300">
                  Access a network of thoroughly vetted and trusted raw material suppliers.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-4">
              <CardHeader className="flex flex-col items-center p-0 pb-4">
                <DollarSign className="h-10 w-10 text-supply-primary mb-4" />
                <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
                  Live Price Comparison
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-supply-text dark:text-gray-300">
                  Compare real-time prices from multiple suppliers to get the best deals.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-4">
              <CardHeader className="flex flex-col items-center p-0 pb-4">
                <Handshake className="h-10 w-10 text-supply-primary mb-4" />
                <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
                  Group Order Savings
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-supply-text dark:text-gray-300">
                  Join bulk orders with other vendors to significantly reduce your procurement costs.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-4">
              <CardHeader className="flex flex-col items-center p-0 pb-4">
                <Star className="h-10 w-10 text-supply-primary mb-4" />
                <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">Ratings & Reviews</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-supply-text dark:text-gray-300">
                  Make informed decisions with transparent supplier ratings and vendor reviews.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-4">
              <CardHeader className="flex flex-col items-center p-0 pb-4">
                <ClipboardCheck className="h-10 w-10 text-supply-primary mb-4" />
                <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">Order Tracking</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-supply-text dark:text-gray-300">
                  Keep an eye on your past and current orders with a clean, intuitive dashboard.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow p-4">
              <CardHeader className="flex flex-col items-center p-0 pb-4">
                <MessageSquare className="h-10 w-10 text-supply-primary mb-4" />
                <CardTitle className="text-xl font-semibold text-gray-800 dark:text-white">
                  Direct Communication
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <p className="text-supply-text dark:text-gray-300">
                  Communicate directly with suppliers for custom orders or inquiries.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="max-w-screen-xl mx-auto text-center bg-supply-primary/10 dark:bg-supply-primary/20 p-8 rounded-xl shadow-lg w-full">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Simplify Your Sourcing?
          </h2>
          <p className="text-lg text-supply-text dark:text-gray-300 mb-8">
            Join SupplySnap today and connect with the best raw material suppliers in your city.
          </p>
          <Button
            asChild
            className="bg-supply-primary text-white px-8 py-3 text-lg rounded-lg shadow-md hover:shadow-lg transition-all hover:bg-supply-primary/90"
          >
            <Link href="/signup">Get Started Now</Link>
          </Button>
        </section>
      </main>

      <footer className="max-w-screen-xl mx-auto text-center w-full my-1.5">
        © {new Date().getFullYear()} SupplySnap. All rights reserved.
      </footer>
    </div>
  )
}
