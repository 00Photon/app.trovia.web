"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { AlertCircle, Bell, Download, Settings } from "lucide-react"

export default function AdminDashboardPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Settings className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">2,345</div>
            <p className="text-xs text-green-600 mt-1">+15% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Active Artisans</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">1,257</div>
            <p className="text-xs text-green-600 mt-1">+8% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total Projects</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">3,721</div>
            <p className="text-xs text-green-600 mt-1">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Revenue</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">₦4.2M</div>
            <p className="text-xs text-green-600 mt-1">+23% from last month</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions across the platform</CardDescription>
          </div>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[150px]">Event</TableHead>
                  <TableHead className="min-w-[120px]">User</TableHead>
                  <TableHead className="min-w-[120px]">Time</TableHead>
                  <TableHead className="min-w-[100px]">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {[
                  {
                    event: "New Registration",
                    user: "Chioma Eze",
                    time: "10 minutes ago",
                    status: "Completed",
                  },
                  { event: "Project Created", user: "Emeka Obi", time: "25 minutes ago", status: "Pending" },
                  {
                    event: "Payment Received",
                    user: "Fatima Ibrahim",
                    time: "1 hour ago",
                    status: "Completed",
                  },
                  {
                    event: "Artisan Verification",
                    user: "Tunde Bakare",
                    time: "2 hours ago",
                    status: "Pending",
                  },
                  { event: "Support Ticket", user: "Grace Adebayo", time: "3 hours ago", status: "Urgent" },
                ].map((activity, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">{activity.event}</TableCell>
                    <TableCell>{activity.user}</TableCell>
                    <TableCell className="text-sm text-gray-500">{activity.time}</TableCell>
                    <TableCell>
                      <Badge
                        className={
                          activity.status === "Completed"
                            ? "bg-green-600"
                            : activity.status === "Pending"
                              ? "bg-yellow-500"
                              : "bg-red-500"
                        }
                      >
                        {activity.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* System Alerts */}
      <Card>
        <CardHeader>
          <CardTitle>System Alerts</CardTitle>
          <CardDescription>Important notifications requiring attention</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex p-4 border border-yellow-200 bg-yellow-50 rounded-lg">
              <AlertCircle className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-yellow-800">Verification Queue</h3>
                <p className="text-sm text-yellow-700">
                  There are 15 artisans awaiting verification. Please review their applications.
                </p>
              </div>
            </div>
            <div className="flex p-4 border border-red-200 bg-red-50 rounded-lg">
              <AlertCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />
              <div>
                <h3 className="font-medium text-red-800">Payment System</h3>
                <p className="text-sm text-red-700">
                  Payment gateway reporting intermittent issues. Technical team has been notified.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
