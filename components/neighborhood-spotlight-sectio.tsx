"use client"

import { useState } from "react"
import { MapPin, Star, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const neighborhoods = [
  {
    name: "Downtown District",
    image: "/placeholder.svg?height=300&width=400",
    artisans: 245,
    rating: 4.9,
    growth: "+15%",
    specialties: ["Carpentry", "Electrical", "Plumbing"],
    featured: {
      name: "Carlos Rodriguez",
      skill: "Master Carpenter",
      image: "/placeholder.svg?height=80&width=80",
      projects: 89,
    },
    description: "The heart of our artisan community, featuring historic buildings and modern workshops.",
    highlights: ["Historic Restoration Hub", "24/7 Emergency Services", "Apprenticeship Programs"],
  },
  {
    name: "Arts Quarter",
    image: "/placeholder.svg?height=300&width=400",
    artisans: 180,
    rating: 4.8,
    growth: "+22%",
    specialties: ["Fashion", "Jewelry", "Pottery"],
    featured: {
      name: "Maria Santos",
      skill: "Fashion Designer",
      image: "/placeholder.svg?height=80&width=80",
      projects: 156,
    },
    description: "Creative hub where traditional crafts meet contemporary design and innovation.",
    highlights: ["Artist Collectives", "Custom Design Studios", "Weekend Markets"],
  },
  {
    name: "Riverside",
    image: "/placeholder.svg?height=300&width=400",
    artisans: 198,
    rating: 4.9,
    growth: "+18%",
    specialties: ["Landscaping", "Masonry", "Metalwork"],
    featured: {
      name: "David Kim",
      skill: "Landscape Artist",
      image: "/placeholder.svg?height=80&width=80",
      projects: 234,
    },
    description: "Scenic neighborhood known for outdoor craftsmanship and sustainable building practices.",
    highlights: ["Eco-Friendly Focus", "Outdoor Specialists", "Community Gardens"],
  },
  {
    name: "Westside",
    image: "/placeholder.svg?height=300&width=400",
    artisans: 167,
    rating: 4.7,
    growth: "+12%",
    specialties: ["Automotive", "Welding", "Mechanics"],
    featured: {
      name: "James Wilson",
      skill: "Auto Specialist",
      image: "/placeholder.svg?height=80&width=80",
      projects: 178,
    },
    description: "Industrial heritage meets modern innovation in this thriving maker community.",
    highlights: ["Maker Spaces", "Technical Training", "Innovation Labs"],
  },
]

export function NeighborhoodSpotlightSection() {
  const [selectedNeighborhood, setSelectedNeighborhood] = useState(0)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Neighborhood Spotlights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each neighborhood in our network has its own character and specialties. Explore the unique artisan
            communities that make our city special.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Neighborhood Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {neighborhoods.map((neighborhood, index) => (
              <button
                key={neighborhood.name}
                onClick={() => setSelectedNeighborhood(index)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  selectedNeighborhood === index
                    ? "bg-emerald-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {neighborhood.name}
              </button>
            ))}
          </div>

          {/* Selected Neighborhood Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={neighborhoods[selectedNeighborhood].image || "/placeholder.svg"}
                alt={neighborhoods[selectedNeighborhood].name}
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 text-emerald-600 mr-2" />
                  <span className="font-semibold">{neighborhoods[selectedNeighborhood].name}</span>
                </div>
              </div>
              <div className="absolute bottom-4 right-4 bg-emerald-600 text-white rounded-lg p-3">
                <div className="flex items-center">
                  <TrendingUp className="w-4 h-4 mr-2" />
                  <span className="font-semibold">{neighborhoods[selectedNeighborhood].growth} growth</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{neighborhoods[selectedNeighborhood].name}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {neighborhoods[selectedNeighborhood].description}
                </p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">
                    {neighborhoods[selectedNeighborhood].artisans}
                  </div>
                  <div className="text-sm text-gray-600">Active Artisans</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="flex items-center justify-center mb-1">
                    <Star className="w-5 h-5 text-yellow-400 mr-1" />
                    <span className="text-2xl font-bold text-gray-900">
                      {neighborhoods[selectedNeighborhood].rating}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600">Avg Rating</div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">
                    {neighborhoods[selectedNeighborhood].growth}
                  </div>
                  <div className="text-sm text-gray-600">This Year</div>
                </div>
              </div>

              {/* Specialties */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Popular Specialties</h4>
                <div className="flex flex-wrap gap-2">
                  {neighborhoods[selectedNeighborhood].specialties.map((specialty) => (
                    <span
                      key={specialty}
                      className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Neighborhood Highlights</h4>
                <ul className="space-y-2">
                  {neighborhoods[selectedNeighborhood].highlights.map((highlight) => (
                    <li key={highlight} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-emerald-600 rounded-full mr-3" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Featured Artisan */}
              <div className="bg-emerald-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-3">Featured Artisan</h4>
                <div className="flex items-center">
                  <img
                    src={neighborhoods[selectedNeighborhood].featured.image || "/placeholder.svg"}
                    alt={neighborhoods[selectedNeighborhood].featured.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {neighborhoods[selectedNeighborhood].featured.name}
                    </div>
                    <div className="text-emerald-600 text-sm">{neighborhoods[selectedNeighborhood].featured.skill}</div>
                    <div className="text-gray-600 text-sm">
                      {neighborhoods[selectedNeighborhood].featured.projects} projects completed
                    </div>
                  </div>
                </div>
              </div>

              <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                Explore {neighborhoods[selectedNeighborhood].name} Artisans
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
