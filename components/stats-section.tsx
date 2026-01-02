"use client"

import { useEffect, useState } from "react"
import { Users, Briefcase, ShoppingBag, MapPin } from "lucide-react"

const stats = [
  { icon: Users, label: "Active Artisans", value: 12500, suffix: "+" },
  { icon: Briefcase, label: "Jobs Completed", value: 45000, suffix: "+" },
  { icon: ShoppingBag, label: "Products Sold", value: 28000, suffix: "+" },
  { icon: MapPin, label: "Cities Served", value: 150, suffix: "+" },
]

export function StatsSection() {
  const [counters, setCounters] = useState(stats.map(() => 0))

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      const increment = stat.value / 100
      return setInterval(() => {
        setCounters((prev) => {
          const newCounters = [...prev]
          if (newCounters[index] < stat.value) {
            newCounters[index] = Math.min(newCounters[index] + increment, stat.value)
          }
          return newCounters
        })
      }, 20)
    })

    return () => intervals.forEach(clearInterval)
  }, [])

  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={stat.label} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-2xl mb-4 group-hover:bg-emerald-200 transition-colors">
                  <Icon className="w-8 h-8 text-emerald-600" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                  {Math.floor(counters[index]).toLocaleString()}
                  {stat.suffix}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
