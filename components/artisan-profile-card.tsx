import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Star } from "lucide-react"

interface ArtisanProfileCardProps {
  id: string
  name: string
  profession: string
  location: string
  rating: number
  image: string
  isTopRated?: boolean
}

export function ArtisanProfileCard({
  id,
  name,
  profession,
  location,
  rating,
  image,
  isTopRated = false,
}: ArtisanProfileCardProps) {
  return (
    <Card className="bg-teal-700 text-white border-0 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
      <CardContent className="p-0">
        <div className="relative">
          {isTopRated && (
            <Badge className="absolute top-3 left-3 bg-yellow-400 text-gray-900 font-medium z-10">Top Rated</Badge>
          )}
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={image || "/placeholder.svg"}
              alt={name}
              className="w-full h-full object-cover"
              crossOrigin="anonymous"
            />
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-xl font-bold mb-1">{name}</h3>
          <p className="text-teal-100 mb-2">{profession}</p>

          <div className="flex items-center mb-3">
            <MapPin className="h-4 w-4 text-teal-300 mr-1" />
            <span className="text-sm text-teal-100">{location}</span>
          </div>

          <div className="flex items-center mb-4">
            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400 mr-1" />
            <span className="text-sm font-medium">Rating: {rating}/5</span>
          </div>

          <div className="flex gap-2">
            <Button variant="secondary" className="flex-1 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium">
              View Profile
            </Button>
            <Button className="flex-1 bg-gray-900 hover:bg-gray-800 text-white">Hire</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
