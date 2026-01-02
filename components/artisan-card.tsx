"use client"

import { Star, MapPin } from "lucide-react"

interface ArtisanCardProps {
  title: string
  image: string
}

export function ArtisanCard({ title, image }: ArtisanCardProps) {
  const defaultImage = "/placeholder.svg?height=200&width=300"

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
      <img src={image || defaultImage} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <div className="flex items-center text-gray-600 text-sm mb-3">
          <MapPin className="w-4 h-4 mr-1" />
          <span>Local Area</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-yellow-400 mr-1" />
            <span className="text-sm font-medium">4.8</span>
          </div>
          <span className="text-emerald-600 font-semibold">From $35/hr</span>
        </div>
      </div>
    </div>
  )
}
