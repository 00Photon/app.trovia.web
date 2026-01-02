"use client"

import { useState } from "react"
import { Briefcase, ShoppingBag, ArrowRight, Clock, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const jobListings = [
  {
    id: 1,
    title: "Kitchen Cabinet Installation",
    description: "Need experienced carpenter for custom kitchen cabinet installation in modern home.",
    budget: "$2,500 - $3,500",
    location: "Westside",
    postedTime: "2 hours ago",
    proposals: 8,
    urgent: true,
    skills: ["Carpentry", "Installation", "Measurements"],
  },
  {
    id: 2,
    title: "Wedding Dress Alterations",
    description: "Seeking skilled tailor for wedding dress alterations. Must be completed by next month.",
    budget: "$200 - $400",
    location: "Downtown",
    postedTime: "5 hours ago",
    proposals: 12,
    urgent: false,
    skills: ["Tailoring", "Alterations", "Formal Wear"],
  },
  {
    id: 3,
    title: "Home Electrical Rewiring",
    description: "Complete electrical rewiring needed for 3-bedroom house. Licensed electrician required.",
    budget: "$4,000 - $6,000",
    location: "Northside",
    postedTime: "1 day ago",
    proposals: 5,
    urgent: false,
    skills: ["Electrical", "Wiring", "Licensed"],
  },
]

const products = [
  {
    id: 1,
    name: "Handcrafted Wooden Coffee Table",
    price: 450,
    originalPrice: 550,
    image: "/placeholder.svg?height=250&width=250",
    seller: "Carlos Rodriguez",
    rating: 4.9,
    reviews: 23,
    location: "Downtown District",
    category: "Furniture",
    inStock: true,
  },
  {
    id: 2,
    name: "Custom Leather Handbag",
    price: 180,
    originalPrice: null,
    image: "/placeholder.svg?height=250&width=250",
    seller: "Maria Santos",
    rating: 5.0,
    reviews: 41,
    location: "Arts Quarter",
    category: "Fashion",
    inStock: true,
  },
  {
    id: 3,
    name: "Ceramic Dinnerware Set",
    price: 120,
    originalPrice: 150,
    image: "/placeholder.svg?height=250&width=250",
    seller: "David Chen",
    rating: 4.8,
    reviews: 17,
    location: "Riverside",
    category: "Home & Kitchen",
    inStock: false,
  },
]

export function MarketplacePreview() {
  const [activeTab, setActiveTab] = useState("jobs")

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Explore Our Marketplace</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Whether you're looking to hire skilled professionals or purchase unique handmade items, our marketplace has
            everything you need.
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-12 bg-gray-100 p-1 rounded-xl">
            <TabsTrigger
              value="jobs"
              className="flex items-center justify-center py-3 px-6 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              <Briefcase className="w-5 h-5 mr-2" />
              Job Marketplace
            </TabsTrigger>
            <TabsTrigger
              value="products"
              className="flex items-center justify-center py-3 px-6 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm"
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Buy & Sell
            </TabsTrigger>
          </TabsList>

          <TabsContent value="jobs" className="space-y-6">
            <div className="grid gap-6">
              {jobListings.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-xl font-semibold text-gray-900 mr-3">{job.title}</h3>
                        {job.urgent && (
                          <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs font-medium">
                            Urgent
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 mb-4">{job.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.skills.map((skill) => (
                          <span key={skill} className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="text-right ml-6">
                      <div className="text-2xl font-bold text-emerald-600 mb-1">{job.budget}</div>
                      <div className="text-sm text-gray-500">{job.location}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.postedTime}
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {job.proposals} proposals
                      </div>
                    </div>

                    <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                      Apply Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-8">
              <Button
                variant="outline"
                size="lg"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent"
              >
                View All Jobs
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="products" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    {product.originalPrice && (
                      <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Sale
                      </div>
                    )}
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <span className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium">Out of Stock</span>
                      </div>
                    )}
                  </div>

                  <div className="p-6">
                    <div className="mb-2">
                      <span className="text-sm text-emerald-600 font-medium">{product.category}</span>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>

                    <div className="flex items-center mb-3">
                      <div className="flex items-center text-yellow-400 mr-2">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`w-4 h-4 ${i < Math.floor(product.rating) ? "fill-current" : "text-gray-300"}`}
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                        {product.originalPrice && (
                          <span className="text-lg text-gray-500 line-through ml-2">${product.originalPrice}</span>
                        )}
                      </div>
                      <span className="text-sm text-gray-600">{product.location}</span>
                    </div>

                    <div className="text-sm text-gray-600 mb-4">by {product.seller}</div>

                    <Button
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                      disabled={!product.inStock}
                    >
                      {product.inStock ? "Add to Cart" : "Notify When Available"}
                      <ShoppingBag className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center pt-8">
              <Button
                variant="outline"
                size="lg"
                className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent"
              >
                Browse All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
