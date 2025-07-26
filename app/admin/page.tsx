"use client"

import type React from "react"

import { useState } from "react"
import { Plus, Edit, Trash2 } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"

// Mock data for admin panel
interface Supplier {
  id: string
  name: string
  contact: string
  materials: string
  isVerified: boolean
}

interface MaterialPrice {
  id: string
  supplierId: string
  supplierName: string
  material: string
  price: string
  unit: string
}

const initialSuppliers: Supplier[] = [
  {
    id: "s1",
    name: "Fresh Greens Mart",
    contact: "freshgreens@example.com",
    materials: "Vegetables, Fruits",
    isVerified: true,
  },
  {
    id: "s2",
    name: "Spice Route Traders",
    contact: "spice@example.com",
    materials: "Spices, Grains",
    isVerified: true,
  },
  { id: "s3", name: "New Local Farm", contact: "localfarm@example.com", materials: "Vegetables", isVerified: false },
]

const initialMaterialPrices: MaterialPrice[] = [
  { id: "mp1", supplierId: "s1", supplierName: "Fresh Greens Mart", material: "Potatoes", price: "₹25", unit: "kg" },
  { id: "mp2", supplierId: "s1", supplierName: "Fresh Greens Mart", material: "Tomatoes", price: "₹30", unit: "kg" },
  {
    id: "mp3",
    supplierId: "s2",
    supplierName: "Spice Route Traders",
    material: "Red Chilli Powder",
    price: "₹150",
    unit: "kg",
  },
]

