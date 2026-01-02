"use client"

import { useState, useEffect } from "react"
import { MapPin, Users, Clock, Star } from 'lucide-react'

const communityProjects = [
  {
    id: 1,
    title: "Downtown Community Garden Renovation",
    location: "Downtown District",
    image: "/placeholder.svg?height=400&width=600",
    artisans: ["Carlos R.", "Maria S.", "David K."],
    duration: "3 weeks",
    rating: 4.9,
    description: "Local artisans came together to transform an abandoned lot into a thriving community garden with custom planters, irrigation, and seating areas.",
    impact: "Serves 200+ families",
    category: "Community Project"
  },
  {
    id: 2,
    title: "Historic Main Street Restoration",
    location: "Historic Quarter",
    image: "/placeholder.svg?height=400&width=600",
    artisans: ["Elena M.", "James W.", "Sarah L."],
    duration: "2 months",
    rating: 5.0,
    description: "Skilled craftspeople restored the facades of 12 historic buildings, preserving our neighborhood's character while modernizing infrastructure.",
    impact: "12 buildings restored",
    category: "Historic Preservation"
  },
  {
    id: 3,
    title: "Riverside Park Playground Build",
    location: "Riverside",
    image: "/placeholder.svg?height=400&width=600",
    artisans: ["Michael T.", "Ana R.", "Kevin P."],
    duration: "5 weeks",
    rating: 4.8,
    description: "Community volunteers and local artisans built a custom playground featuring locally-sourced materials and unique design elements.",
    impact: "500+ children benefit",
    category: "Community Build"
  },
]

export function CommunityShowcaseSection() {
  const [currentProject, setCurrentProject] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % communityProjects.length)
    }, 6000)
    return () => clearInterval(interval)
  }, [])

  const project = communityProjects[currentProject]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Community Success Stories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how local artisans are transforming neighborhoods and bringing communities together 
            through collaborative projects and shared craftsmanship.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute top-4 left-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                {project.category}
              </div>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="font-semibold">{project.rating}</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-lg text-gray-600 leading-relaxed">{project.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <MapPin className="w-5 h-5 text-emerald-600 mr-2" />
                    <span className="font-medium text-gray-900">Location</span>
                  </div>
                  <p className="text-gray-600">{project.location}</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Clock className="w-5 h-5 text-emerald-600 mr-2" />
                    <span className="font-medium text-gray-900">Duration</span>
                  </div>
                  <p className="text-gray-600">{project.duration}</p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <Users className="w-5 h-5 text-emerald-600 mr-2" />
                    <span className="font-medium text-gray-900">Artisans</span>
                  </div>
                  <p className="text-gray-600">{project.artisans.join(", ")}</p>
                </div>

                <div className="bg-emerald-50 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-5 h-5 bg-emerald-600 rounded-full mr-2" />
                    <span className="font-medium text-gray-900">Impact</span>
                  </div>
                  <p className="text-emerald-700 font-medium">{project.impact}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Project Navigation */}
          <div className="flex justify-center mt-12 space-x-2">
            {communityProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProject(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentProject ? "bg-emerald-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
