import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Users, Briefcase, Shield } from "lucide-react"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Choose Your Perfect Plan</h1>
            <p className="text-xl text-teal-100 max-w-2xl mx-auto mb-8">
              Unlock the full potential of Trovia with our flexible pricing plans designed for artisans and businesses
              of all sizes.
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Basic Plan */}
              <Card className="relative hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-8">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-gray-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">Basic</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">Free</span>
                    <span className="text-gray-500 ml-2">forever</span>
                  </div>
                  <p className="text-gray-600 mt-2">Perfect for getting started</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">Post up to 3 jobs per month</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">Basic profile listing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">5% commission on completed jobs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">Email support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">Access to marketplace</span>
                    </div>
                  </div>
                  <Button className="w-full mt-8 bg-gray-900 hover:bg-gray-800">Get Started Free</Button>
                </CardContent>
              </Card>

              {/* Professional Plan */}
              <Card className="relative hover:shadow-lg transition-shadow border-2 border-teal-600">
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-teal-600 text-white px-4 py-1">
                  Most Popular
                </Badge>
                <CardHeader className="text-center pb-8">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="h-8 w-8 text-teal-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">Professional</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">₦2,500</span>
                    <span className="text-gray-500 ml-2">/month</span>
                  </div>
                  <p className="text-gray-600 mt-2">For growing businesses</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">Unlimited job postings</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">Featured profile listing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">3% commission on completed jobs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">Priority customer support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">Advanced analytics</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">Verified badge</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">Premium marketplace placement</span>
                    </div>
                  </div>
                  <Button className="w-full mt-8 bg-teal-600 hover:bg-teal-700">Start Professional</Button>
                </CardContent>
              </Card>

              {/* Enterprise Plan */}
              <Card className="relative hover:shadow-lg transition-shadow">
                <CardHeader className="text-center pb-8">
                  <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-yellow-600" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">Enterprise</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">₦5,000</span>
                    <span className="text-gray-500 ml-2">/month</span>
                  </div>
                  <p className="text-gray-600 mt-2">For large organizations</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">Everything in Professional</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">Custom branding options</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">1% commission on completed jobs</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">Dedicated account manager</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">API access</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">White-label solutions</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-green-600" />
                      <span className="text-gray-700">24/7 phone support</span>
                    </div>
                  </div>
                  <Button className="w-full mt-8 bg-yellow-500 hover:bg-yellow-600 text-gray-900">Contact Sales</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Get answers to common questions about our pricing and features.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-8">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I change my plan at any time?</h3>
                <p className="text-gray-600">
                  Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next
                  billing cycle.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600">
                  We accept all major credit cards, bank transfers, and mobile money payments including MTN Mobile Money
                  and Airtel Money.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Is there a free trial available?</h3>
                <p className="text-gray-600">
                  Our Basic plan is free forever. For Professional and Enterprise plans, we offer a 14-day free trial.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How does the commission structure work?</h3>
                <p className="text-gray-600">
                  Commission is only charged on successfully completed jobs. The rate varies by plan: 5% for Basic, 3%
                  for Professional, and 1% for Enterprise.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
