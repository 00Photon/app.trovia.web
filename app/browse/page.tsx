"use client";

import { useState } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ArtisanProfileCard } from "@/components/artisan-profile-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter, SlidersHorizontal } from "lucide-react";

// Mock data for artisans
const artisans = [
  {
    id: "1",
    name: "Ikenna Kenneth",
    profession: "Fashion Designer",
    location: "Agege",
    rating: 4.8,
    image:
      "https://cdn.pixabay.com/photo/2017/08/06/12/06/people-2591874_1280.jpg",
    isTopRated: true,
    category: "fashion",
  },
  {
    id: "2",
    name: "Susana Elijah",
    profession: "Hospitality Expert",
    location: "Lagos",
    rating: 4.5,
    image:
      "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083383_1280.jpg",
    isTopRated: true,
    category: "hospitality",
  },
  {
    id: "3",
    name: "Samuel Udoakah",
    profession: "Sales and Marketing Expert",
    location: "Port Harcourt",
    rating: 4.7,
    image:
      "https://cdn.pixabay.com/photo/2017/09/07/08/54/money-2724241_1280.jpg",
    isTopRated: true,
    category: "marketing",
  },
  {
    id: "4",
    name: "Amaka Nwosu",
    profession: "Fashion Designer",
    location: "Lagos",
    rating: 4.9,
    image:
      "https://cdn.pixabay.com/photo/2016/11/29/06/15/adult-1867618_1280.jpg",
    isTopRated: true,
    category: "fashion",
  },
  {
    id: "5",
    name: "Chidi Okafor",
    profession: "Carpenter",
    location: "Abuja",
    rating: 4.6,
    image:
      "https://cdn.pixabay.com/photo/2017/08/10/08/47/wood-2619773_1280.jpg",
    isTopRated: true,
    category: "construction",
  },
  {
    id: "6",
    name: "Fatima Abdullahi",
    profession: "Tailor",
    location: "Kano",
    rating: 4.8,
    image:
      "https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg",
    isTopRated: true,
    category: "fashion",
  },
];

const categories = [
  { value: "all", label: "All Categories" },
  { value: "fashion", label: "Fashion & Design" },
  { value: "construction", label: "Construction & Repair" },
  { value: "hospitality", label: "Hospitality & Service" },
  { value: "marketing", label: "Marketing & Sales" },
  { value: "technology", label: "Technology & IT" },
  { value: "beauty", label: "Beauty & Wellness" },
];

const locations = [
  { value: "all", label: "All Locations" },
  { value: "lagos", label: "Lagos" },
  { value: "abuja", label: "Abuja" },
  { value: "port-harcourt", label: "Port Harcourt" },
  { value: "kano", label: "Kano" },
  { value: "ibadan", label: "Ibadan" },
  { value: "agege", label: "Agege" },
];

const sortOptions = [
  { value: "rating", label: "Sort by: Rating" },
  { value: "name", label: "Sort by: Name" },
  { value: "location", label: "Sort by: Location" },
  { value: "newest", label: "Sort by: Newest" },
];

export default function ArtisansPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [sortBy, setSortBy] = useState("rating");
  const [skillSearch, setSkillSearch] = useState("");

  const filteredArtisans = artisans.filter((artisan) => {
    const matchesSearch =
      artisan.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      artisan.profession.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || artisan.category === selectedCategory;
    const matchesLocation =
      selectedLocation === "all" ||
      artisan.location.toLowerCase().includes(selectedLocation.toLowerCase());
    const matchesSkill = artisan.profession
      .toLowerCase()
      .includes(skillSearch.toLowerCase());

    return matchesSearch && matchesCategory && matchesLocation && matchesSkill;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="flex items-center justify-between mb-12">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-teal-800 mb-4">
              Our Signature Artisans
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Connect with skilled craftsmen and creative experts to bring your
              vision to life with passion and precision.
            </p>
          </div>
          <div className="flex-shrink-0 ml-8">
            <Button
              onClick={() => (window.location.href = "/login")}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-6 py-3"
            >
              List your service
            </Button>
          </div>
        </div>

        {/* Filters Section */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <Select
              value={selectedCategory}
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger className="bg-gray-50">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category.value} value={category.value}>
                    {category.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select
              value={selectedLocation}
              onValueChange={setSelectedLocation}
            >
              <SelectTrigger className="bg-gray-50">
                <SelectValue placeholder="Select Location" />
              </SelectTrigger>
              <SelectContent>
                {locations.map((location) => (
                  <SelectItem key={location.value} value={location.value}>
                    {location.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Input
              placeholder="Search by skill..."
              value={skillSearch}
              onChange={(e) => setSkillSearch(e.target.value)}
              className="bg-gray-50"
            />

            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="bg-gray-50">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                {sortOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Input
                placeholder="Search artisans by name or title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-gray-50"
              />
            </div>
            <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-8">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </div>

        {/* Results Section */}
        {/* <div className="mb-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-teal-800">
              Featured Artisans
              <span className="text-lg font-normal text-gray-600 ml-2">
                ({filteredArtisans.length} found)
              </span>
            </h2>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                More Filters
              </Button>
              <Button variant="outline" size="sm">
                <SlidersHorizontal className="h-4 w-4 mr-2" />
                View Options
              </Button>
            </div>
          </div>
        </div> */}

        {/* Featured Artisans - Scrollable */}
        {/* <div className="mb-8">
          <div
            className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {filteredArtisans.slice(0, 6).map((artisan) => (
              <div key={artisan.id} className="flex-shrink-0 w-72">
                <ArtisanProfileCard
                  id={artisan.id}
                  name={artisan.name}
                  profession={artisan.profession}
                  location={artisan.location}
                  rating={artisan.rating}
                  image={artisan.image}
                  isTopRated={artisan.isTopRated}
                />
              </div>
            ))}
          </div>
        </div> */}

        {/* Latest Artisans Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-teal-800 mb-6">
            Popular Artisans
          </h2>
        </div>

        {/* Latest Artisans Grid */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredArtisans.map((artisan) => (
            <ArtisanProfileCard
              key={artisan.id}
              id={artisan.id}
              name={artisan.name}
              profession={artisan.profession}
              location={artisan.location}
              rating={artisan.rating}
              image={artisan.image}
              isTopRated={artisan.isTopRated}
            />
          ))}
        </div> */}

        {/* Load More Section */}
        {/* <div className="text-center">
          <Button
            variant="outline"
            className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white px-8 py-3"
          >
            Load More Artisans
          </Button>
        </div> */}

        <div className="flex flex-col items-center justify-center py-12 text-center text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 mb-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.75 17L12 19.25 14.25 17M4 4h16v10H4V4z"
            />
          </svg>
          <h3 className="text-lg font-medium">No artisans available</h3>
          <p className="text-sm mt-2">Check back later</p>
        </div>
        {/* CTA Section */}
        <div className="bg-teal-700 rounded-2xl p-8 mt-16 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h3>
          <p className="text-teal-100 mb-6 max-w-2xl mx-auto">
            Post your job requirements and let skilled artisans come to you. Get
            custom proposals tailored to your specific needs.
          </p>
          <Button className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-medium px-8 py-3">
            Post a Job
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
}
