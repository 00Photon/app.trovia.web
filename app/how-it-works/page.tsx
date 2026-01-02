"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Search, UserCheck, Handshake, Star, ArrowRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const steps = [
  {
    icon: Search,
    title: "Browse & Discover",
    description: "Search for local artisans by skill, location, or browse handmade products in our marketplace.",
    details: [
      "Filter by location, skill, and rating",
      "View detailed profiles and portfolios",
      "Read reviews from other community members",
      "Compare prices and availability",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    icon: UserCheck,
    title: "Connect & Hire",
    description: "Review profiles, ratings, and portfolios. Send job requests or make purchases directly.",
    details: [
      "Send direct messages to artisans",
      "Request custom quotes for your project",
      "Schedule consultations and site visits",
      "Secure booking with our payment system",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    icon: Handshake,
    title: "Work Together",
    description: "Collaborate on projects with secure messaging, milestone tracking, and progress updates.",
    details: [
      "Track project milestones and deadlines",
      "Communicate through our secure platform",
      "Make secure payments at each milestone",
      "Share photos and updates in real-time",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    icon: Star,
    title: "Rate & Review",
    description: "Leave feedback to help build trust in our community and help others make informed decisions.",
    details: [
      "Rate the quality of work and professionalism",
      "Leave detailed reviews for future clients",
      "Upload photos of completed projects",
      "Build reputation within the community",
    ],
    image: "/placeholder.svg?height=300&width=400",
  },
]

const userTypes = [
  {
    title: "For Clients",
    description: "Looking to hire skilled artisans or buy unique products",
    steps: [
      "Create your free account",
      "Post your project or browse artisans",
      "Review proposals and select your artisan",
      "Work together and pay securely",
      "Leave a review to help the community",
    ],
    cta: "Start Hiring Today",
  },
  {
    title: "For Artisans",
    description: "Ready to showcase your skills and find local work",
    steps: [
      "Sign up and create your profile",
      "Upload your portfolio and set your rates",
      "Apply for jobs or list your products",
      "Complete projects and get paid",
      "Build your reputation and grow your business",
    ],
    cta: "Join as Artisan",
  },
]

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">How Trovia Works</h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Connecting local artisans with their community is simple. Here's how our platform brings skilled
                craftspeople and clients together in just a few easy steps.
              </p>
            </div>
          </div>
        </section>

        {/* Main Steps Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {steps.map((step, index) => {
                const Icon = step.icon
                const isEven = index % 2 === 0

                return (
                  <div
                    key={step.title}
                    className={`grid lg:grid-cols-2 gap-12 items-center mb-20 ${
                      isEven ? "" : "lg:grid-flow-col-dense"
                    }`}
                  >
                    <div className={`${isEven ? "" : "lg:col-start-2"}`}>
                      <img
                        src={step.image || "/placeholder.svg"}
                        alt={step.title}
                        className="w-full h-80 object-cover rounded-2xl shadow-lg"
                      />
                    </div>

                    <div className={`space-y-6 ${isEven ? "" : "lg:col-start-1"}`}>
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-emerald-100 rounded-2xl flex items-center justify-center mr-6">
                          <Icon className="w-8 h-8 text-emerald-600" />
                        </div>
                        <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                          {index + 1}
                        </div>
                      </div>

                      <h3 className="text-3xl font-bold text-gray-900">{step.title}</h3>
                      <p className="text-xl text-gray-600 leading-relaxed">{step.description}</p>

                      <ul className="space-y-3">
                        {step.details.map((detail) => (
                          <li key={detail} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-emerald-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* User Type Sections */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Path</h2>
                <p className="text-xl text-gray-600">
                  Whether you're looking to hire or offer services, we've made it simple to get started.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12">
                {userTypes.map((userType) => (
                  <div key={userType.title} className="bg-gray-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{userType.title}</h3>
                    <p className="text-gray-600 mb-8">{userType.description}</p>

                    <div className="space-y-4 mb-8">
                      {userType.steps.map((step, index) => (
                        <div key={step} className="flex items-start">
                          <div className="w-6 h-6 bg-emerald-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-4 mt-0.5 flex-shrink-0">
                            {index + 1}
                          </div>
                          <span className="text-gray-700">{step}</span>
                        </div>
                      ))}
                    </div>

                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                      {userType.cta}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                <p className="text-xl text-gray-600">Got questions? We've got answers to help you get started.</p>
              </div>

              <div className="space-y-8">
                {[
                  {
                    question: "How do I know if an artisan is trustworthy?",
                    answer:
                      "All artisans on our platform are verified through background checks, license verification (where applicable), and community reviews. You can see ratings, read detailed reviews, and view their portfolio before making a decision.",
                  },
                  {
                    question: "What if I'm not satisfied with the work?",
                    answer:
                      "We offer dispute resolution services and our milestone payment system ensures you only pay as work is completed satisfactorily. Our community guidelines and review system help maintain high standards.",
                  },
                  {
                    question: "How does pricing work?",
                    answer:
                      "Artisans set their own rates, which you can see on their profiles. For custom projects, you can request quotes and compare prices. Our platform doesn't add any markup - you pay the artisan directly.",
                  },
                  {
                    question: "Is there a fee to use the platform?",
                    answer:
                      "Creating an account and browsing is completely free. We only charge a small service fee when a transaction is completed, which helps us maintain the platform and provide customer support.",
                  },
                ].map((faq) => (
                  <div key={faq.question} className="bg-white rounded-lg p-6 shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-emerald-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
              <p className="text-xl text-emerald-100 mb-8">
                Join thousands of satisfied clients and skilled artisans in your local community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white/10 bg-transparent px-8 py-4"
                >
                  Browse Artisans
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
