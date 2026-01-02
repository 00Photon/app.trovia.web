"use client"

import { ArrowRight, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

export function CallToActionSection() {
  const router = useRouter()

  const content = {
    icon: Users,
    title: "Get Started Today",
    description: "Hire trusted artisans or shop local handmade products.",
    points: [
      "Browse verified professionals",
      "Post jobs and get bids",
      "Shop handmade goods",
      "Support local economy",
    ],
    cta: "Get Started",
  }

  const { icon: Icon, title, description, points, cta } = content

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700">
      <div className="container mx-auto px-4 text-white text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Join Your Local Community</h2>
        <p className="text-xl text-emerald-100 mb-12 max-w-2xl mx-auto">
          Hire skilled artisans or promote your craft—your community is waiting.
        </p>

        <div className="max-w-xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8">
          <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Icon className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className="text-emerald-100 mb-6">{description}</p>
          <ul className="text-emerald-100 text-sm space-y-2 mb-6">
            {points.map((point) => (
              <li key={point}>• {point}</li>
            ))}
          </ul>
          <Button
            className="w-full bg-white text-emerald-600 hover:bg-gray-100"
            onClick={() => router.push("/onboard/sign-up")}
          >
            {cta}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}