"use client";

import { useState, useMemo, useCallback } from "react";
import { Search, Filter, ShoppingBag, Star, Grid3X3, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

// Example of realistic mock data
const products = [
  {
    id: 1,
    name: "Minimalist Walnut Desk",
    category: "Furniture",
    price: 45000,
    rating: 4.8,
    reviews: 67,
    image: "https://source.unsplash.com/random/400x400?desk",
    seller: "Artisan Furnishings",
    location: "Lagos",
    isNew: true,
  },
  {
    id: 2,
    name: "African Print Maxi Dress",
    category: "Fashion",
    price: 18000,
    rating: 4.6,
    reviews: 34,
    image: "https://source.unsplash.com/random/400x400?dress",
    seller: "Cultural Couture",
    location: "Abuja",
    isNew: false,
  },
  {
    id: 3,
    name: "Handcrafted Leather Sandals",
    category: "Footwear",
    price: 9500,
    rating: 4.7,
    reviews: 22,
    image: "https://source.unsplash.com/random/400x400?leather-shoes",
    seller: "Shoe Artisans",
    location: "Ibadan",
    isNew: true,
  },
  {
    id: 4,
    name: "Gold Beaded Necklace",
    category: "Jewelry",
    price: 25000,
    rating: 4.9,
    reviews: 18,
    image: "https://source.unsplash.com/random/400x400?jewelry",
    seller: "Elegant Adornments",
    location: "Aba",
    isNew: false,
  },
  {
    id: 5,
    name: "Woven Rattan Basket (Large)",
    category: "Home Decor",
    price: 12000,
    rating: 4.5,
    reviews: 40,
    image: "https://source.unsplash.com/random/400x400?basket",
    seller: "Home Essentials",
    location: "Kano",
    isNew: false,
  },
  {
    id: 6,
    name: "Organic Shea Butter 1kg",
    category: "Beauty",
    price: 5500,
    rating: 4.8,
    reviews: 52,
    image: "https://source.unsplash.com/random/400x400?shea-butter",
    seller: "Pure Naturals",
    location: "Jos",
    isNew: true,
  },
  {
    id: 7,
    name: "Canvas Art: Lagos Skyline",
    category: "Art",
    price: 55000,
    rating: 5.0,
    reviews: 14,
    image: "https://source.unsplash.com/random/400x400?art",
    seller: "Creative Gallery",
    location: "Lagos",
    isNew: true,
  },
  {
    id: 8,
    name: "Handcrafted Wooden Toys",
    category: "Toys",
    price: 8000,
    rating: 4.4,
    reviews: 27,
    image: "https://source.unsplash.com/random/400x400?toy",
    seller: "Kids Creations",
    location: "Enugu",
    isNew: false,
  },
];

const categories = [
  "All Categories",
  "Furniture",
  "Fashion",
  "Footwear",
  "Jewelry",
  "Home Decor",
  "Beauty",
  "Art",
  "Toys",
];

const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  }).format(price);

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesQuery =
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.seller.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        category === "All Categories" || p.category === category;
      return matchesQuery && matchesCategory;
    });
  }, [searchQuery, category]);

  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "newest":
        default:
          return a.isNew === b.isNew ? 0 : a.isNew ? -1 : 1;
      }
    });
  }, [filtered, sortBy]);

  const clearFilters = useCallback(() => {
    setSearchQuery("");
    setCategory("All Categories");
  }, []);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50">
        {/* Hero */}
        <section className="bg-teal-700 text-white py-12">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">
                Trovia Marketplace
              </h1>
              <p className="text-teal-100 mt-2">
                Explore curated handmade products by top artisans nationwide.
              </p>
            </div>
            <div className="relative w-full md:w-80">
              <Input
                type="search"
                placeholder="Search products or sellers..."
                className="pl-10 pr-4 py-2 w-full bg-white rounded-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
            <div className="flex flex-wrap gap-4">
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="w-48 bg-white">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>
                      {cat}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="bg-white">
                    <Filter className="mr-2" />
                    More Filters
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Location</DropdownMenuItem>
                  <DropdownMenuItem>Top Sellers</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex items-center gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48 bg-white">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Top Rated</SelectItem>
                </SelectContent>
              </Select>
              <div className="hidden md:flex items-center border rounded-md bg-white p-1">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="icon"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid3X3 />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="icon"
                  onClick={() => setViewMode("list")}
                >
                  <List />
                </Button>
              </div>
            </div>
          </div>

          <div className="text-gray-600 mb-6">
            {`${sorted.length} item${sorted.length !== 1 ? "s" : ""}`}{" "}
            {category !== "All Categories" && `in ${category}`}{" "}
            {searchQuery && `for "${searchQuery}"`}
          </div>

          {/* Listing */}
          {sorted.length ? (
            viewMode === "grid" ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {sorted.map((p) => (
                  <Card key={p.id} className="hover:shadow-lg">
                    <div className="relative h-48 bg-gray-100">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover"
                      />
                      {p.isNew && (
                        <Badge className="absolute top-2 right-2 bg-yellow-500 text-black">
                          New
                        </Badge>
                      )}
                    </div>
                    <CardContent>
                      <h3 className="font-semibold text-lg line-clamp-2">
                        {p.name}
                      </h3>
                      <p className="text-sm text-gray-500">{p.category}</p>
                      <div className="flex items-center mt-1 mb-2">
                        <Star className="text-yellow-500" />
                        <span className="ml-1 text-sm font-medium">
                          {p.rating}
                        </span>
                        <span className="ml-1 text-xs text-gray-500">
                          ({p.reviews})
                        </span>
                      </div>
                      <p className="font-bold text-teal-700">
                        {formatPrice(p.price)}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        By {p.seller} • {p.location}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        View Details
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {sorted.map((p) => (
                  <Card
                    key={p.id}
                    className="hover:shadow-lg flex flex-col sm:flex-row"
                  >
                    <div className="relative h-48 sm:w-48 bg-gray-100">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover"
                      />
                      {p.isNew && (
                        <Badge className="absolute top-2 right-2 bg-yellow-500 text-black">
                          New
                        </Badge>
                      )}
                    </div>
                    <div className="p-4 flex-1">
                      <div className="flex justify-between">
                        <h3 className="font-semibold text-lg">{p.name}</h3>
                        <p className="font-bold text-teal-700">
                          {formatPrice(p.price)}
                        </p>
                      </div>
                      <p className="text-sm text-gray-500 my-1">{p.category}</p>
                      <div className="flex items-center mb-2">
                        <Star className="text-yellow-500" />
                        <span className="ml-1">{p.rating}</span>
                        <span className="ml-1 text-xs text-gray-500">
                          ({p.reviews})
                        </span>
                      </div>
                      <p className="mb-4 text-gray-600 line-clamp-2">
                        Handmade product by {p.seller} in {p.location}.
                      </p>
                      <div className="flex justify-between items-center">
                        <p className="text-sm text-gray-500">
                          {p.seller} • {p.location}
                        </p>
                        <Button variant="outline">View Details</Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            )
          ) : (
            <div className="text-center py-12">
              <ShoppingBag className="h-12 w-12 mx-auto text-gray-400" />
              <h3 className="mt-4 text-lg font-semibold">No results found</h3>
              <p className="text-gray-500 mt-2">
                Try adjusting your search or filters.
              </p>
              <Button className="mt-4" onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
