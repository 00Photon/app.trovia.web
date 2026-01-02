"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Search,
  MapPin,
  Clock,
  DollarSign,
  User,
  Calendar,
  Filter,
  Grid,
  List,
  Eye,
  MessageCircle,
  Send,
} from "lucide-react";

// Mock data for jobs
const mockJobs = [
  {
    id: 1,
    title: "Modern Kitchen Renovation",
    description:
      "Looking for experienced contractors to renovate a 200 sq ft kitchen. Need complete overhaul including cabinets, countertops, and appliances installation.",
    category: "Construction & Renovation",
    budget: "₦500,000 - ₦800,000",
    location: "Lagos, Nigeria",
    postedBy: "Sarah Johnson",
    postedDate: "2024-01-15",
    deadline: "2024-02-15",
    status: "Open",
    applicants: 12,
    isUrgent: true,
    skills: ["Carpentry", "Plumbing", "Electrical"],
    duration: "3-4 weeks",
  },
  {
    id: 2,
    title: "Wedding Photography Package",
    description:
      "Seeking professional photographer for wedding ceremony and reception. Must have portfolio of previous wedding work and own equipment.",
    category: "Photography & Videography",
    budget: "₦150,000 - ₦250,000",
    location: "Abuja, Nigeria",
    postedBy: "Michael Adebayo",
    postedDate: "2024-01-14",
    deadline: "2024-01-30",
    status: "Open",
    applicants: 8,
    isUrgent: false,
    skills: ["Wedding Photography", "Photo Editing", "Videography"],
    duration: "1 day + editing",
  },
  {
    id: 3,
    title: "Custom Furniture Design",
    description:
      "Need skilled carpenter to design and build custom dining table and chairs for 8 people. Modern design with quality wood materials.",
    category: "Carpentry & Woodwork",
    budget: "₦200,000 - ₦350,000",
    location: "Port Harcourt, Nigeria",
    postedBy: "Grace Okafor",
    postedDate: "2024-01-13",
    deadline: "2024-02-28",
    status: "Open",
    applicants: 15,
    isUrgent: false,
    skills: ["Furniture Design", "Woodworking", "Custom Carpentry"],
    duration: "2-3 weeks",
  },
  {
    id: 4,
    title: "Electrical Wiring Installation",
    description:
      "Complete electrical wiring for new 3-bedroom apartment. Must be licensed electrician with experience in residential wiring.",
    category: "Electrical Work",
    budget: "₦300,000 - ₦450,000",
    location: "Kano, Nigeria",
    postedBy: "Ahmed Hassan",
    postedDate: "2024-01-12",
    deadline: "2024-02-10",
    status: "Open",
    applicants: 6,
    isUrgent: true,
    skills: ["Electrical Installation", "Wiring", "Safety Compliance"],
    duration: "1-2 weeks",
  },
  {
    id: 5,
    title: "Logo Design & Branding",
    description:
      "Startup company needs professional logo design and complete brand identity package including business cards and letterhead.",
    category: "Graphic Design",
    budget: "₦50,000 - ₦100,000",
    location: "Remote",
    postedBy: "David Okonkwo",
    postedDate: "2024-01-11",
    deadline: "2024-01-25",
    status: "Open",
    applicants: 23,
    isUrgent: false,
    skills: ["Logo Design", "Brand Identity", "Adobe Creative Suite"],
    duration: "1-2 weeks",
  },
  {
    id: 6,
    title: "Plumbing System Repair",
    description:
      "Fix leaking pipes and install new bathroom fixtures. Experience with modern plumbing systems required.",
    category: "Plumbing",
    budget: "₦80,000 - ₦150,000",
    location: "Ibadan, Nigeria",
    postedBy: "Funmi Adeyemi",
    postedDate: "2024-01-10",
    deadline: "2024-01-20",
    status: "Open",
    applicants: 9,
    isUrgent: true,
    skills: ["Pipe Repair", "Fixture Installation", "Leak Detection"],
    duration: "3-5 days",
  },
];

