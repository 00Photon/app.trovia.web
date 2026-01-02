"use client"

import { useState } from "react"
import { Hammer, Scissors, Zap, Wrench, Paintbrush, Home, Car, Shirt } from "lucide-react"

const categories = [
  {
    icon: Hammer,
    name: "Carpentry & Woodwork",
    count: "1,200+ artisans",
    image: "/carpenter.jpg",
    description: "Custom furniture, home repairs, and fine woodworking",
    popular: ["Kitchen Cabinets", "Custom Shelving", "Deck Building"],
  },
  {
    icon: Zap,
    name: "Electrical Services",
    count: "800+ artisans",
    image: "/elect.png",
    description: "Licensed electricians for all your power needs",
    popular: ["Home Wiring", "Smart Home Setup", "Panel Upgrades"],
  },
  {
    icon: Wrench,
    name: "Plumbing & Repairs",
    count: "650+ artisans",
    image: "/plum.jpg",
    description: "Reliable plumbers for installations and repairs",
    popular: ["Bathroom Remodel", "Leak Repairs", "Fixture Installation"],
  },
  {
    icon: Paintbrush,
    name: "Painting & Decorating",
    count: "900+ artisans",
    image: "/painter.png",
    description: "Transform your space with professional painters",
    popular: ["Interior Painting", "Exterior Painting", "Decorative Finishes"],
  },
  {
    icon: Scissors,
    name: "Tailoring & Fashion",
    count: "450+ artisans",
    image: "/tailor.jpg",
    description: "Custom clothing and expert alterations",
    popular: ["Wedding Dresses", "Suit Tailoring", "Clothing Repairs"],
  },
  {
    icon: Home,
    name: "Home Improvement",
    count: "1,100+ artisans",
    image: "/repair.jpg",
    description: "Complete renovation and improvement services",
    popular: ["Kitchen Remodel", "Bathroom Renovation", "Flooring"],
  },
  {
    icon: Car,
    name: "Automotive Services",
    count: "320+ artisans",
    image: "/auto.jpg",
    description: "Skilled mechanics and auto body specialists",
    popular: ["Engine Repair", "Body Work", "Custom Modifications"],
  },
  {
    icon: Shirt,
    name: "Cleaning & Maintenance",
    count: "750+ artisans",
    image: "/clean.jpg",
    description: "Keep your space pristine with local cleaners",
    popular: ["Deep Cleaning", "Window Cleaning", "Carpet Cleaning"],
  },
]

export function LocalCategoriesSection() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null)

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Local Artisan Categories</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover skilled professionals in your neighborhood across dozens of specialties. Every artisan is locally
            verified and community-rated.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <div
                key={category.name}
                className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                onMouseEnter={() => setHoveredCategory(index)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="flex items-center mb-2">
                      <Icon className="w-6 h-6 mr-2" />
                      <span className="font-semibold">{category.count}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{category.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{category.description}</p>

                  {hoveredCategory === index && (
                    <div className="space-y-2 animate-in slide-in-from-bottom-2 duration-200">
                      <p className="text-xs font-medium text-emerald-600 uppercase tracking-wide">Popular Services:</p>
                      <div className="flex flex-wrap gap-1">
                        {category.popular.map((service) => (
                          <span key={service} className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md text-xs">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
