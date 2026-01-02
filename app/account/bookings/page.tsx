"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin, User } from "lucide-react"

export default function BookingsPage() {
  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-teal-800">My Bookings</h1>
        <Button className="bg-teal-600 hover:bg-teal-700 text-white">
          <Calendar className="h-4 w-4 mr-2" />
          New Booking
        </Button>
      </div>

      {/* Upcoming Bookings */}
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
                service: "Home Renovation",
                date: "June 8, 2025",
                time: "10:00 AM - 11:00 AM",
                location: "123 Main Street, Lagos",
                status: "Confirmed",
              },
              {
                id: 2,
                title: "Final Fitting",
                artisan: "Amaka Nwosu",
                service: "Wedding Dress",
                date: "June 10, 2025",
                time: "2:30 PM - 3:30 PM",
                location: "Fashion Studio, Victoria Island",
                status: "Pending",
              },
              {
                id: 3,
                title: "Consultation",
                artisan: "Samuel Udoakah",
                service: "Electrical Work",
                date: "June 12, 2025",
                time: "9:00 AM - 10:00 AM",
                location: "Office Complex, Ikeja",
                status: "Confirmed",
              },
            ].map((booking) => (
              <Card key={booking.id} className="border-l-4 border-l-teal-600">
                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{booking.title}</h3>
                      <p className="text-gray-600">{booking.service}</p>
                    </div>
                    <Badge
                      className={
                        booking.status === "Confirmed"
                          ? "bg-green-600"
                          : booking.status === "Pending"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                      }
                    >
                      {booking.status}
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <User className="h-4 w-4 mr-2" />
                      {booking.artisan}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="h-4 w-4 mr-2" />
                      {booking.date}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      {booking.time}
                    </div>
                  </div>

                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <MapPin className="h-4 w-4 mr-2" />
                    {booking.location}
                  </div>

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button variant="outline" size="sm">
                      Reschedule
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                      Cancel
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Past Bookings */}
      <Card>
        <CardHeader>
          <CardTitle>Past Appointments</CardTitle>
          <CardDescription>Your completed appointments</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              {
                id: 4,
                title: "Initial Consultation",
                artisan: "Amaka Nwosu",
                service: "Wedding Dress",
                date: "May 25, 2025",
                time: "3:00 PM - 4:00 PM",
                status: "Completed",
              },
              {
                id: 5,
                title: "Material Selection",
                artisan: "Ibrahim Musa",
                service: "Kitchen Cabinets",
                date: "May 20, 2025",
                time: "11:00 AM - 12:00 PM",
                status: "Completed",
              },
            ].map((booking) => (
              <div key={booking.id} className="flex items-center justify-between p-4 border rounded-lg bg-gray-50">
                <div>
                  <h3 className="font-medium">{booking.title}</h3>
                  <p className="text-sm text-gray-500">
                    {booking.service} with {booking.artisan}
                  </p>
                  <p className="text-sm text-gray-500">
                    {booking.date} at {booking.time}
                  </p>
                </div>
                <div className="text-right">
                  <Badge className="bg-gray-600 mb-2">{booking.status}</Badge>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Leave Review
                    </Button>
                    <Button variant="outline" size="sm">
                      Book Again
                    </Button>
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
