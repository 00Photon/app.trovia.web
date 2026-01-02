"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ArtisansPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Artisans Management</h1>
        <Button className="bg-teal-600 hover:bg-teal-700">Add New Artisan</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Artisans Management</CardTitle>
          <CardDescription>Manage all artisans on the platform</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Artisans content will be displayed here.</p>
        </CardContent>
      </Card>
    </div>
  )
}
