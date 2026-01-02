"use client"

import type React from "react"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock } from "lucide-react"

export default function AccountPage() {
  const [isProductModalOpen, setIsProductModalOpen] = useState(false)
  const [productForm, setProductForm] = useState({
    name: "",
    category: "",
    description: "",
    price: "",
    images: "",
  })
  const [isJobModalOpen, setIsJobModalOpen] = useState(false)
  const [jobForm, setJobForm] = useState({
    title: "",
    category: "",
    description: "",
    budget: "",
    deadline: "",
  })
  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false)
  const [serviceForm, setServiceForm] = useState({
    title: "",
    category: "",
    description: "",
    price: "",
    duration: "",
    location: "",
  })
  const [showServiceSuccess, setShowServiceSuccess] = useState(false)
  const [showProductSuccess, setShowProductSuccess] = useState(false)
  const [showJobSuccess, setShowJobSuccess] = useState(false)

  const handleProductSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Product listing:", productForm)
    // Handle product listing logic here
    setShowProductSuccess(true)
  }

  const handleJobSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Job posting:", jobForm)
    // Handle job posting logic here
    setShowJobSuccess(true)
  }

  const handleServiceSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Service listing:", serviceForm)
    // Handle service listing logic here
    setShowServiceSuccess(true)
  }

  const resetForms = () => {
    setProductForm({
      name: "",
      category: "",
      description: "",
      price: "",
      images: "",
    })
    setJobForm({
      title: "",
      category: "",
      description: "",
      budget: "",
      deadline: "",
    })
    setServiceForm({
      title: "",
      category: "",
      description: "",
      price: "",
      duration: "",
      location: "",
    })
    setShowProductSuccess(false)
    setShowJobSuccess(false)
    setShowServiceSuccess(false)
    setIsProductModalOpen(false)
    setIsJobModalOpen(false)
    setIsServiceModalOpen(false)
  }

  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-teal-800">Dashboard</h1>
        <div className="flex gap-3">
          <Dialog
            open={isProductModalOpen}
            onOpenChange={(open) => {
              setIsProductModalOpen(open)
              if (!open) {
                setShowProductSuccess(false)
              }
            }}
          >
            <DialogTrigger asChild>
              <Button className="bg-teal-600 hover:bg-teal-700 text-white">List a Product</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              {!showProductSuccess ? (
                <>
                  <DialogHeader>
                    <DialogTitle>List a New Product</DialogTitle>
                    <DialogDescription>Add your product to the marketplace and reach more customers.</DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleProductSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="productName">Product Name</Label>
                      <Input
                        id="productName"
                        placeholder="Enter product name"
                        value={productForm.name}
                        onChange={(e) => setProductForm({ ...productForm, name: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">Category</Label>
                      <Select onValueChange={(value) => setProductForm({ ...productForm, category: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="fashion">Fashion & Clothing</SelectItem>
                          <SelectItem value="home-decor">Home Decor</SelectItem>
                          <SelectItem value="handmade-crafts">Handmade Crafts</SelectItem>
                          <SelectItem value="jewelry">Jewelry & Accessories</SelectItem>
                          <SelectItem value="art">Art & Paintings</SelectItem>
                          <SelectItem value="furniture">Furniture</SelectItem>
                          <SelectItem value="textiles">Textiles & Fabrics</SelectItem>
                          <SelectItem value="pottery">Pottery & Ceramics</SelectItem>
                          <SelectItem value="leather-goods">Leather Goods</SelectItem>
                          <SelectItem value="beauty">Beauty & Cosmetics</SelectItem>
                          <SelectItem value="food">Food & Beverages</SelectItem>
                          <SelectItem value="electronics">Electronics & Gadgets</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe your product..."
                        value={productForm.description}
                        onChange={(e) => setProductForm({ ...productForm, description: e.target.value })}
                        rows={3}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="price">Price (₦)</Label>
                      <Input
                        id="price"
                        type="number"
                        placeholder="0.00"
                        value={productForm.price}
                        onChange={(e) => setProductForm({ ...productForm, price: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="images">Product Images</Label>
                      <Input
                        id="images"
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={(e) => setProductForm({ ...productForm, images: e.target.value })}
                      />
                      <p className="text-xs text-gray-500">Upload up to 5 images of your product</p>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        className="flex-1"
                        onClick={() => setIsProductModalOpen(false)}
                      >
                        Cancel
                      </Button>
                      <Button type="submit" className="flex-1 bg-teal-600 hover:bg-teal-700 text-white">
                        List Product
                      </Button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <div className="bg-teal-100 rounded-full p-3 mb-4">
                    <svg
                      className="h-10 w-10 text-teal-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Product Listed Successfully!</h2>
                  <p className="text-gray-600 mb-6">Your product has been added to the marketplace.</p>
                  <Button onClick={resetForms} className="bg-teal-600 hover:bg-teal-700 text-white">
                    Done
                  </Button>
                </div>
              )}
            </DialogContent>
          </Dialog>
          <Dialog
            open={isJobModalOpen}
            onOpenChange={(open) => {
              setIsJobModalOpen(open)
              if (!open) {
                setShowJobSuccess(false)
              }
            }}
          >
            <DialogTrigger asChild>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900">Post a Job</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              {!showJobSuccess ? (
                <>
                  <DialogHeader>
                    <DialogTitle>Post a New Job</DialogTitle>
                    <DialogDescription>Describe your job requirements and find the perfect artisan.</DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleJobSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="jobTitle">Job Title</Label>
                      <Input
                        id="jobTitle"
                        placeholder="Enter job title"
                        value={jobForm.title}
                        onChange={(e) => setJobForm({ ...jobForm, title: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="jobCategory">Category</Label>
                      <Select onValueChange={(value) => setJobForm({ ...jobForm, category: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="construction">Construction & Renovation</SelectItem>
                          <SelectItem value="electrical">Electrical Work</SelectItem>
                          <SelectItem value="plumbing">Plumbing</SelectItem>
                          <SelectItem value="carpentry">Carpentry</SelectItem>
                          <SelectItem value="painting">Painting</SelectItem>
                          <SelectItem value="cleaning">Cleaning Services</SelectItem>
                          <SelectItem value="gardening">Gardening & Landscaping</SelectItem>
                          <SelectItem value="fashion">Fashion & Tailoring</SelectItem>
                          <SelectItem value="beauty">Beauty & Wellness</SelectItem>
                          <SelectItem value="tech">Technology & IT</SelectItem>
                          <SelectItem value="events">Events & Catering</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="jobDescription">Description</Label>
                      <Textarea
                        id="jobDescription"
                        placeholder="Describe your job requirements..."
                        value={jobForm.description}
                        onChange={(e) => setJobForm({ ...jobForm, description: e.target.value })}
                        rows={3}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="budget">Budget (₦)</Label>
                      <Input
                        id="budget"
                        type="number"
                        placeholder="0.00"
                        value={jobForm.budget}
                        onChange={(e) => setJobForm({ ...jobForm, budget: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="deadline">Deadline</Label>
                      <Input
                        id="deadline"
                        type="date"
                        value={jobForm.deadline}
                        onChange={(e) => setJobForm({ ...jobForm, deadline: e.target.value })}
                        required
                      />
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        className="flex-1"
                        onClick={() => setIsJobModalOpen(false)}
                      >
                        Cancel
                      </Button>
                      <Button type="submit" className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-gray-900">
                        Post Job
                      </Button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <div className="bg-yellow-100 rounded-full p-3 mb-4">
                    <svg
                      className="h-10 w-10 text-yellow-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Job Posted Successfully!</h2>
                  <p className="text-gray-600 mb-6">Your job has been posted and is now visible to artisans.</p>
                  <Button onClick={resetForms} className="bg-yellow-400 hover:bg-yellow-500 text-gray-900">
                    Done
                  </Button>
                </div>
              )}
            </DialogContent>
          </Dialog>
          <Dialog
            open={isServiceModalOpen}
            onOpenChange={(open) => {
              setIsServiceModalOpen(open)
              if (!open) {
                setShowServiceSuccess(false)
              }
            }}
          >
            <DialogTrigger asChild>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white">List Service</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px]">
              {!showServiceSuccess ? (
                <>
                  <DialogHeader>
                    <DialogTitle>List a New Service</DialogTitle>
                    <DialogDescription>Offer your skills and expertise to potential clients.</DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleServiceSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="serviceTitle">Service Title</Label>
                      <Input
                        id="serviceTitle"
                        placeholder="Enter service title"
                        value={serviceForm.title}
                        onChange={(e) => setServiceForm({ ...serviceForm, title: e.target.value })}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="serviceCategory">Category</Label>
                      <Select onValueChange={(value) => setServiceForm({ ...serviceForm, category: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="construction">Construction & Renovation</SelectItem>
                          <SelectItem value="electrical">Electrical Work</SelectItem>
                          <SelectItem value="plumbing">Plumbing</SelectItem>
                          <SelectItem value="carpentry">Carpentry</SelectItem>
                          <SelectItem value="painting">Painting</SelectItem>
                          <SelectItem value="cleaning">Cleaning Services</SelectItem>
                          <SelectItem value="gardening">Gardening & Landscaping</SelectItem>
                          <SelectItem value="fashion">Fashion & Tailoring</SelectItem>
                          <SelectItem value="beauty">Beauty & Wellness</SelectItem>
                          <SelectItem value="tech">Technology & IT</SelectItem>
                          <SelectItem value="events">Events & Catering</SelectItem>
                          <SelectItem value="tutoring">Tutoring & Education</SelectItem>
                          <SelectItem value="photography">Photography</SelectItem>
                          <SelectItem value="design">Graphic Design</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="serviceDescription">Description</Label>
                      <Textarea
                        id="serviceDescription"
                        placeholder="Describe your service in detail..."
                        value={serviceForm.description}
                        onChange={(e) => setServiceForm({ ...serviceForm, description: e.target.value })}
                        rows={3}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="servicePrice">Price (₦)</Label>
                        <Input
                          id="servicePrice"
                          type="number"
                          placeholder="0.00"
                          value={serviceForm.price}
                          onChange={(e) => setServiceForm({ ...serviceForm, price: e.target.value })}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="serviceDuration">Duration</Label>
                        <Select onValueChange={(value) => setServiceForm({ ...serviceForm, duration: value })}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select duration" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-hour">1 Hour</SelectItem>
                            <SelectItem value="2-hours">2 Hours</SelectItem>
                            <SelectItem value="half-day">Half Day</SelectItem>
                            <SelectItem value="full-day">Full Day</SelectItem>
                            <SelectItem value="2-days">2 Days</SelectItem>
                            <SelectItem value="1-week">1 Week</SelectItem>
                            <SelectItem value="custom">Custom</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="serviceLocation">Service Location</Label>
                      <Select onValueChange={(value) => setServiceForm({ ...serviceForm, location: value })}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select location type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="client-location">At Client's Location</SelectItem>
                          <SelectItem value="my-location">At My Location</SelectItem>
                          <SelectItem value="online">Online/Remote</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button
                        type="button"
                        variant="outline"
                        className="flex-1"
                        onClick={() => setIsServiceModalOpen(false)}
                      >
                        Cancel
                      </Button>
                      <Button type="submit" className="flex-1 bg-purple-600 hover:bg-purple-700 text-white">
                        List Service
                      </Button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <div className="bg-purple-100 rounded-full p-3 mb-4">
                    <svg
                      className="h-10 w-10 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Service Listed Successfully!</h2>
                  <p className="text-gray-600 mb-6">Your service is now available for clients to book.</p>
                  <Button onClick={resetForms} className="bg-purple-600 hover:bg-purple-700 text-white">
                    Done
                  </Button>
                </div>
              )}
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Active Jobs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-teal-800">3</div>
            <p className="text-xs text-green-600 mt-1">+2 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Completed Jobs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-teal-800">12</div>
            <p className="text-xs text-green-600 mt-1">+5 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total Spent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-teal-800">₦45,200</div>
            <p className="text-xs text-green-600 mt-1">+₦12,000 from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Projects */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Jobs</CardTitle>
          <CardDescription>Your most recent jobs and their status</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                id: 1,
                title: "Home Renovation",
                artisan: "Chidi Okafor",
                status: "In Progress",
                date: "June 2, 2025",
              },
              {
                id: 2,
                title: "Wedding Dress",
                artisan: "Amaka Nwosu",
                status: "Completed",
                date: "May 28, 2025",
              },
              {
                id: 3,
                title: "Office Electrical Work",
                artisan: "Samuel Udoakah",
                status: "In Progress",
                date: "May 25, 2025",
              },
            ].map((project) => (
              <div key={project.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div>
                  <h3 className="font-medium">{project.title}</h3>
                  <p className="text-sm text-gray-500">Artisan: {project.artisan}</p>
                </div>
                <div className="text-right">
                  <Badge className={project.status === "Completed" ? "bg-green-600" : "bg-yellow-500"}>
                    {project.status}
                  </Badge>
                  <p className="text-xs text-gray-500 mt-1">{project.date}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Appointments */}
      <Card>
        <CardHeader>
          <CardTitle>Upcoming Appointments</CardTitle>
          <CardDescription>Your scheduled appointments with artisans</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                id: 1,
                title: "Site Inspection",
                artisan: "Chidi Okafor",
                time: "10:00 AM",
                date: "June 8, 2025",
              },
              {
                id: 2,
                title: "Measurement Session",
                artisan: "Amaka Nwosu",
                time: "2:30 PM",
                date: "June 10, 2025",
              },
            ].map((appointment) => (
              <div key={appointment.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center">
                  <div className="bg-teal-100 p-3 rounded-full mr-4">
                    <Clock className="h-5 w-5 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="font-medium">{appointment.title}</h3>
                    <p className="text-sm text-gray-500">with {appointment.artisan}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">{appointment.time}</p>
                  <p className="text-xs text-gray-500">{appointment.date}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