export default function AdminPanelPage() {
  const [suppliers, setSuppliers] = useState<Supplier[]>(initialSuppliers)
  const [materialPrices, setMaterialPrices] = useState<MaterialPrice[]>(initialMaterialPrices)

  // State for new supplier form
  const [newSupplierName, setNewSupplierName] = useState("")
  const [newSupplierContact, setNewSupplierContact] = useState("")
  const [newSupplierMaterials, setNewSupplierMaterials] = useState("")

  const handleAddSupplier = (e: React.FormEvent) => {
    e.preventDefault()
    if (newSupplierName && newSupplierContact && newSupplierMaterials) {
      const newId = `s${suppliers.length + 1}`
      setSuppliers([
        ...suppliers,
        {
          id: newId,
          name: newSupplierName,
          contact: newSupplierContact,
          materials: newSupplierMaterials,
          isVerified: false,
        },
      ])
      setNewSupplierName("")
      setNewSupplierContact("")
      setNewSupplierMaterials("")
      alert("Supplier added successfully (mock action)!")
    } else {
      alert("Please fill all fields for the new supplier.")
    }
  }

  const handleVerifySupplier = (id: string, isVerified: boolean) => {
    setSuppliers(suppliers.map((s) => (s.id === id ? { ...s, isVerified: isVerified } : s)))
    alert(`Supplier ${isVerified ? "verified" : "unverified"} (mock action)!`)
  }

  const handleDeleteSupplier = (id: string) => {
    if (confirm("Are you sure you want to delete this supplier?")) {
      setSuppliers(suppliers.filter((s) => s.id !== id))
      setMaterialPrices(materialPrices.filter((mp) => mp.supplierId !== id))
      alert("Supplier deleted (mock action)!")
    }
  }

  const handleUpdatePrice = (id: string, newPrice: string) => {
    setMaterialPrices(materialPrices.map((mp) => (mp.id === id ? { ...mp, price: newPrice } : mp)))
    alert("Price updated (mock action)!")
  }

  return (
    <div className="flex-1 p-4 md:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">Admin Panel</h1>
        <p className="text-lg text-supply-text dark:text-gray-300 mb-8">Manage suppliers, prices, and verifications.</p>

        {/* Add New Supplier */}
        <Card className="bg-white dark:bg-gray-800 rounded-xl shadow-md mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-gray-900 dark:text-white">Add New Supplier</CardTitle>
            <CardDescription className="text-supply-text dark:text-gray-300">
              Register a new raw material supplier.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleAddSupplier} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="supplierName" className="text-gray-900 dark:text-white">
                  Supplier Name
                </Label>
                <Input
                  id="supplierName"
                  placeholder="e.g., Green Harvest Co."
                  value={newSupplierName}
                  onChange={(e) => setNewSupplierName(e.target.value)}
                  required
                  className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-gray-200 dark:border-gray-700"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="supplierContact" className="text-gray-900 dark:text-white">
                  Contact Email/Phone
                </Label>
                <Input
                  id="supplierContact"
                  type="text"
                  placeholder="e.g., info@greenharvest.com"
                  value={newSupplierContact}
                  onChange={(e) => setNewSupplierContact(e.target.value)}
                  required
                  className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-gray-200 dark:border-gray-700"
                />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="supplierMaterials" className="text-gray-900 dark:text-white">
                  Materials Offered (comma-separated)
                </Label>
                <Textarea
                  id="supplierMaterials"
                  placeholder="e.g., Vegetables, Fruits, Spices"
                  value={newSupplierMaterials}
                  onChange={(e) => setNewSupplierMaterials(e.target.value)}
                  required
                  className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-gray-200 dark:border-gray-700"
                />
              </div>
              <Button
                type="submit"
                className="md:col-span-2 bg-supply-primary text-white hover:bg-supply-primary/90 rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <Plus className="h-4 w-4 mr-2" /> Add Supplier
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Manage Suppliers & Prices */}
        <Card className="bg-white dark:bg-gray-800 rounded-xl shadow-md mb-8">
          <CardHeader>
            <CardTitle className="text-xl text-gray-900 dark:text-white">Manage Suppliers & Prices</CardTitle>
            <CardDescription className="text-supply-text dark:text-gray-300">
              Edit supplier details and update material prices.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-gray-200 dark:border-gray-700">
                  <TableHead className="text-supply-text dark:text-gray-400">Supplier Name</TableHead>
                  <TableHead className="text-supply-text dark:text-gray-400">Material</TableHead>
                  <TableHead className="text-supply-text dark:text-gray-400">Price</TableHead>
                  <TableHead className="text-right text-supply-text dark:text-gray-400">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {materialPrices.map((mp) => (
                  <TableRow key={mp.id} className="border-gray-100 dark:border-gray-800">
                    <TableCell className="font-medium text-gray-900 dark:text-white">{mp.supplierName}</TableCell>
                    <TableCell className="text-supply-text dark:text-gray-300">{mp.material}</TableCell>
                    <TableCell>
                      <Input
                        type="text"
                        value={mp.price}
                        onChange={(e) => handleUpdatePrice(mp.id, e.target.value)}
                        className="w-24 h-8 text-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white border-gray-200 dark:border-gray-700"
                      />
                    </TableCell>
                    <TableCell className="text-right">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-supply-text hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-gray-400"
                      >
                        <Edit className="h-4 w-4" />
                        <span className="sr-only">Edit Price</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
                {materialPrices.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center text-supply-text dark:text-gray-300">
                      No material prices to manage.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Verify Suppliers */}
        <Card className="bg-white dark:bg-gray-800 rounded-xl shadow-md">
          <CardHeader>
            <CardTitle className="text-xl text-gray-900 dark:text-white">Verify Suppliers</CardTitle>
            <CardDescription className="text-supply-text dark:text-gray-300">
              Approve or reject new supplier registrations.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow className="border-gray-200 dark:border-gray-700">
                  <TableHead className="text-supply-text dark:text-gray-400">Supplier Name</TableHead>
                  <TableHead className="text-supply-text dark:text-gray-400">Contact</TableHead>
                  <TableHead className="text-supply-text dark:text-gray-400">Status</TableHead>
                  <TableHead className="text-right text-supply-text dark:text-gray-400">Verify</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {suppliers.map((supplier) => (
                  <TableRow key={supplier.id} className="border-gray-100 dark:border-gray-800">
                    <TableCell className="font-medium text-gray-900 dark:text-white">{supplier.name}</TableCell>
                    <TableCell className="text-supply-text dark:text-gray-300">{supplier.contact}</TableCell>
                    <TableCell>
                      <Badge
                        className={supplier.isVerified ? "bg-supply-success text-white" : "bg-yellow-500 text-white"}
                      >
                        {supplier.isVerified ? "Verified" : "Pending"}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Switch
                        checked={supplier.isVerified}
                        onCheckedChange={(checked) => handleVerifySupplier(supplier.id, checked)}
                        aria-label={`Toggle verification for ${supplier.name}`}
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteSupplier(supplier.id)}
                        className="ml-2 h-8 w-8 text-red-500 hover:bg-red-500/10 dark:hover:bg-red-500/20"
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Delete Supplier</span>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
                {suppliers.length === 0 && (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center text-supply-text dark:text-gray-300">
                      No suppliers to verify.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