const categories = [
  "All Categories",
  "Construction & Renovation",
  "Photography & Videography",
  "Carpentry & Woodwork",
  "Electrical Work",
  "Graphic Design",
  "Plumbing",
  "Beauty & Wellness",
  "Technology & IT",
  "Tutoring & Education",
];

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedJob, setSelectedJob] = useState<any>(null);
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [applicationMessage, setApplicationMessage] = useState("");
  const [contactMessage, setContactMessage] = useState("");

  const filteredJobs = mockJobs.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    const matchesCategory =
      selectedCategory === "All Categories" ||
      job.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const sortedJobs = [...filteredJobs].sort((a, b) => {
    switch (sortBy) {
      case "newest":
        return (
          new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime()
        );
      case "budget-high":
        return (
          Number.parseInt(b.budget.split(" - ")[1].replace(/[₦,]/g, "")) -
          Number.parseInt(a.budget.split(" - ")[1].replace(/[₦,]/g, ""))
        );
      case "budget-low":
        return (
          Number.parseInt(a.budget.split(" - ")[0].replace(/[₦,]/g, "")) -
          Number.parseInt(b.budget.split(" - ")[0].replace(/[₦,]/g, ""))
        );
      case "deadline":
        return new Date(a.deadline).getTime() - new Date(b.deadline).getTime();
      default:
        return 0;
    }
  });

  const handleApply = () => {
    // Handle job application logic
    console.log(
      "Applying to job:",
      selectedJob?.id,
      "Message:",
      applicationMessage,
    );
    setIsApplyModalOpen(false);
    setApplicationMessage("");
    alert("Application submitted successfully!");
  };

  const handleContact = () => {
    // Handle contact logic
    console.log(
      "Contacting job poster:",
      selectedJob?.postedBy,
      "Message:",
      contactMessage,
    );
    setIsContactModalOpen(false);
    setContactMessage("");
    alert("Message sent successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-teal-600 to-teal-800 rounded-2xl p-8 mb-8 text-white">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Your Next Project
            </h1>
            <p className="text-xl mb-6 text-teal-100">
              Browse thousands of jobs posted by clients looking for skilled
              artisans like you
            </p>

            {/* Search Bar */}
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  placeholder="Search jobs, skills, or keywords..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-white text-gray-900"
                />
              </div>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-8">
                Search Jobs
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-teal-600 mb-2">
                {mockJobs.length}
              </div>
              <div className="text-gray-600">Active Jobs</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">
                {mockJobs.reduce((sum, job) => sum + job.applicants, 0)}
              </div>
              <div className="text-gray-600">Total Applications</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {categories.length - 1}
              </div>
              <div className="text-gray-600">Categories</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">
                {mockJobs.filter((job) => job.isUrgent).length}
              </div>
              <div className="text-gray-600">Urgent Jobs</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Controls */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div className="flex flex-wrap gap-4">
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="w-48">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="budget-high">Highest Budget</SelectItem>
                <SelectItem value="budget-low">Lowest Budget</SelectItem>
                <SelectItem value="deadline">Deadline Soon</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">
              {sortedJobs.length} jobs found
            </span>
            <div className="flex border rounded-lg">
              <Button
                variant={viewMode === "grid" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("grid")}
                className="rounded-r-none"
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("list")}
                className="rounded-l-none"
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Jobs Grid/List */}
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              : "space-y-4"
          }
        >
          {sortedJobs.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant={job.isUrgent ? "destructive" : "secondary"}>
                    {job.isUrgent ? "Urgent" : job.status}
                  </Badge>
                  <span className="text-sm text-gray-500">
                    {job.applicants} applicants
                  </span>
                </div>
                <CardTitle className="text-lg">{job.title}</CardTitle>
                <Badge variant="outline" className="w-fit">
                  {job.category}
                </Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {job.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <DollarSign className="h-4 w-4 mr-2" />
                    {job.budget}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    {job.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    Deadline: {new Date(job.deadline).toLocaleDateString()}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {job.skills.slice(0, 3).map((skill, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                  {job.skills.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{job.skills.length - 3} more
                    </Badge>
                  )}
                </div>

                <div className="flex gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => setSelectedJob(job)}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>{job.title}</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div className="flex gap-2">
                          <Badge
                            variant={job.isUrgent ? "destructive" : "secondary"}
                          >
                            {job.isUrgent ? "Urgent" : job.status}
                          </Badge>
                          <Badge variant="outline">{job.category}</Badge>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Description</h4>
                          <p className="text-gray-600">{job.description}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <h4 className="font-semibold mb-2">Budget</h4>
                            <p className="text-green-600 font-medium">
                              {job.budget}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Duration</h4>
                            <p>{job.duration}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Location</h4>
                            <p>{job.location}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Deadline</h4>
                            <p>{new Date(job.deadline).toLocaleDateString()}</p>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">
                            Required Skills
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {job.skills.map((skill, index) => (
                              <Badge key={index} variant="secondary">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Posted By</h4>
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4" />
                            <span>{job.postedBy}</span>
                            <span className="text-gray-500">
                              • {new Date(job.postedDate).toLocaleDateString()}
                            </span>
                          </div>
                        </div>

                        <div className="flex gap-2 pt-4">
                          {/* <Button
                            className="flex-1 bg-teal-600 hover:bg-teal-700"
                            onClick={() => setIsApplyModalOpen(true)}
                          >
                            Apply for Job
                          </Button> */}
                          <Button
                            variant="outline"
                            className="flex-1"
                            disabled={true}
                            onClick={() => setIsContactModalOpen(true)}
                          >
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Contact Poster
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {sortedJobs.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search className="h-16 w-16 mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No jobs found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search criteria or browse all categories
            </p>
          </div>
        )}
      </main>

      {/* Apply Modal */}
      <Dialog open={isApplyModalOpen} onOpenChange={setIsApplyModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Apply for Job</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Job: {selectedJob?.title}</h4>
              <p className="text-sm text-gray-600">
                Posted by {selectedJob?.postedBy}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Application Message
              </label>
              <Textarea
                placeholder="Tell the client why you're the perfect fit for this job..."
                value={applicationMessage}
                onChange={(e) => setApplicationMessage(e.target.value)}
                rows={4}
              />
            </div>
            <div className="flex gap-2">
              <Button
                onClick={handleApply}
                disabled={!applicationMessage.trim()}
                className="flex-1 bg-teal-600 hover:bg-teal-700"
              >
                <Send className="h-4 w-4 mr-2" />
                Submit Application
              </Button>
              <Button
                variant="outline"
                onClick={() => setIsApplyModalOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Contact Modal */}
      <Dialog open={isContactModalOpen} onOpenChange={setIsContactModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Contact Job Poster</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">
                Contacting: {selectedJob?.postedBy}
              </h4>
              <p className="text-sm text-gray-600">Job: {selectedJob?.title}</p>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">
                Your Message
              </label>
              <Textarea
                placeholder="Ask questions about the job requirements, timeline, or any other details..."
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                rows={4}
              />
            </div>
            <div className="flex gap-2">
              <Button
                onClick={handleContact}
                disabled={!contactMessage.trim()}
                className="flex-1"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
              <Button
                variant="outline"
                onClick={() => setIsContactModalOpen(false)}
              >
                Cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
