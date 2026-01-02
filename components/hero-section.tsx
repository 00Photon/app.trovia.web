"use client"

import { useEffect, useRef } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const artisans = [
  { name: "", skill: "Carpenter", image: "plum.jpg" },
   { name: "", skill: "Plumber", image: "plumber.jpg" },
  { name: "", skill: "Electrician", image: "elect.png" },
  { name: "", skill: "Painter", image: "painter.png" },
  { name: "", skill: "Plumber", image: "plumber.jpg" },
  { name: "", skill: "Tailor", image: "tailor.jpg" },
  { name: "", skill: "Landscaper", image: "landscaper.jpg" },
  // { name: "", skill: "Jeweler", image: "jeweler.jpg" },
]

export function HeroSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let scrollAmount = 0
    const scrollStep = 0.5
    const scrollDelay = 20

    const intervalId = setInterval(() => {
      if (scrollContainer) {
        scrollAmount += scrollStep
        scrollContainer.scrollLeft = scrollAmount

        // Reset scroll when reaching the end
        if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollAmount = 0
        }
      }
    }, scrollDelay)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <section className="relative overflow-hidden bg-white pb-20 mt-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8">
           Discover <span className="text-emerald-600">Nigeria's Deepest Pool</span> of Skilled and Leading Workforce
          </h1>

          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mt-20 mb-12 max-w-3xl mx-auto">
           Build trust and scale with confidence. Connect with Nigeria's most vetted professionals and local
experts you can trust for any projects, big or small. Get help the same day with transparent rates
and no hidden cost.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-4 text-lg bg-transparent"
            >
              Browse Artisans
            </Button>
          </div>

          {/* Artisan Carousel */}
          <div className="relative">
            <div
              ref={scrollRef}
              className="flex overflow-x-hidden gap-8 pb-4"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {/* Duplicate the array to create seamless loop */}
              {[...artisans, ...artisans].map((artisan, index) => (
                <div key={`${artisan.name}-${index}`} className="flex-shrink-0 text-center group cursor-pointer">
                  <div className="relative mb-4">
                    <img
                      src={artisan.image || "/placeholder.svg"}
                      alt={artisan.name}
                      className="w-24 h-24 rounded-full object-cover mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-emerald-600/0 group-hover:bg-emerald-600/10 transition-colors duration-300"></div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{artisan.name}</h3>
                  <p className="text-sm text-emerald-600">{artisan.skill}</p>
                </div>
              ))}
            </div>

            {/* Gradient overlays for smooth edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
          </div>

          <p className="text-gray-500 mt-8">Meet some of our trusted local artisans</p>
        </div>
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  )
}
