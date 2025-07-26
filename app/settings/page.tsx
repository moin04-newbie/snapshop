"use client"

import Link from "next/link"

import type React from "react"

import { useState } from "react"
import { Save, Store, Banknote, Package, BellRing, Globe, MapPin, Edit } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"

export default function SettingsPage() {
  // Profile Info
  const [userName, setUserName] = useState("Priya Sharma")
  const [userBusiness, setUserBusiness] = useState("Priya's Street Eats")
  const [userLocation, setUserLocation] = useState("Mumbai, Bandra West") // Mock auto-filled

  // Business Details
  const [shopCategory, setShopCategory] = useState("Street Food")
  const [gstFssaiNumber, setGstFssaiNumber] = useState("27ABCDE1234F1Z5")
  const [operatingHours, setOperatingHours] = useState("Mon-Sat: 9 AM - 10 PM, Sun: Closed")
  const [isEditingHours, setIsEditingHours] = useState(false)

  // Bank & Payment Settings
  const [upiId, setUpiId] = useState("priya.eats@upi")
  const [bankAccount, setBankAccount] = useState("XXXX XXXX XXXX 1234")
  const [paymentSchedule, setPaymentSchedule] = useState("daily")

  // Bulk Order Preferences
  const [bulkOrdersEnabled, setBulkOrdersEnabled] = useState(true)
  const [minOrderQuantity, setMinOrderQuantity] = useState("50kg")
  const [preferredVendors, setPreferredVendors] = useState("Fresh Greens Mart, Spice Route Traders") // Mock multi-select
  const [dealAlerts, setDealAlerts] = useState(true)

  // Notifications & Language
  const [appAlerts, setAppAlerts] = useState(true)
  const [whatsappMessages, setWhatsappMessages] = useState(false)
  const [smsReminders, setSmsReminders] = useState(true)
  const [language, setLanguage] = useState("english")

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Profile settings saved (mock action)!")
  }

  const handleBusinessDetailsSave = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Business details saved (mock action)!")
    setIsEditingHours(false)
  }

  const handleBankPaymentSave = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Bank & Payment settings saved (mock action)!")
  }

  const handleBulkOrderSave = () => {
    alert("Bulk Order preferences saved (mock action)!")
  }

  const handleNotificationLanguageSave = () => {
    alert("Notification & Language settings saved (mock action)!")
  }

  return (
    <div className="flex-1 p-4 md:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Settings</h1>
        <p className="text-lg text-supply-text dark:text-gray-300 mb-8">
          Manage your account preferences and app settings.
        </p>

        {/* 1. Profile Info Card */}
        <Card className="bg-white dark:bg-gray-800 rounded-xl shadow-md mb-8">
          <CardHeader className="flex flex-row items-center gap-4">
            <Avatar className="h-20 w-20 border-4 border-supply-primary shadow-md">
              <AvatarImage src="/images/generic-avatar.png" alt={userName} />
              <AvatarFallback>{userName.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <CardTitle className="text-2xl text-gray-900 dark:text-white">{userName}</CardTitle>
              <CardDescription className="text-lg text-supply-text dark:text-gray-300 mb-2">
                {userBusiness}
              </CardDescription>
              <div className="flex items-center gap-2 text-sm text-supply-text dark:text-gray-400">
                <MapPin className="h-4 w-4" />
                <span>{userLocation}</span>
              </div>
            </div>
            <Button
              asChild
              variant="outline"
              className="ml-auto rounded-lg text-supply-primary border-supply-primary hover:bg-supply-primary/10 bg-transparent dark:border-supply-primary/50 dark:hover:bg-supply-primary/20"
            >
              <Link href="/profile">
                <Edit className="h-4 w-4 mr-2" /> Edit Profile
              </Link>
            </Button>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-supply-text dark:text-gray-300">
              To update your name, business name, or contact details, please visit your profile page.
            </p>
          </CardContent>
        </Card>

        {/* 2. Business Details */}
        <Card className="bg-white dark:bg-gray-800 rounded-xl shadow-md mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-gray-900 dark:text-white flex items-center gap-2">
              <Store className="h-5 w-5" /> Business Details
            </CardTitle>
            <CardDescription className="text-supply-text dark:text-gray-300">
              Manage your shop's operational information.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleBusinessDetailsSave} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="shopCategory" className="text-gray-900 dark:text-white">
                  Shop Category
                </Label>
                <Select value={shopCategory} onValueChange={setShopCategory}>
                  <SelectTrigger className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-gray-200 dark:border-gray-700">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-gray-200 dark:border-gray-700">
                    <SelectItem value="Street Food">Street Food</SelectItem>
                    <SelectItem value="Restaurant">Restaurant</SelectItem>
                    <SelectItem value="Cafe">Cafe</SelectItem>
                    <SelectItem value="Catering">Catering</SelectItem>
                    <SelectItem value="Bakery">Bakery</SelectItem>
                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="gstFssaiNumber" className="text-gray-900 dark:text-white">
                  GST/FSSAI Number (Optional)
                </Label>
                <Input
                  id="gstFssaiNumber"
                  value={gstFssaiNumber}
                  onChange={(e) => setGstFssaiNumber(e.target.value)}
                  placeholder="e.g., 27ABCDE1234F1Z5"
                  className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-gray-200 dark:border-gray-700"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="operatingHours" className="text-gray-900 dark:text-white">
                  Operating Hours
                </Label>
                <div className="flex items-center gap-2">
                  <Textarea
                    id="operatingHours"
                    value={operatingHours}
                    onChange={(e) => setOperatingHours(e.target.value)}
                    disabled={!isEditingHours}
                    className="flex-1 bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-gray-200 dark:border-gray-700"
                  />
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => setIsEditingHours(!isEditingHours)}
                    className="rounded-lg text-supply-primary border-supply-primary hover:bg-supply-primary/10 bg-transparent dark:border-supply-primary/50 dark:hover:bg-supply-primary/20"
                  >
                    <Edit className="h-4 w-4" />
                    <span className="sr-only">{isEditingHours ? "Disable editing" : "Enable editing"}</span>
                  </Button>
                </div>
              </div>
              <Button
                type="submit"
                className="md:col-span-2 bg-supply-primary text-white hover:bg-supply-primary/90 rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <Save className="h-4 w-4 mr-2" /> Save Business Details
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* 3. Bank & Payment Settings */}
        <Card className="bg-white dark:bg-gray-800 rounded-xl shadow-md mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-gray-900 dark:text-white flex items-center gap-2">
              <Banknote className="h-5 w-5" /> Bank & Payment Settings
            </CardTitle>
            <CardDescription className="text-supply-text dark:text-gray-300">
              Manage your payment reception details.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleBankPaymentSave} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="upiId" className="text-gray-900 dark:text-white">
                  UPI ID
                </Label>
                <Input
                  id="upiId"
                  value={upiId}
                  onChange={(e) => setUpiId(e.target.value)}
                  placeholder="e.g., yourname@upi"
                  className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-gray-200 dark:border-gray-700"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bankAccount" className="text-gray-900 dark:text-white">
                  Bank Account Number
                </Label>
                <Input
                  id="bankAccount"
                  value={bankAccount}
                  onChange={(e) => setBankAccount(e.target.value)}
                  placeholder="e.g., XXXXXXXXXXXX1234"
                  className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-gray-200 dark:border-gray-700"
                />
              </div>
              <div className="md:col-span-2 flex justify-end">
                <Button
                  type="button"
                  variant="outline"
                  className="bg-supply-primary/10 text-supply-primary hover:bg-supply-primary/20 rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  Verify via OTP (Mock)
                </Button>
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label className="text-gray-900 dark:text-white">Payment Schedule</Label>
                <RadioGroup value={paymentSchedule} onValueChange={setPaymentSchedule} className="flex space-x-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="daily" id="daily-payment" />
                    <Label htmlFor="daily-payment" className="text-gray-900 dark:text-white">
                      Daily
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="weekly" id="weekly-payment" />
                    <Label htmlFor="weekly-payment" className="text-gray-900 dark:text-white">
                      Weekly
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="manual" id="manual-payment" />
                    <Label htmlFor="manual-payment" className="text-gray-900 dark:text-white">
                      Manual
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              <Button
                type="submit"
                className="md:col-span-2 bg-supply-primary text-white hover:bg-supply-primary/90 rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <Save className="h-4 w-4 mr-2" /> Save Payment Settings
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* 4. Bulk Order Preferences */}
        <Card className="bg-white dark:bg-gray-800 rounded-xl shadow-md mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-gray-900 dark:text-white flex items-center gap-2">
              <Package className="h-5 w-5" /> Bulk Order Preferences
            </CardTitle>
            <CardDescription className="text-supply-text dark:text-gray-300">
              Configure your preferences for participating in bulk orders.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <Label htmlFor="bulkOrdersEnabled" className="text-gray-900 dark:text-white">
                Enable Bulk Orders
              </Label>
              <Switch
                id="bulkOrdersEnabled"
                checked={bulkOrdersEnabled}
                onCheckedChange={setBulkOrdersEnabled}
                onBlur={handleBulkOrderSave}
              />
            </div>
            <Separator className="bg-gray-200 dark:bg-gray-700" />
            <div className="space-y-4" aria-disabled={!bulkOrdersEnabled}>
              <div className="space-y-2">
                <Label htmlFor="minOrderQuantity" className="text-gray-900 dark:text-white">
                  Minimum Order Quantity
                </Label>
                <Input
                  id="minOrderQuantity"
                  value={minOrderQuantity}
                  onChange={(e) => setMinOrderQuantity(e.target.value)}
                  disabled={!bulkOrdersEnabled}
                  placeholder="e.g., 50kg"
                  className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-gray-200 dark:border-gray-700"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="preferredVendors" className="text-gray-900 dark:text-white">
                  Preferred Vendors (Mock Multi-select)
                </Label>
                <Input
                  id="preferredVendors"
                  value={preferredVendors}
                  onChange={(e) => setPreferredVendors(e.target.value)}
                  disabled={!bulkOrdersEnabled}
                  placeholder="e.g., Fresh Greens Mart, Spice Route Traders"
                  className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-gray-200 dark:border-gray-700"
                />
                <p className="text-xs text-supply-text dark:text-gray-400">
                  (A full multi-select component would be implemented here in a real app.)
                </p>
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="dealAlerts" className="text-gray-900 dark:text-white">
                  Alerts for New Deals
                </Label>
                <Switch
                  id="dealAlerts"
                  checked={dealAlerts}
                  onCheckedChange={setDealAlerts}
                  disabled={!bulkOrdersEnabled}
                  onBlur={handleBulkOrderSave}
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 5. Notifications & Language */}
        <Card className="bg-white dark:bg-gray-800 rounded-xl shadow-md">
          <CardHeader>
            <CardTitle className="text-xl text-gray-900 dark:text-white flex items-center gap-2">
              <BellRing className="h-5 w-5" /> Notifications & Language
            </CardTitle>
            <CardDescription className="text-supply-text dark:text-gray-300">
              Control how you receive updates and choose your preferred language.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="appAlerts" className="text-gray-900 dark:text-white">
                  App Alerts
                </Label>
                <Switch
                  id="appAlerts"
                  checked={appAlerts}
                  onCheckedChange={setAppAlerts}
                  onBlur={handleNotificationLanguageSave}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="whatsappMessages" className="text-gray-900 dark:text-white">
                  WhatsApp Messages
                </Label>
                <Switch
                  id="whatsappMessages"
                  checked={whatsappMessages}
                  onCheckedChange={setWhatsappMessages}
                  onBlur={handleNotificationLanguageSave}
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="smsReminders" className="text-gray-900 dark:text-white">
                  SMS Reminders
                </Label>
                <Switch
                  id="smsReminders"
                  checked={smsReminders}
                  onCheckedChange={setSmsReminders}
                  onBlur={handleNotificationLanguageSave}
                />
              </div>
            </div>
            <Separator className="bg-gray-200 dark:bg-gray-700" />
            <div className="space-y-2">
              <Label className="text-gray-900 dark:text-white flex items-center gap-2">
                <Globe className="h-4 w-4" /> Language
              </Label>
              <RadioGroup value={language} onValueChange={setLanguage} className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="hindi" id="lang-hindi" />
                  <Label htmlFor="lang-hindi" className="text-gray-900 dark:text-white">
                    Hindi
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="marathi" id="lang-marathi" />
                  <Label htmlFor="lang-marathi" className="text-gray-900 dark:text-white">
                    Marathi
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="english" id="lang-english" />
                  <Label htmlFor="lang-english" className="text-gray-900 dark:text-white">
                    English
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="tamil" id="lang-tamil" />
                  <Label htmlFor="lang-tamil" className="text-gray-900 dark:text-white">
                    Tamil
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="urdu" id="lang-urdu" />
                  <Label htmlFor="lang-urdu" className="text-gray-900 dark:text-white">
                    Urdu
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
