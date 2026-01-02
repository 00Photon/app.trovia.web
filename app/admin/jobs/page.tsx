"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Search, MoreHorizontal, Eye, Edit, CheckCircle, XCircle, Clock, AlertTriangle } from "lucide-react"
import { Label } from "@/components/ui/label"

export default function JobsPage() {
  const [selectedJob, setSelectedJob] = useState<any>(null)
  const [isViewModalOpen, setIsViewModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const jobs = [
    {
      id: "JOB-001",
      title: "Home Renovation Project",
      client: "Aisha Mohammed",
      artisan: "Chidi Okafor",
      category: "Construction",
      budget: "₦150,000",
      status: "Active",
      priority: "High",
      datePosted: "Jun 5, 2025",
      deadline: "Jun 20, 2025",
      description: "Complete renovation of 3-bedroom apartment including painting, tiling, and electrical work",
      location: "Lagos, Nigeria",
    },
    {
      id: "JOB-002",
      title: "Wedding Dress Design",
      client: "Blessing Okonkwo",
      artisan: "Amaka Nwosu",
      category: "Fashion",
      budget: "₦85,000",
      status: "Completed",
      priority: "Medium",
      datePosted: "May 28, 2025",
      deadline: "Jun 15, 2025",
      description: "Custom wedding dress with intricate beadwork and embroidery",
      location: "Abuja, Nigeria",
    },
    {
      id: "JOB-003",
      title: "Office Electrical Installation",
      client: "David Adeyemi",
      artisan: "Samuel Udoakah",
      category: "Electrical",
      budget: "₦120,000",
      status: "Pending",
      priority: "High",
      datePosted: "Jun 3, 2025",
      deadline: "Jun 18, 2025",
      description: "Complete electrical wiring for new office space including lighting and power outlets",
      location: "Port Harcourt, Nigeria",
    },
    {
      id: "JOB-004",
      title: "Kitchen Cabinet Making",
      client: "Elizabeth Nnamdi",
      artisan: "Ibrahim Musa",
      category: "Carpentry",
      budget: "₦200,000",
      status: "Active",
      priority: "Medium",
      datePosted: "Jun 1, 2025",
      deadline: "Jul 5, 2025",
      description: "Custom kitchen cabinets with modern design and soft-close hinges",
      location: "Kano, Nigeria",
    },
    {
      id: "JOB-005",
      title: "Garden Landscaping",
      client: "Fatima Ibrahim",
      artisan: "Unassigned",
      category: "Gardening",
      budget: "₦75,000",
      status: "Pending",
      priority: "Low",
      datePosted: "Jun 7, 2025",
      deadline: "Jun 25, 2025",
      description: "Complete garden makeover with new plants, pathways, and irrigation system",
      location: "Ibadan, Nigeria",
    },
    {
      id: "JOB-006",
      title: "Plumbing Repair",
      client: "Emeka Obi",
      artisan: "Tunde Bakare",
      category: "Plumbing",
      budget: "₦45,000",
      status: "Cancelled",
      priority: "High",
      datePosted: "May 30, 2025",
      deadline: "Jun 10, 2025",
      description: "Fix leaking pipes and install new bathroom fixtures",
      location: "Lagos, Nigeria",
    },
  ]

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.artisan.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.id.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || job.status.toLowerCase() === statusFilter.toLowerCase()

    return matchesSearch && matchesStatus
  })

  const totalJobs = jobs.length
  const activeJobs = jobs.filter((job) => job.status === "Active").length
  const pendingJobs = jobs.filter((job) => job.status === "Pending").length
  const completedJobs = jobs.filter((job) => job.status === "Completed").length

  const handleViewJob = (job: any) => {
    setSelectedJob(job)
    setIsViewModalOpen(true)
  }

  const handleStatusUpdate = (jobId: string, newStatus: string) => {
    console.log(`Updating job ${jobId} status to ${newStatus}`)
    // Handle status update logic here
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <Badge className="bg-blue-600">Active</Badge>
      case "Completed":
        return <Badge className="bg-green-600">Completed</Badge>
      case "Pending":
        return <Badge className="bg-yellow-500">Pending</Badge>
      case "Cancelled":
        return <Badge className="bg-red-500">Cancelled</Badge>
      default:
        return <Badge className="bg-gray-500">{status}</Badge>
    }
  }

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "High":
        return <AlertTriangle className="h-4 w-4 text-red-500" />
      case "Medium":
        return <Clock className="h-4 w-4 text-yellow-500" />
      case "Low":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      default:
        return null
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Jobs Management</h1>
        <Button className="bg-teal-600 hover:bg-teal-700 w-full sm:w-auto">Export Jobs Data</Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Total Jobs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">{totalJobs}</div>
            <p className="text-xs text-blue-600 mt-1">All time</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Active Jobs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-blue-600">{activeJobs}</div>
            <p className="text-xs text-green-600 mt-1">Currently in progress</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Pending Jobs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-yellow-600">{pendingJobs}</div>
            <p className="text-xs text-orange-600 mt-1">Awaiting assignment</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500">Completed Jobs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">{completedJobs}</div>
            <p className="text-xs text-green-600 mt-1">Successfully finished</p>
          </CardContent>
        </Card>
      </div>

      {/* Jobs Table */}
      <Card>
        <CardHeader>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <CardTitle>All Jobs</CardTitle>
              <CardDescription>Manage and monitor all jobs on the platform</CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search jobs..."
                  className="pl-9 w-full sm:w-48 lg:w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full sm:w-[140px]">
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="min-w-[100px]">Job ID</TableHead>
                  <TableHead className="min-w-[200px]">Title</TableHead>
                  <TableHead className="min-w-[120px]">Client</TableHead>
                  <TableHead className="min-w-[120px]">Artisan</TableHead>
                  <TableHead className="min-w-[100px]">Category</TableHead>
                  <TableHead className="min-w-[100px]">Budget</TableHead>
                  <TableHead className="min-w-[100px]">Status</TableHead>
                  <TableHead className="min-w-[100px]">Priority</TableHead>
                  <TableHead className="min-w-[100px]">Deadline</TableHead>
                  <TableHead className="min-w-[80px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredJobs.map((job) => (
                  <TableRow key={job.id}>
                    <TableCell className="font-mono text-sm">{job.id}</TableCell>
                    <TableCell className="font-medium">
                      <div className="max-w-[180px] truncate" title={job.title}>
                        {job.title}
                      </div>
                    </TableCell>
                    <TableCell className="truncate max-w-[100px]" title={job.client}>
                      {job.client}
                    </TableCell>
                    <TableCell className="truncate max-w-[100px]" title={job.artisan}>
                      {job.artisan}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-xs">
                        {job.category}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium text-sm">{job.budget}</TableCell>
                    <TableCell>{getStatusBadge(job.status)}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        {getPriorityIcon(job.priority)}
                        <span className="text-xs hidden sm:inline">{job.priority}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-xs">{job.deadline}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem onClick={() => handleViewJob(job)}>
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Edit Job
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuLabel>Update Status</DropdownMenuLabel>
                          <DropdownMenuItem onClick={() => handleStatusUpdate(job.id, "Active")}>
                            <CheckCircle className="mr-2 h-4 w-4 text-blue-600" />
                            Mark as Active
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleStatusUpdate(job.id, "Completed")}>
                            <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                            Mark as Completed
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleStatusUpdate(job.id, "Cancelled")}>
                            <XCircle className="mr-2 h-4 w-4 text-red-600" />
                            Cancel Job
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4">
            <p className="text-sm text-gray-500">
              Showing {filteredJobs.length} of {totalJobs} jobs
            </p>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" disabled>
                Previous
              </Button>
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Job Details Modal */}
      <Dialog open={isViewModalOpen} onOpenChange={setIsViewModalOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Job Details</DialogTitle>
            <DialogDescription>Complete information about {selectedJob?.title}</DialogDescription>
          </DialogHeader>
          {selectedJob && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium text-gray-500">Job ID</Label>
                  <p className="font-mono">{selectedJob.id}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-500">Status</Label>
                  <div className="mt-1">{getStatusBadge(selectedJob.status)}</div>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-500">Title</Label>
                <p className="font-medium">{selectedJob.title}</p>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-500">Description</Label>
                <p className="text-sm text-gray-700">{selectedJob.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium text-gray-500">Client</Label>
                  <p>{selectedJob.client}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-500">Artisan</Label>
                  <p>{selectedJob.artisan}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium text-gray-500">Budget</Label>
                  <p className="font-medium text-green-600">{selectedJob.budget}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-500">Category</Label>
                  <p>{selectedJob.category}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium text-gray-500">Date Posted</Label>
                  <p>{selectedJob.datePosted}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-500">Deadline</Label>
                  <p>{selectedJob.deadline}</p>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-500">Location</Label>
                <p>{selectedJob.location}</p>
              </div>

              <div className="flex gap-2 pt-4">
                <Button className="bg-teal-600 hover:bg-teal-700">Edit Job</Button>
                <Button variant="outline">Contact Client</Button>
                <Button variant="outline">Contact Artisan</Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
