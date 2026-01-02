"use client"

import { Search, UserCheck, Handshake, Star } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Browse & Discover",
    description: "Search for local artisans by skill, location, or browse handmade products in our marketplace.",
    color: "emerald",
  },
  {
    icon: UserCheck,
    title: "Connect & Hire",
    description: "Review profiles, ratings, and portfolios. Send job requests or make purchases directly.",
    color: "teal",
  },
  {
    icon: Handshake,
    title: "Work Together",
    description: "Collaborate on projects with secure messaging, milestone tracking, and progress updates.",
    color: "cyan",
  },
  {
    icon: Star,
    title: "Rate & Review",
    description: "Leave feedback to help build trust in our community and help others make informed decisions.",
    color: "emerald",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How Trovia Works</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting started is simple. Connect with local talent or showcase your skills in just a few steps.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <div key={step.title} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow h-full">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-${step.color}-100 rounded-2xl mb-6`}
                  >
                    <Icon className={`w-8 h-8 text-${step.color}-600`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-gray-300"></div>
                    <div className="w-0 h-0 border-l-4 border-l-gray-300 border-t-2 border-t-transparent border-b-2 border-b-transparent absolute right-0 top-1/2 transform -translate-y-1/2"></div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
