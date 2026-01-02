"use client"

import { Shield, Zap, Users, MapPin, DollarSign, Clock } from "lucide-react"

const benefits = [
  {
    icon: Shield,
    title: "Verified & Trusted",
    description: "All artisans are background-checked and verified for your peace of mind.",
    color: "emerald",
  },
  {
    icon: Zap,
    title: "Quick Matching",
    description: "Our AI-powered system connects you with the perfect artisan in minutes.",
    color: "yellow",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Built by locals, for locals. Support your neighborhood economy.",
    color: "blue",
  },
  {
    icon: MapPin,
    title: "Hyperlocal Focus",
    description: "Find skilled professionals right in your neighborhood.",
    color: "green",
  },
  {
    icon: DollarSign,
    title: "Fair Pricing",
    description: "Transparent pricing with no hidden fees. Pay what's fair.",
    color: "purple",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock customer support to help when you need it.",
    color: "red",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Trovia?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We're more than just a marketplace. We're building stronger communities by connecting neighbors and
            supporting local talent.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => {
            const Icon = benefit.icon
            return (
              <div
                key={benefit.title}
                className="group p-8 rounded-2xl border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 bg-${benefit.color}-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`w-8 h-8 text-${benefit.color}-600`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
