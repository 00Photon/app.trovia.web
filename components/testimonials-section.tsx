"use client"

import { useState, useEffect } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Homeowner",
    location: "Downtown District",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "Found an amazing carpenter through Trovia who built custom shelves for my home office. The quality exceeded my expectations and the process was seamless from start to finish.",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Electrician",
    location: "Westside",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "As an electrician, Trovia has transformed my business. I get consistent work from local clients and the platform makes it easy to showcase my skills and build trust with new customers.",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Small Business Owner",
    location: "Arts Quarter",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "I've hired three different artisans through Trovia for my café renovation. Each one was professional, skilled, and delivered exactly what we discussed. Highly recommend!",
  },
  {
    id: 4,
    name: "David Park",
    role: "Furniture Maker",
    location: "Riverside",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "The marketplace feature has been incredible for selling my handmade furniture. I've connected with customers I never would have reached otherwise, and the community support is amazing.",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Community Says</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real stories from real people who've found success on our platform.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <Quote className="w-12 h-12 text-emerald-600 mb-6" />

              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                "{testimonials[currentIndex].text}"
              </blockquote>

              <div className="flex items-center">
                <img
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div className="flex-1">
                  <div className="font-semibold text-gray-900 text-lg">{testimonials[currentIndex].name}</div>
                  <div className="text-gray-600">
                    {testimonials[currentIndex].role} • {testimonials[currentIndex].location}
                  </div>
                  <div className="flex items-center mt-2">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial Navigation */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-emerald-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
