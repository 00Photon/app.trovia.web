"use client"

import { useState } from "react"
import { Star, MapPin, Clock, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const artisans = [
  {
    id: 1,
    name: "Carlos Rodriguez",
    skill: "Master Carpenter",
    location: "Downtown District",
    rating: 4.9,
    reviews: 127,
    image: "/avatar1.jpg",
    specialties: ["Custom Furniture", "Home Renovation", "Woodworking"],
    hourlyRate: 4500,
    responseTime: "2 hours",
    completedJobs: 89,
  },
  {
    id: 2,
    name: "Amara Johnson",
    skill: "Fashion Designer",
    location: "Arts Quarter",
    rating: 5.0,
    reviews: 94,
    image: "/fashion.jpg",
    specialties: ["Custom Clothing", "Alterations", "Wedding Dresses"],
    hourlyRate: 3500,
    responseTime: "1 hour",
    completedJobs: 156,
  },
  {
    id: 3,
    name: "David Kim",
    skill: "Electrician",
    location: "Riverside",
    rating: 4.8,
    reviews: 203,
    image: "/avatar2.jpg",
    specialties: ["Home Wiring", "Solar Installation", "Smart Home Setup"],
    hourlyRate: 5500,
    responseTime: "30 minutes",
    completedJobs: 234,
  },
]

export function FeaturedArtisansSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Featured Artisans</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover skilled professionals in your area, each verified and rated by our community.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {artisans.map((artisan) => (
            <div
              key={artisan.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredCard(artisan.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative">
                <img
                  src={artisan.image || "/placeholder.svg"}
                  alt={artisan.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-sm">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 mr-1" />
                    <span className="text-sm font-semibold">{artisan.rating}</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  ₦ {artisan.hourlyRate}/hr
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{artisan.name}</h3>
                <p className="text-emerald-600 font-medium mb-2">{artisan.skill}</p>

                <div className="flex items-center text-gray-600 text-sm mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="mr-4">{artisan.location}</span>
                  <Clock className="w-4 h-4 mr-1" />
                  <span>Responds in {artisan.responseTime}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {artisan.specialties.slice(0, 2).map((specialty) => (
                    <span key={specialty} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      {specialty}
                    </span>
                  ))}
                  {artisan.specialties.length > 2 && (
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      +{artisan.specialties.length - 2} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <span>{artisan.completedJobs} jobs completed</span>
                  <span>{artisan.reviews} reviews</span>
                </div>

                <Button
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white"
                  variant={hoveredCard === artisan.id ? "default" : "outline"}
                >
                  {hoveredCard === artisan.id ? "Contact Now" : "View Profile"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent"
          >
            View All Artisans
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
