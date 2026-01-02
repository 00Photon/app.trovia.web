"use client"

import type React from "react"

import { usePathname } from "next/navigation"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BarChart3, FileText, LayoutDashboard, LogOut, Settings, Shield, Users, Wallet } from "lucide-react"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  // Function to determine if a path is active
  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Admin Sidebar */}
          <aside className="w-full lg:w-64 shrink-0 lg:sticky lg:top-8 lg:h-fit">
            <Card className="bg-gray-900 text-white border-0">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <Shield className="h-8 w-8 text-yellow-400 mr-2" />
                  <h2 className="text-xl font-bold">Admin Panel</h2>
                </div>

                <nav className="space-y-1">
                  <Link href="/admin" passHref>
                    <Button
                      variant="ghost"
                      className={`w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800 ${
                        isActive("/admin") ? "bg-gray-800 text-white" : ""
                      }`}
                    >
                      <LayoutDashboard className="mr-2 h-4 w-4" />
                      Dashboard
                    </Button>
                  </Link>
                  <Link href="/admin/users" passHref>
                    <Button
                      variant="ghost"
                      className={`w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800 ${
                        isActive("/admin/users") ? "bg-gray-800 text-white" : ""
                      }`}
                    >
                      <Users className="mr-2 h-4 w-4" />
                      Users
                      <Badge className="ml-auto bg-teal-600">New</Badge>
                    </Button>
                  </Link>
                  <Link href="/admin/artisans" passHref>
                    <Button
                      variant="ghost"
                      className={`w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800 ${
                        isActive("/admin/artisans") ? "bg-gray-800 text-white" : ""
                      }`}
                    >
                      <Users className="mr-2 h-4 w-4" />
                      Artisans
                    </Button>
                  </Link>
                  <Link href="/admin/jobs" passHref>
                    <Button
                      variant="ghost"
                      className={`w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800 ${
                        isActive("/admin/jobs") ? "bg-gray-800 text-white" : ""
                      }`}
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      Jobs
                    </Button>
                  </Link>
                  <Link href="/admin/products" passHref>
                    <Button
                      variant="ghost"
                      className={`w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800 ${
                        isActive("/admin/products") ? "bg-gray-800 text-white" : ""
                      }`}
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      Products
                    </Button>
                  </Link>
                  <Link href="/admin/transactions" passHref>
                    <Button
                      variant="ghost"
                      className={`w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800 ${
                        isActive("/admin/transactions") ? "bg-gray-800 text-white" : ""
                      }`}
                    >
                      <Wallet className="mr-2 h-4 w-4" />
                      Transactions
                    </Button>
                  </Link>
                  <Link href="/admin/reports" passHref>
                    <Button
                      variant="ghost"
                      className={`w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800 ${
                        isActive("/admin/reports") ? "bg-gray-800 text-white" : ""
                      }`}
                    >
                      <BarChart3 className="mr-2 h-4 w-4" />
                      Reports
                    </Button>
                  </Link>
                  <Link href="/admin/settings" passHref>
                    <Button
                      variant="ghost"
                      className={`w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800 ${
                        isActive("/admin/settings") ? "bg-gray-800 text-white" : ""
                      }`}
                    >
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Button>
                  </Link>
                </nav>

                <div className="mt-8 pt-4 border-t border-gray-700">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-gray-300 hover:text-white hover:bg-gray-800"
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    Logout
                  </Button>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0">{children}</div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
