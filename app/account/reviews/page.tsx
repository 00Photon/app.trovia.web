"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Edit } from "lucide-react"

export default function ReviewsPage() {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`h-4 w-4 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`} />
    ))
  }

  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-teal-800">Reviews & Ratings</h1>
        <Button className="bg-teal-600 hover:bg-teal-700 text-white">
          <Edit className="h-4 w-4 mr-2" />
          Write Review
        </Button>
      </div>

      {/* Reviews Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-teal-800">8</div>
            <p className="text-xs text-green-600 mt-1">+3 this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Average Rating</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2">
              <div className="text-3xl font-bold text-teal-800">4.6</div>
              <div className="flex">{renderStars(5)}</div>
            </div>
            <p className="text-xs text-green-600 mt-1">Excellent rating</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Pending Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-teal-800">2</div>
            <p className="text-xs text-orange-600 mt-1">Awaiting your review</p>
          </CardContent>
        </Card>
      </div>

      {/* Pending Reviews */}
      <Card>
        <CardHeader>
          <CardTitle>Pending Reviews</CardTitle>
          <CardDescription>Jobs completed but not yet reviewed</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                id: 1,
                artisan: "Chidi Okafor",
                service: "Home Renovation",
                completedDate: "June 1, 2025",
                avatar: "/placeholder.svg?height=40&width=40",
              },
              {
                id: 2,
                artisan: "Samuel Udoakah",
                service: "Electrical Work",
                completedDate: "May 28, 2025",
                avatar: "/placeholder.svg?height=40&width=40",
              },
            ].map((item) => (
              <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarImage src={item.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {item.artisan
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium">{item.artisan}</h3>
                    <p className="text-sm text-gray-500">{item.service}</p>
                    <p className="text-xs text-gray-400">Completed on {item.completedDate}</p>
                  </div>
                </div>
                <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900">Write Review</Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Your Reviews */}
      <Card>
        <CardHeader>
          <CardTitle>Your Reviews</CardTitle>
          <CardDescription>Reviews you've written for artisans</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {[
              {
                id: 1,
                artisan: "Amaka Nwosu",
                service: "Wedding Dress Design",
                rating: 5,
                date: "May 30, 2025",
                review:
                  "Absolutely amazing work! Amaka created the perfect wedding dress exactly as I envisioned. Her attention to detail and craftsmanship is outstanding. Highly recommended!",
                avatar: "/placeholder.svg?height=40&width=40",
              },
              {
                id: 2,
                artisan: "Ibrahim Musa",
                service: "Kitchen Cabinets",
                rating: 4,
                date: "May 15, 2025",
                review:
                  "Great quality cabinets and professional installation. Ibrahim was punctual and completed the work within the agreed timeframe. Very satisfied with the results.",
                avatar: "/placeholder.svg?height=40&width=40",
              },
              {
                id: 3,
                artisan: "Fatima Hassan",
                service: "Interior Decoration",
                rating: 5,
                date: "April 28, 2025",
                review:
                  "Fatima transformed my living room completely! Her design sense is incredible and she worked within my budget. The space looks amazing now.",
                avatar: "/placeholder.svg?height=40&width=40",
              },
            ].map((review) => (
              <div key={review.id} className="border rounded-lg p-4">
                <div className="flex items-start space-x-3">
                  <Avatar>
                    <AvatarImage src={review.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {review.artisan
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <h3 className="font-medium">{review.artisan}</h3>
                        <p className="text-sm text-gray-500">{review.service}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center gap-1 mb-1">{renderStars(review.rating)}</div>
                        <p className="text-xs text-gray-400">{review.date}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700">{review.review}</p>
                    <div className="flex gap-2 mt-3">
                      <Button variant="outline" size="sm">
                        Edit Review
                      </Button>
                      <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                        Delete Review
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
