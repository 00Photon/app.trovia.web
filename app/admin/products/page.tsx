"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Search, MoreHorizontal, Eye, Edit, CheckCircle, XCircle, Package, Star, TrendingUp } from "lucide-react"
import { Label } from "@/components/ui/label"

export default function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null)
  const [isViewModalOpen, setIsViewModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [categoryFilter, setCategoryFilter] = useState("all")

  const products = [
    {
      id: "PRD-001",
      name: "Handwoven Kente Cloth",
      seller: "Amaka Nwosu",
      category: "Fashion & Clothing",
      price: "₦45,000",
      status: "Active",
      stock: 12,
      sold: 8,
      rating: 4.8,
      dateAdded: "Jun 5, 2025",
      description: "Authentic handwoven Kente cloth with traditional patterns and vibrant colors",
      image: "/placeholder.svg?height=100&width=100",
      location: "Lagos, Nigeria",
    },
    {
      id: "PRD-002",
      name: "Wooden Coffee Table",
      seller: "Ibrahim Musa",
      category: "Furniture",
      price: "₦85,000",
      status: "Active",
      stock: 5,
      sold: 15,
      rating: 4.9,
      dateAdded: "Jun 3, 2025",
      description: "Handcrafted wooden coffee table made from premium mahogany wood",
      image: "/placeholder.svg?height=100&width=100",
      location: "Kano, Nigeria",
    },
    {
      id: "PRD-003",
      name: "Beaded Jewelry Set",
      seller: "Fatima Ibrahim",
      category: "Jewelry & Accessories",
      price: "₦25,000",
      status: "Sold Out",
      stock: 0,
      sold: 25,
      rating: 4.7,
      dateAdded: "May 28, 2025",
      description: "Beautiful beaded jewelry set including necklace, earrings, and bracelet",
      image: "/placeholder.svg?height=100&width=100",
      location: "Abuja, Nigeria",
    },
    {
      id: "PRD-004",
      name: "Ceramic Pottery Set",
      seller: "Chidi Okafor",
      category: "Pottery & Ceramics",
      price: "₦35,000",
      status: "Active",
      stock: 8,
      sold: 12,
      rating: 4.6,
      dateAdded: "Jun 1, 2025",
      description: "Handmade ceramic pottery set including bowls, plates, and serving dishes",
      image: "/placeholder.svg?height=100&width=100",
      location: "Port Harcourt, Nigeria",
    },
    {
      id: "PRD-005",
      name: "Leather Handbag",
      seller: "Grace Adebayo",
      category: "Leather Goods",
      price: "₦55,000",
      status: "Inactive",
      stock: 3,
      sold: 7,
      rating: 4.5,
      dateAdded: "May 25, 2025",
      description: "Premium leather handbag with traditional African patterns and modern design",
      image: "/placeholder.svg?height=100&width=100",
      location: "Ibadan, Nigeria",
    },
    {
      id: "PRD-006",
      name: "Woven Basket Collection",
      seller: "Blessing Okonkwo",
      category: "Home Decor",
      price: "₦18,000",
      status: "Active",
      stock: 15,
      sold: 22,
      rating: 4.8,
      dateAdded: "Jun 7, 2025",
      description: "Set of 3 woven baskets perfect for home organization and decoration",
      image: "/placeholder.svg?height=100&width=100",
      location: "Lagos, Nigeria",
    },
    {
      id: "PRD-007",
      name: "Traditional Ankara Dress",
      seller: "Elizabeth Nnamdi",
      category: "Fashion & Clothing",
      price: "₦32,000",
      status: "Active",
      stock: 6,
      sold: 18,
      rating: 4.9,
      dateAdded: "Jun 4, 2025",
      description: "Beautiful traditional Ankara dress with modern cut and vibrant patterns",
      image: "/placeholder.svg?height=100&width=100",
      location: "Kano, Nigeria",
    },
    {
      id: "PRD-008",
      name: "Carved Wooden Mask",
      seller: "David Adeyemi",
      category: "Art & Paintings",
      price: "₦75,000",
      status: "Pending",
      stock: 2,
      sold: 3,
      rating: 4.7,
      dateAdded: "Jun 2, 2025",
      description: "Intricately carved wooden mask representing traditional African heritage",
      image: "/placeholder.svg?height=100&width=100",
      location: "Lagos, Nigeria",
    },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.seller.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.id.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || product.status.toLowerCase() === statusFilter.toLowerCase()
    const matchesCategory = categoryFilter === "all" || product.category === categoryFilter

    return matchesSearch && matchesStatus && matchesCategory
  })

  const totalProducts = products.length
  const activeProducts = products.filter((product) => product.status === "Active").length
  const soldProducts = products.reduce((total, product) => total + product.sold, 0)
  const totalRevenue = products.reduce((total, product) => {
    const price = Number.parseInt(product.price.replace(/[₦,]/g, ""))
    return total + price * product.sold
  }, 0)

  const handleViewProduct = (product: any) => {
    setSelectedProduct(product)
    setIsViewModalOpen(true)
  }

  const handleStatusUpdate = (productId: string, newStatus: string) => {
    console.log(`Updating product ${productId} status to ${newStatus}`)
    // Handle status update logic here
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <Badge className="bg-green-600">Active</Badge>
      case "Inactive":
        return <Badge className="bg-gray-500">Inactive</Badge>
      case "Sold Out":
        return <Badge className="bg-red-500">Sold Out</Badge>
      case "Pending":
        return <Badge className="bg-yellow-500">Pending</Badge>
      default:
        return <Badge className="bg-gray-500">{status}</Badge>
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Products Management</h1>
        <Button className="bg-teal-600 hover:bg-teal-700 w-full sm:w-auto">Export Products Data</Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 flex items-center">
              <Package className="h-4 w-4 mr-2" />
              Total Products
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">{totalProducts}</div>
            <p className="text-xs text-blue-600 mt-1">All time</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              Active Products
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">{activeProducts}</div>
            <p className="text-xs text-green-600 mt-1">Currently available</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 flex items-center">
              <TrendingUp className="h-4 w-4 mr-2" />
              Total Sold
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">{soldProducts}</div>
            <p className="text-xs text-blue-600 mt-1">Units sold</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 flex items-center">
              <Star className="h-4 w-4 mr-2" />
              Total Revenue
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-teal-600">{formatCurrency(totalRevenue)}</div>
            <p className="text-xs text-green-600 mt-1">From product sales</p>
          </CardContent>
        </Card>
      </div>

      {/* Products Table */}
      <Card>
        <CardHeader>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <CardTitle>All Products</CardTitle>
              <CardDescription>Manage and monitor all products on the platform</CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search products..."
                  className="pl-9 w-full sm:w-48 lg:w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-[120px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="inactive">Inactive</SelectItem>
                  <SelectItem value="sold out">Sold Out</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                </SelectContent>
              </Select>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full sm:w-[140px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="Fashion & Clothing">Fashion</SelectItem>
                  <SelectItem value="Furniture">Furniture</SelectItem>
                  <SelectItem value="Jewelry & Accessories">Jewelry</SelectItem>
                  <SelectItem value="Pottery & Ceramics">Pottery</SelectItem>
                  <SelectItem value="Leather Goods">Leather</SelectItem>
                  <SelectItem value="Home Decor">Home Decor</SelectItem>
                  <SelectItem value="Art & Paintings">Art</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[100px]">Product ID</TableHead>
                  <TableHead className="min-w-[200px]">Product</TableHead>
                  <TableHead className="min-w-[120px]">Seller</TableHead>
                  <TableHead className="min-w-[120px]">Category</TableHead>
                  <TableHead className="min-w-[100px]">Price</TableHead>
                  <TableHead className="min-w-[80px]">Stock</TableHead>
                  <TableHead className="min-w-[80px]">Sold</TableHead>
                  <TableHead className="min-w-[80px]">Rating</TableHead>
                  <TableHead className="min-w-[100px]">Status</TableHead>
                  <TableHead className="min-w-[100px]">Date Added</TableHead>
                  <TableHead className="min-w-[80px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-mono text-sm">{product.id}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <img
                          src={product.image || "/placeholder.svg"}
                          alt={product.name}
                          className="w-10 h-10 rounded-md object-cover"
                        />
                        <div className="max-w-[150px]">
                          <div className="font-medium truncate" title={product.name}>
                            {product.name}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="truncate max-w-[100px]" title={product.seller}>
                      {product.seller}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-xs">
                        {product.category.split(" ")[0]}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium text-sm">{product.price}</TableCell>
                    <TableCell className="text-center">
                      <span className={product.stock === 0 ? "text-red-600 font-medium" : ""}>{product.stock}</span>
                    </TableCell>
                    <TableCell className="text-center text-green-600 font-medium">{product.sold}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Star className="h-3 w-3 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm">{product.rating}</span>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(product.status)}</TableCell>
                    <TableCell className="text-xs">{product.dateAdded}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem onClick={() => handleViewProduct(product)}>
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit Product
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuLabel>Update Status</DropdownMenuLabel>
                          <DropdownMenuItem onClick={() => handleStatusUpdate(product.id, "Active")}>
                            <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                            Mark as Active
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleStatusUpdate(product.id, "Inactive")}>
                            <XCircle className="mr-2 h-4 w-4 text-gray-600" />
                            Mark as Inactive
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleStatusUpdate(product.id, "Pending")}>
                            <Package className="mr-2 h-4 w-4 text-yellow-600" />
                            Mark as Pending
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="text-red-600">
                            <XCircle className="mr-2 h-4 w-4" />
                            Remove Product
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4">
            <p className="text-sm text-gray-500">
              Showing {filteredProducts.length} of {totalProducts} products
            </p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Product Details Modal */}
      <Dialog open={isViewModalOpen} onOpenChange={setIsViewModalOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Product Details</DialogTitle>
            <DialogDescription>Complete information about {selectedProduct?.name}</DialogDescription>
          </DialogHeader>
          {selectedProduct && (
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <img
                  src={selectedProduct.image || "/placeholder.svg"}
                  alt={selectedProduct.name}
                  className="w-24 h-24 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-sm font-medium text-gray-500">Product ID</Label>
                      <p className="font-mono">{selectedProduct.id}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-gray-500">Status</Label>
                      <div className="mt-1">{getStatusBadge(selectedProduct.status)}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-500">Product Name</Label>
                <p className="font-medium text-lg">{selectedProduct.name}</p>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-500">Description</Label>
                <p className="text-sm text-gray-700">{selectedProduct.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium text-gray-500">Seller</Label>
                  <p>{selectedProduct.seller}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-500">Category</Label>
                  <p>{selectedProduct.category}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label className="text-sm font-medium text-gray-500">Price</Label>
                  <p className="font-medium text-green-600 text-lg">{selectedProduct.price}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-500">Stock</Label>
                  <p className={selectedProduct.stock === 0 ? "text-red-600 font-medium" : "font-medium"}>
                    {selectedProduct.stock} units
                  </p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-500">Sold</Label>
                  <p className="font-medium text-blue-600">{selectedProduct.sold} units</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium text-gray-500">Rating</Label>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="font-medium">{selectedProduct.rating}/5</span>
                  </div>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-500">Date Added</Label>
                  <p>{selectedProduct.dateAdded}</p>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-500">Location</Label>
                <p>{selectedProduct.location}</p>
              </div>

              <div className="flex gap-2 pt-4">
                <Button className="bg-teal-600 hover:bg-teal-700">Edit Product</Button>
                <Button variant="outline">Contact Seller</Button>
                <Button variant="outline">View Reviews</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
