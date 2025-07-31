import type React from "react"
import type { Metadata } from "next/types"
import { Inter } from "next/font/google"
import { cookies } from "next/headers"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import { AuthProvider } from "@/lib/auth-context"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SupplySnap",
  description: "Connects street food vendors with raw material suppliers.",
    generator: 'v0.dev'
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";

  return (
    <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <AuthProvider>
            <SidebarProvider defaultOpen={defaultOpen}>
              <AppSidebar />
              <main className="flex flex-col flex-1 min-h-screen bg-supply-background text-supply-text dark:bg-gray-900 dark:text-gray-200">
                <div className="p-4 md:p-6 lg:hidden">
                  <SidebarTrigger />
                </div>
                {children}
              </main>
            </SidebarProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
