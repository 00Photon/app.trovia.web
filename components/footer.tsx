"use client"

import Link from "next/link"
import { MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">T</span>
              </div>
              <span className="text-xl font-bold">Trovia</span>
            </Link>
            <p className="text-gray-400 leading-relaxed">
              Connecting local artisans with their communities. Building stronger neighborhoods through skilled
              craftsmanship and trusted relationships.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-emerald-400 cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">For Artisans</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/join-artisan" className="hover:text-emerald-400 transition-colors">
                  Join as Artisan
                </Link>
              </li>
              <li>
                <Link href="/find-jobs" className="hover:text-emerald-400 transition-colors">
                  Find Jobs
                </Link>
              </li>
              <li>
                <Link href="/sell-products" className="hover:text-emerald-400 transition-colors">
                  Sell Products
                </Link>
              </li>
              <li>
                <Link href="/artisan-resources" className="hover:text-emerald-400 transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="hover:text-emerald-400 transition-colors">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">For Clients</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/hire-artisan" className="hover:text-emerald-400 transition-colors">
                  Hire Artisans
                </Link>
              </li>
              <li>
                <Link href="/post-job" className="hover:text-emerald-400 transition-colors">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link href="/browse-products" className="hover:text-emerald-400 transition-colors">
                  Browse Products
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-emerald-400 transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/safety" className="hover:text-emerald-400 transition-colors">
                  Safety & Trust
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3" />
                <span>123 Community St, Your City</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3" />
                <span>hello@trovia.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3" />
                <span>(555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Trovia. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
