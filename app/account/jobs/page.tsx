"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Search, Filter, Plus } from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"

export default function JobsPage() {
  const [selectedJob, setSelectedJob] = useState<any>(null)
  const [isJobModalOpen, setIsJobModalOpen] = useState(false)
  const [modalType, setModalType] = useState<"details" | "message" | "review">("details")

  const handleViewDetails = (job: any) => {
    setSelectedJob(job)
    setModalType("details")
    setIsJobModalOpen(true)
  }

  const handleMessageArtisan = (job: any) => {
    setSelectedJob(job)
    setModalType("message")
    setIsJobModalOpen(true)
  }

  const handleLeaveReview = (job: any) => {
    setSelectedJob(job)
    setModalType("review")
    setIsJobModalOpen(true)
  }

  return (
    <div className="grid gap-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-teal-800">My Jobs</h1>
        <Button className="bg-teal-600 hover:bg-teal-700 text-white">
          <Plus className="h-4 w-4 mr-2" />
          Post New Job
        </Button>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Search jobs..." className="pl-10" />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center gap-2">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
              <select className="px-3 py-2 border border-gray-300 rounded-md text-sm">
                <option value="all">All Status</option>
                <option value="active">Active</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Jobs List */}
      <div className="grid gap-4">
        {[
          {
            id: 1,
            title: "Home Renovation",
            description: "Complete renovation of 3-bedroom apartment including painting, tiling, and electrical work",
            artisan: "Chidi Okafor",
            status: "In Progress",
            budget: "₦150,000",
            deadline: "June 15, 2025",
            progress: 65,
          },
          {
            id: 2,
            title: "Wedding Dress Design",
            description: "Custom wedding dress with intricate beadwork and embroidery",
            artisan: "Amaka Nwosu",
            status: "Completed",
            budget: "₦85,000",
            deadline: "May 30, 2025",
            progress: 100,
          },
          {
            id: 3,
            title: "Office Electrical Installation",
            description: "Complete electrical wiring for new office space including lighting and power outlets",
            artisan: "Samuel Udoakah",
            status: "In Progress",
            budget: "₦120,000",
            deadline: "June 20, 2025",
            progress: 40,
          },
          {
            id: 4,
            title: "Kitchen Cabinet Making",
            description: "Custom kitchen cabinets with modern design and soft-close hinges",
            artisan: "Ibrahim Musa",
            status: "Pending",
            budget: "₦200,000",
            deadline: "July 5, 2025",
            progress: 0,
          },
        ].map((job) => (
          <Card key={job.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{job.title}</CardTitle>
                  <CardDescription className="mt-1">{job.description}</CardDescription>
                </div>
                <Badge
                  className={
                    job.status === "Completed"
                      ? "bg-green-600"
                      : job.status === "In Progress"
                        ? "bg-blue-600"
                        : job.status === "Pending"
                          ? "bg-yellow-500"
                          : "bg-red-500"
                  }
                >
                  {job.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500">Artisan</p>
                  <p className="font-medium">{job.artisan}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Budget</p>
                  <p className="font-medium">{job.budget}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Deadline</p>
                  <p className="font-medium">{job.deadline}</p>
                </div>
              </div>

              {job.status === "In Progress" && (
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-1">
                    <span>Progress</span>
                    <span>{job.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-teal-600 h-2 rounded-full" style={{ width: `${job.progress}%` }}></div>
                  </div>
                </div>
              )}

              <div className="flex gap-2">
                <Button variant="outline" size="sm" onClick={() => handleViewDetails(job)}>
                  View Details
                </Button>
                <Button variant="outline" size="sm" onClick={() => handleMessageArtisan(job)}>
                  Message Artisan
                </Button>
                {job.status === "Completed" && (
                  <Button variant="outline" size="sm" onClick={() => handleLeaveReview(job)}>
                    Leave Review
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Job Modal */}
      <Dialog open={isJobModalOpen} onOpenChange={setIsJobModalOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>
              {modalType === "details" && "Job Details"}
              {modalType === "message" && "Message Artisan"}
              {modalType === "review" && "Leave Review"}
            </DialogTitle>
            <DialogDescription>
              {modalType === "details" && `Complete information about ${selectedJob?.title}`}
              {modalType === "message" && `Send a message to ${selectedJob?.artisan}`}
              {modalType === "review" && `Rate and review ${selectedJob?.artisan} for ${selectedJob?.title}`}
            </DialogDescription>
          </DialogHeader>

          {selectedJob && modalType === "details" && (
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg">{selectedJob.title}</h3>
                <p className="text-gray-600">{selectedJob.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">Artisan</label>
                  <p className="font-medium">{selectedJob.artisan}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Budget</label>
                  <p className="font-medium text-green-600">{selectedJob.budget}</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">Status</label>
                  <Badge
                    className={
                      selectedJob.status === "Completed"
                        ? "bg-green-600"
                        : selectedJob.status === "In Progress"
                          ? "bg-blue-600"
                          : selectedJob.status === "Pending"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                    }
                  >
                    {selectedJob.status}
                  </Badge>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Deadline</label>
                  <p>{selectedJob.deadline}</p>
                </div>
              </div>

              {selectedJob.status === "In Progress" && (
                <div>
                  <label className="text-sm font-medium text-gray-500">Progress</label>
                  <div className="mt-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{selectedJob.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-teal-600 h-2 rounded-full" style={{ width: `${selectedJob.progress}%` }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {selectedJob && modalType === "message" && (
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-500">To: {selectedJob.artisan}</label>
                <p className="text-sm text-gray-600">Regarding: {selectedJob.title}</p>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="Enter message subject" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  className="w-full p-3 border border-gray-300 rounded-md resize-none"
                  rows={4}
                  placeholder="Type your message here..."
                />
              </div>

              <div className="flex gap-2 pt-4">
                <Button className="bg-teal-600 hover:bg-teal-700 flex-1">Send Message</Button>
                <Button variant="outline" onClick={() => setIsJobModalOpen(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          )}

          {selectedJob && modalType === "review" && (
            <div className="space-y-4">
              <div>
                <h3 className="font-medium">Rate {selectedJob.artisan}</h3>
                <p className="text-sm text-gray-600">How was your experience with {selectedJob.title}?</p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium">Rating</label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button key={star} className="text-2xl text-gray-300 hover:text-yellow-400">
                      ⭐
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="reviewTitle" className="text-sm font-medium">
                  Review Title
                </label>
                <Input id="reviewTitle" placeholder="Summarize your experience" />
              </div>

              <div className="space-y-2">
                <label htmlFor="reviewText" className="text-sm font-medium">
                  Your Review
                </label>
                <textarea
                  id="reviewText"
                  className="w-full p-3 border border-gray-300 rounded-md resize-none"
                  rows={4}
                  placeholder="Share details about your experience..."
                />
              </div>

              <div className="flex gap-2 pt-4">
                <Button className="bg-teal-600 hover:bg-teal-700 flex-1">Submit Review</Button>
                <Button variant="outline" onClick={() => setIsJobModalOpen(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
