"use client"

import { TrendingUp, Heart, Handshake, Building } from "lucide-react"

const impactStats = [
  {
    icon: TrendingUp,
    title: "Economic Growth",
    stats: [
      { label: "Local Revenue Generated", value: "$2.4M", period: "this year" },
      { label: "Average Artisan Income Increase", value: "35%", period: "vs. traditional methods" },
      { label: "Jobs Created", value: "450+", period: "in local communities" },
    ],
    image: "/placeholder.svg?height=300&width=400",
    color: "emerald",
  },
  {
    icon: Heart,
    title: "Community Wellness",
    stats: [
      { label: "Neighborhoods Served", value: "85", period: "across the city" },
      { label: "Community Projects Completed", value: "120+", period: "this year" },
      { label: "Volunteer Hours Contributed", value: "3,200", period: "by artisans" },
    ],
    image: "/placeholder.svg?height=300&width=400",
    color: "blue",
  },
  {
    icon: Handshake,
    title: "Trust & Relationships",
    stats: [
      { label: "Repeat Customer Rate", value: "78%", period: "choose same artisan" },
      { label: "Neighbor-to-Neighbor Referrals", value: "65%", period: "of new connections" },
      { label: "Community Satisfaction", value: "4.8/5", period: "average rating" },
    ],
    image: "/placeholder.svg?height=300&width=400",
    color: "purple",
  },
  {
    icon: Building,
    title: "Local Business Support",
    stats: [
      { label: "Small Businesses Supported", value: "200+", period: "through partnerships" },
      { label: "Local Material Sourcing", value: "60%", period: "of all projects" },
      { label: "Business Partnerships", value: "150+", period: "with local suppliers" },
    ],
    image: "/placeholder.svg?height=300&width=400",
    color: "orange",
  },
]

export function LocalImpactSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Local Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            More than just a marketplace, we're building stronger communities by keeping skills, money, and
            relationships local. See how we're making a difference.
          </p>
        </div>

        <div className="space-y-16">
          {impactStats.map((section, index) => {
            const Icon = section.icon
            const isEven = index % 2 === 0

            return (
              <div
                key={section.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${isEven ? "" : "lg:grid-flow-col-dense"}`}
              >
                <div className={`${isEven ? "" : "lg:col-start-2"}`}>
                  <img
                    src={section.image || "/placeholder.svg"}
                    alt={section.title}
                    className="w-full h-80 object-cover rounded-2xl shadow-lg"
                  />
                </div>

                <div className={`space-y-6 ${isEven ? "" : "lg:col-start-1"}`}>
                  <div className="flex items-center mb-6">
                    <div
                      className={`w-12 h-12 bg-${section.color}-100 rounded-xl flex items-center justify-center mr-4`}
                    >
                      <Icon className={`w-6 h-6 text-${section.color}-600`} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{section.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {section.stats.map((stat) => (
                      <div key={stat.label} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
                        <div className="flex items-end justify-between mb-2">
                          <span className="text-gray-600 font-medium">{stat.label}</span>
                          <span className={`text-3xl font-bold text-${section.color}-600`}>{stat.value}</span>
                        </div>
                        <p className="text-sm text-gray-500">{stat.period}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
