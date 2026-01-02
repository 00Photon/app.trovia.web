import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Skeleton } from "@/components/ui/skeleton"

export default function PricingLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main>
        {/* Hero Section Skeleton */}
        <section className="bg-gradient-to-br from-teal-600 to-teal-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <Skeleton className="h-12 w-96 mx-auto mb-6 bg-teal-500" />
            <Skeleton className="h-6 w-128 mx-auto mb-8 bg-teal-500" />
          </div>
        </section>

        {/* Pricing Cards Skeleton */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-lg border p-6">
                  <div className="text-center pb-8">
                    <Skeleton className="w-16 h-16 rounded-full mx-auto mb-4" />
                    <Skeleton className="h-8 w-24 mx-auto mb-4" />
                    <Skeleton className="h-12 w-32 mx-auto mb-2" />
                    <Skeleton className="h-4 w-40 mx-auto" />
                  </div>
                  <div className="space-y-3">
                    {[1, 2, 3, 4, 5].map((j) => (
                      <div key={j} className="flex items-center gap-3">
                        <Skeleton className="h-5 w-5 rounded" />
                        <Skeleton className="h-4 flex-1" />
                      </div>
                    ))}
                  </div>
                  <Skeleton className="h-10 w-full mt-8" />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
