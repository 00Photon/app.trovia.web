"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, MapPin, User as UserIcon, LogOut, LayoutDashboard } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { useAuth } from "@/providers/auth-provider";
import { useProfileStore } from "@/store/profile-store";
import { UserDropdownMenu } from "@/components/user/user-dropdown-menu";
import { Image } from "lucide-react";

const NAV_ITEMS = [
  { label: "Browse Artisans", href: "/browse" },
  { label: "Find Jobs", href: "/jobs" },
  { label: "Marketplace", href: "/marketplace" },
  { label: "How It Works", href: "/how-it-works" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAuthenticated, logout, isLoading } = useAuth();
  const profile = useProfileStore((s) => s.profile);

  const initials = profile
    ? `${profile.firstName?.[0] || ""}${profile.lastName?.[0] || ""}`.toUpperCase() || (profile.email?.[0] || "U").toUpperCase()
    : user
      ? `${user.firstName?.[0] || ""}${user.lastName?.[0] || ""}`.toUpperCase() || (user.email?.[0] || "U").toUpperCase()
      : "U";

  return (
    <header className=" top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8  rounded-lg flex items-center justify-center">
              {/* <span className="text-white font-bold text-lg">T</span> */}
                    <img
                      src={"/logo.svg"}
                      alt={""}
                      className=""
                    />
            </div>
            <span className="text-xl font-bold text-gray-900">Trovia</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-emerald-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-600">
              <MapPin className="w-4 h-4 mr-1" />
              <span>Your City</span>
            </div>
            {!isLoading && isAuthenticated && user ? (
              <UserDropdownMenu user={user} profile={profile} initials={initials} logout={logout} />
            ) : (
              <>
                <Link href={"/login"}>
                  <Button
                    variant="outline"
                    className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent"
                  >
                    Sign In
                  </Button>
                </Link>
                <Link href={"/onboard/sign-up"}>
                  <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                    Get Started
                  </Button>
                </Link>
              </>
            )}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-gray-600 hover:text-emerald-600 transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex flex-col space-y-2 pt-4">
                {!isLoading && isAuthenticated && user ? (
                  <UserDropdownMenu user={user} profile={profile} initials={initials} logout={logout} />
                ) : (
                  <>
                    <Link href={"/login"}>
                      <Button
                        variant="outline"
                        className="border-emerald-600 text-emerald-600 hover:bg-emerald-50 bg-transparent"
                      >
                        Sign In
                      </Button>
                    </Link>
                    <Link href={"/onboard/sign-up"}>
                      <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">
                        Get Started
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
