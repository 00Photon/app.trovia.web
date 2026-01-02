"use client"

import type React from "react"
import { useState } from "react"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Grid, Home, MessageSquare, Settings, Star, User, Wallet, Shield, Briefcase } from "lucide-react"
import { useIsMobile } from "@/hooks/use-mobile"
import { AuthGuard } from "@/components/auth-guard"

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isMobile = useIsMobile()

  const [showVerificationModal, setShowVerificationModal] = useState(false)
  const [verificationStep, setVerificationStep] = useState<"phone" | "email" | "id">("phone")
  const [verificationData, setVerificationData] = useState({
    phone: "",
    email: "",
    verificationCode: "",
    idType: "passport",
    idNumber: "",
  })

  // Function to determine if a path is active
  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <AuthGuard>
      <div className="min-h-screen bg-gray-50">
        <Header />

        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden md:block w-full md:w-64 shrink-0">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center mb-6">
                    <div className="w-24 h-24 rounded-full bg-teal-100 mb-4 overflow-hidden">
                      <img
                        src="/placeholder.svg?height=96&width=96"
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-lg">John Doe</h3>
                    <p className="text-gray-500 text-sm">Client</p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="mt-2 border-yellow-400 text-yellow-600 hover:bg-yellow-50 text-xs"
                      onClick={() => setShowVerificationModal(true)}
                    >
                      <Shield className="w-3 h-3 mr-1" />
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2 animate-pulse"></span>
                      Verify Account
                    </Button>
                  </div>

                  <nav className="space-y-1">
                    <Link href="/account" passHref>
                      <Button
                        variant={isActive("/account") ? "default" : "ghost"}
                        className={`w-full justify-start ${isActive("/account") ? "bg-teal-600 hover:bg-teal-700" : ""}`}
                      >
                        <Home className="mr-2 h-4 w-4" />
                        Dashboard
                      </Button>
                    </Link>
                    <Link href="/account/jobs" passHref>
                      <Button
                        variant={isActive("/account/jobs") ? "default" : "ghost"}
                        className={`w-full justify-start ${isActive("/account/jobs") ? "bg-teal-600 hover:bg-teal-700" : ""}`}
                      >
                        <Grid className="mr-2 h-4 w-4" />
                        My Jobs
                      </Button>
                    </Link>
                    <Link href="/account/services" passHref>
                      <Button
                        variant={isActive("/account/services") ? "default" : "ghost"}
                        className={`w-full justify-start ${isActive("/account/services") ? "bg-teal-600 hover:bg-teal-700" : ""}`}
                      >
                        <Briefcase className="mr-2 h-4 w-4" />
                        My Services
                      </Button>
                    </Link>
                    <Link href="/account/messages" passHref>
                      <Button
                        variant={isActive("/account/messages") ? "default" : "ghost"}
                        className={`w-full justify-start ${isActive("/account/messages") ? "bg-teal-600 hover:bg-teal-700" : ""}`}
                      >
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Messages
                        <Badge className="ml-auto bg-yellow-400 text-gray-900">3</Badge>
                      </Button>
                    </Link>
                    <Link href="/account/bookings" passHref>
                      <Button
                        variant={isActive("/account/bookings") ? "default" : "ghost"}
                        className={`w-full justify-start ${isActive("/account/bookings") ? "bg-teal-600 hover:bg-teal-700" : ""}`}
                      >
                        <Calendar className="mr-2 h-4 w-4" />
                        Bookings
                      </Button>
                    </Link>
                    <Link href="/account/reviews" passHref>
                      <Button
                        variant={isActive("/account/reviews") ? "default" : "ghost"}
                        className={`w-full justify-start ${isActive("/account/reviews") ? "bg-teal-600 hover:bg-teal-700" : ""}`}
                      >
                        <Star className="mr-2 h-4 w-4" />
                        Reviews
                      </Button>
                    </Link>
                    <Link href="/account/wallet" passHref>
                      <Button
                        variant={isActive("/account/wallet") ? "default" : "ghost"}
                        className={`w-full justify-start ${isActive("/account/wallet") ? "bg-teal-600 hover:bg-teal-700" : ""}`}
                      >
                        <Wallet className="mr-2 h-4 w-4" />
                        Wallet
                      </Button>
                    </Link>
                    <Link href="/account/profile" passHref>
                      <Button
                        variant={isActive("/account/profile") ? "default" : "ghost"}
                        className={`w-full justify-start ${isActive("/account/profile") ? "bg-teal-600 hover:bg-teal-700" : ""}`}
                      >
                        <User className="mr-2 h-4 w-4" />
                        Profile
                      </Button>
                    </Link>
                    <Link href="/account/settings" passHref>
                      <Button
                        variant={isActive("/account/settings") ? "default" : "ghost"}
                        className={`w-full justify-start ${isActive("/account/settings") ? "bg-teal-600 hover:bg-teal-700" : ""}`}
                      >
                        <Settings className="mr-2 h-4 w-4" />
                        Settings
                      </Button>
                    </Link>
                  </nav>
                </CardContent>
              </Card>
            </aside>

            {/* Main Content */}
            <div className="flex-1 pb-20 md:pb-0">{children}</div>

            {/* Mobile Bottom Navigation */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
              <div
                className="overflow-x-auto flex scrollbar-hide"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                <Link href="/account" passHref>
                  <Button
                    variant="ghost"
                    className={`flex flex-col items-center justify-center h-16 min-w-[80px] text-xs ${
                      isActive("/account") ? "text-teal-600 bg-teal-50" : "text-gray-600"
                    }`}
                  >
                    <Home className="h-5 w-5 mb-1" />
                    Dashboard
                  </Button>
                </Link>
                <Link href="/account/jobs" passHref>
                  <Button
                    variant="ghost"
                    className={`flex flex-col items-center justify-center h-16 min-w-[80px] text-xs ${
                      isActive("/account/jobs") ? "text-teal-600 bg-teal-50" : "text-gray-600"
                    }`}
                  >
                    <Grid className="h-5 w-5 mb-1" />
                    Jobs
                  </Button>
                </Link>
                <Link href="/account/services" passHref>
                  <Button
                    variant="ghost"
                    className={`flex flex-col items-center justify-center h-16 min-w-[80px] text-xs ${
                      isActive("/account/services") ? "text-teal-600 bg-teal-50" : "text-gray-600"
                    }`}
                  >
                    <Briefcase className="h-5 w-5 mb-1" />
                    Services
                  </Button>
                </Link>
                <Link href="/account/messages" passHref>
                  <Button
                    variant="ghost"
                    className={`flex flex-col items-center justify-center h-16 min-w-[80px] text-xs relative ${
                      isActive("/account/messages") ? "text-teal-600 bg-teal-50" : "text-gray-600"
                    }`}
                  >
                    <MessageSquare className="h-5 w-5 mb-1" />
                    Messages
                    <div className="absolute top-2 right-3 bg-yellow-400 text-gray-900 text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      3
                    </div>
                  </Button>
                </Link>
                <Link href="/account/bookings" passHref>
                  <Button
                    variant="ghost"
                    className={`flex flex-col items-center justify-center h-16 min-w-[80px] text-xs ${
                      isActive("/account/bookings") ? "text-teal-600 bg-teal-50" : "text-gray-600"
                    }`}
                  >
                    <Calendar className="h-5 w-5 mb-1" />
                    Bookings
                  </Button>
                </Link>
                <Link href="/account/reviews" passHref>
                  <Button
                    variant="ghost"
                    className={`flex flex-col items-center justify-center h-16 min-w-[80px] text-xs ${
                      isActive("/account/reviews") ? "text-teal-600 bg-teal-50" : "text-gray-600"
                    }`}
                  >
                    <Star className="h-5 w-5 mb-1" />
                    Reviews
                  </Button>
                </Link>
                <Link href="/account/wallet" passHref>
                  <Button
                    variant="ghost"
                    className={`flex flex-col items-center justify-center h-16 min-w-[80px] text-xs ${
                      isActive("/account/wallet") ? "text-teal-600 bg-teal-50" : "text-gray-600"
                    }`}
                  >
                    <Wallet className="h-5 w-5 mb-1" />
                    Wallet
                  </Button>
                </Link>
                <Link href="/account/profile" passHref>
                  <Button
                    variant="ghost"
                    className={`flex flex-col items-center justify-center h-16 min-w-[80px] text-xs ${
                      isActive("/account/profile") ? "text-teal-600 bg-teal-50" : "text-gray-600"
                    }`}
                  >
                    <User className="h-5 w-5 mb-1" />
                    Profile
                  </Button>
                </Link>
                <Link href="/account/settings" passHref>
                  <Button
                    variant="ghost"
                    className={`flex flex-col items-center justify-center h-16 min-w-[80px] text-xs ${
                      isActive("/account/settings") ? "text-teal-600 bg-teal-50" : "text-gray-600"
                    }`}
                  >
                    <Settings className="h-5 w-5 mb-1" />
                    Settings
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </AuthGuard>
  )
}
