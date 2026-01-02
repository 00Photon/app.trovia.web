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
import { Textarea } from "@/components/ui/textarea"
import { Search, MoreHorizontal, Eye, Edit, CheckCircle, XCircle, AlertTriangle, Flag, Clock } from "lucide-react"
import { Label } from "@/components/ui/label"

export default function ReportsPage() {
  const [selectedReport, setSelectedReport] = useState<any>(null)
  const [isViewModalOpen, setIsViewModalOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")

  const reports = [
    {
      id: "RPT-001",
      title: "Inappropriate Product Content",
      reporter: "Aisha Mohammed",
      reportedUser: "John Doe",
      reportedItem: "Handwoven Kente Cloth",
      type: "Product",
      category: "Inappropriate Content",
      status: "Active",
      priority: "High",
      dateReported: "Jun 7, 2025",
      description:
        "Product contains inappropriate images and misleading descriptions that violate platform guidelines.",
      evidence: "Screenshots attached showing inappropriate content",
      adminNotes: "",
    },
    {
      id: "RPT-002",
      title: "Fraudulent Seller Activity",
      reporter: "David Adeyemi",
      reportedUser: "Fake Artisan",
      reportedItem: "Multiple Products",
      type: "User",
      category: "Fraud",
      status: "Under Investigation",
      priority: "Critical",
      dateReported: "Jun 6, 2025",
      description:
        "Seller is using fake credentials and selling counterfeit products. Multiple customers have complained.",
      evidence: "Customer complaints, fake credential documents",
      adminNotes: "Investigation started. Contacted verification team.",
    },
    {
      id: "RPT-003",
      title: "Payment Issue",
      reporter: "Blessing Okonkwo",
      reportedUser: "Chidi Okafor",
      reportedItem: "Home Renovation Job",
      type: "Transaction",
      category: "Payment Dispute",
      status: "Resolved",
      priority: "Medium",
      dateReported: "Jun 5, 2025",
      description: "Payment was deducted but service was not provided. Customer requesting refund.",
      evidence: "Payment receipts, communication logs",
      adminNotes: "Refund processed. Artisan warned about service delivery.",
    },
    {
      id: "RPT-004",
      title: "Harassment in Messages",
      reporter: "Elizabeth Nnamdi",
      reportedUser: "Aggressive Client",
      reportedItem: "Private Messages",
      type: "Behavior",
      category: "Harassment",
      status: "Active",
      priority: "High",
      dateReported: "Jun 4, 2025",
      description: "User is sending threatening and inappropriate messages to artisan.",
      evidence: "Message screenshots, conversation logs",
      adminNotes: "",
    },
    {
      id: "RPT-005",
      title: "Spam Product Listings",
      reporter: "Fatima Ibrahim",
      reportedUser: "Spam Account",
      reportedItem: "Multiple Listings",
      type: "Product",
      category: "Spam",
      status: "Resolved",
      priority: "Low",
      dateReported: "Jun 3, 2025",
      description: "User is posting duplicate and spam product listings repeatedly.",
      evidence: "List of duplicate products",
      adminNotes: "Account suspended. Spam listings removed.",
    },
    {
      id: "RPT-006",
      title: "Quality Issues",
      reporter: "Grace Adebayo",
      reportedUser: "Poor Quality Seller",
      reportedItem: "Wooden Furniture",
      type: "Product",
      category: "Quality",
      status: "Under Investigation",
      priority: "Medium",
      dateReported: "Jun 2, 2025",
      description: "Product received was of very poor quality compared to description and images.",
      evidence: "Product photos, comparison images",
      adminNotes: "Requested additional evidence from customer.",
    },
    {
      id: "RPT-007",
      title: "Fake Reviews",
      reporter: "System Alert",
      reportedUser: "Review Manipulator",
      reportedItem: "Product Reviews",
      type: "Review",
      category: "Fake Reviews",
      status: "Active",
      priority: "Medium",
      dateReported: "Jun 1, 2025",
      description: "Suspicious pattern of fake positive reviews detected by automated system.",
      evidence: "Review analysis report, IP tracking data",
      adminNotes: "",
    },
    {
      id: "RPT-008",
      title: "Copyright Infringement",
      reporter: "Original Designer",
      reportedUser: "Copy Cat Seller",
      reportedItem: "Fashion Design",
      type: "Product",
      category: "Copyright",
      status: "Escalated",
      priority: "High",
      dateReported: "May 30, 2025",
      description: "Seller is using copyrighted designs without permission from original creator.",
      evidence: "Original design documents, copyright certificates",
      adminNotes: "Escalated to legal team for review.",
    },
  ]

  const filteredReports = reports.filter((report) => {
    const matchesSearch =
      report.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.reporter.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.reportedUser.toLowerCase().includes(searchTerm.toLowerCase()) ||
      report.id.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || report.status.toLowerCase().replace(" ", "-") === statusFilter
    const matchesType = typeFilter === "all" || report.type.toLowerCase() === typeFilter

    return matchesSearch && matchesStatus && matchesType
  })

  const totalReports = reports.length
  const activeReports = reports.filter(
    (report) => report.status === "Active" || report.status === "Under Investigation" || report.status === "Escalated",
  ).length
  const resolvedReports = reports.filter((report) => report.status === "Resolved").length
  const criticalReports = reports.filter((report) => report.priority === "Critical").length

  const handleViewReport = (report: any) => {
    setSelectedReport(report)
    setIsViewModalOpen(true)
  }

  const handleStatusUpdate = (reportId: string, newStatus: string) => {
    console.log(`Updating report ${reportId} status to ${newStatus}`)
    // Handle status update logic here
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return <Badge className="bg-red-600">Active</Badge>
      case "Under Investigation":
        return <Badge className="bg-yellow-600">Under Investigation</Badge>
      case "Resolved":
        return <Badge className="bg-green-600">Resolved</Badge>
      case "Escalated":
        return <Badge className="bg-purple-600">Escalated</Badge>
      case "Dismissed":
        return <Badge className="bg-gray-500">Dismissed</Badge>
      default:
        return <Badge className="bg-gray-500">{status}</Badge>
    }
  }

  const getPriorityIcon = (priority: string) => {
    switch (priority) {
      case "Critical":
        return <AlertTriangle className="h-4 w-4 text-red-600" />
      case "High":
        return <Flag className="h-4 w-4 text-orange-500" />
      case "Medium":
        return <Clock className="h-4 w-4 text-yellow-500" />
      case "Low":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      default:
        return null
    }
  }

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Fraud":
        return "bg-red-100 text-red-800"
      case "Harassment":
        return "bg-purple-100 text-purple-800"
      case "Inappropriate Content":
        return "bg-orange-100 text-orange-800"
      case "Payment Dispute":
        return "bg-blue-100 text-blue-800"
      case "Spam":
        return "bg-gray-100 text-gray-800"
      case "Quality":
        return "bg-yellow-100 text-yellow-800"
      case "Fake Reviews":
        return "bg-pink-100 text-pink-800"
      case "Copyright":
        return "bg-indigo-100 text-indigo-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h1 className="text-2xl font-bold text-gray-900">Reports Management</h1>
        <Button className="bg-teal-600 hover:bg-teal-700 w-full sm:w-auto">Export Reports Data</Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 flex items-center">
              <Flag className="h-4 w-4 mr-2" />
              Total Reports
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-gray-900">{totalReports}</div>
            <p className="text-xs text-blue-600 mt-1">All time</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 flex items-center">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Active Reports
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-red-600">{activeReports}</div>
            <p className="text-xs text-red-600 mt-1">Needs attention</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" />
              Resolved Reports
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-green-600">{resolvedReports}</div>
            <p className="text-xs text-green-600 mt-1">Successfully handled</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-gray-500 flex items-center">
              <XCircle className="h-4 w-4 mr-2" />
              Critical Reports
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-purple-600">{criticalReports}</div>
            <p className="text-xs text-purple-600 mt-1">Urgent priority</p>
          </CardContent>
        </Card>
      </div>

      {/* Reports Table */}
      <Card>
        <CardHeader>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <CardTitle>All Reports</CardTitle>
              <CardDescription>Manage and monitor all reports on the platform</CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search reports..."
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
                  <SelectItem value="under-investigation">Under Investigation</SelectItem>
                  <SelectItem value="resolved">Resolved</SelectItem>
                  <SelectItem value="escalated">Escalated</SelectItem>
                  <SelectItem value="dismissed">Dismissed</SelectItem>
                </SelectContent>
              </Select>
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger className="w-full sm:w-[120px]">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="product">Product</SelectItem>
                  <SelectItem value="user">User</SelectItem>
                  <SelectItem value="transaction">Transaction</SelectItem>
                  <SelectItem value="behavior">Behavior</SelectItem>
                  <SelectItem value="review">Review</SelectItem>
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
                  <TableHead className="min-w-[100px]">Report ID</TableHead>
                  <TableHead className="min-w-[200px]">Title</TableHead>
                  <TableHead className="min-w-[120px]">Reporter</TableHead>
                  <TableHead className="min-w-[120px]">Reported User</TableHead>
                  <TableHead className="min-w-[100px]">Type</TableHead>
                  <TableHead className="min-w-[120px]">Category</TableHead>
                  <TableHead className="min-w-[100px]">Priority</TableHead>
                  <TableHead className="min-w-[120px]">Status</TableHead>
                  <TableHead className="min-w-[100px]">Date</TableHead>
                  <TableHead className="min-w-[80px]">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredReports.map((report) => (
                  <TableRow key={report.id}>
                    <TableCell className="font-mono text-sm">{report.id}</TableCell>
                    <TableCell className="font-medium">
                      <div className="max-w-[180px] truncate" title={report.title}>
                        {report.title}
                      </div>
                    </TableCell>
                    <TableCell className="truncate max-w-[100px]" title={report.reporter}>
                      {report.reporter}
                    </TableCell>
                    <TableCell className="truncate max-w-[100px]" title={report.reportedUser}>
                      {report.reportedUser}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-xs">
                        {report.type}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={`text-xs ${getCategoryColor(report.category)}`}>{report.category}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        {getPriorityIcon(report.priority)}
                        <span className="text-xs hidden sm:inline">{report.priority}</span>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(report.status)}</TableCell>
                    <TableCell className="text-xs">{report.dateReported}</TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" className="h-8 w-8 p-0">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuItem onClick={() => handleViewReport(report)}>
                            <Eye className="mr-2 h-4 w-4" />
                            View Details
                          </DropdownMenuItem>
                          <DropdownMenuItem>
                            <Edit className="mr-2 h-4 w-4" />
                            Add Notes
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuLabel>Update Status</DropdownMenuLabel>
                          <DropdownMenuItem onClick={() => handleStatusUpdate(report.id, "Under Investigation")}>
                            <Clock className="mr-2 h-4 w-4 text-yellow-600" />
                            Start Investigation
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleStatusUpdate(report.id, "Resolved")}>
                            <CheckCircle className="mr-2 h-4 w-4 text-green-600" />
                            Mark as Resolved
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleStatusUpdate(report.id, "Escalated")}>
                            <AlertTriangle className="mr-2 h-4 w-4 text-purple-600" />
                            Escalate Report
                          </DropdownMenuItem>
                          <DropdownMenuItem onClick={() => handleStatusUpdate(report.id, "Dismissed")}>
                            <XCircle className="mr-2 h-4 w-4 text-gray-600" />
                            Dismiss Report
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
              Showing {filteredReports.length} of {totalReports} reports
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

      {/* Report Details Modal */}
      <Dialog open={isViewModalOpen} onOpenChange={setIsViewModalOpen}>
        <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Report Details</DialogTitle>
            <DialogDescription>Complete information about {selectedReport?.title}</DialogDescription>
          </DialogHeader>
          {selectedReport && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium text-gray-500">Report ID</Label>
                  <p className="font-mono">{selectedReport.id}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-500">Status</Label>
                  <div className="mt-1">{getStatusBadge(selectedReport.status)}</div>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-500">Title</Label>
                <p className="font-medium text-lg">{selectedReport.title}</p>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-500">Description</Label>
                <p className="text-sm text-gray-700">{selectedReport.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label className="text-sm font-medium text-gray-500">Reporter</Label>
                  <p>{selectedReport.reporter}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-500">Reported User</Label>
                  <p>{selectedReport.reportedUser}</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label className="text-sm font-medium text-gray-500">Type</Label>
                  <p>{selectedReport.type}</p>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-500">Category</Label>
                  <Badge className={getCategoryColor(selectedReport.category)}>{selectedReport.category}</Badge>
                </div>
                <div>
                  <Label className="text-sm font-medium text-gray-500">Priority</Label>
                  <div className="flex items-center gap-1">
                    {getPriorityIcon(selectedReport.priority)}
                    <span>{selectedReport.priority}</span>
                  </div>
                </div>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-500">Reported Item</Label>
                <p>{selectedReport.reportedItem}</p>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-500">Evidence</Label>
                <p className="text-sm text-gray-700">{selectedReport.evidence}</p>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-500">Date Reported</Label>
                <p>{selectedReport.dateReported}</p>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-500">Admin Notes</Label>
                <Textarea
                  placeholder="Add admin notes..."
                  defaultValue={selectedReport.adminNotes}
                  className="mt-1"
                  rows={3}
                />
              </div>

              <div className="flex gap-2 pt-4">
                <Button className="bg-teal-600 hover:bg-teal-700">Update Notes</Button>
                <Button variant="outline">Contact Reporter</Button>
                <Button variant="outline">Contact Reported User</Button>
                <Button variant="outline" className="text-red-600 border-red-200 hover:bg-red-50">
                  Take Action
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
