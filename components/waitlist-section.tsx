"use client";

import { useState } from "react";
import { ArrowRight, Lock, CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

const waitlistOptions = [
  {
    value: "artisan",
    label: "Skilled Artisan",
    description: "I want to offer my services and find work",
    icon: "🔨",
    benefits: ["Get matched with local clients", "Showcase your portfolio", "Set your own rates"],
  },
  {
    value: "client",
    label: "Client/Buyer",
    description: "I want to hire artisans or buy products",
    icon: "🏠",
    benefits: ["Access verified professionals", "Browse unique products", "Secure payments"],
  },
  {
    value: "both",
    label: "Both",
    description: "I want to hire and offer services",
    icon: "⭐",
    benefits: ["Full platform access", "Dual profile options", "Maximum flexibility"],
  },
];

export function WaitlistSection() {
  const [email, setEmail] = useState("");
  const [userType, setUserType] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-xl p-12">
              <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Welcome to the Trovia Community!
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Thank you for joining our waitlist. We'll notify you as soon as we launch in your area.
              </p>
              <div className="bg-emerald-50 rounded-lg p-4">
                <p className="text-emerald-800 font-medium">
                  🎉 You're #1,247 on the waitlist
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Join the Revolution
            </h2>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              Be among the first to experience the future of local commerce. 
              Get early access and exclusive benefits.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-3">
                  EMAIL ADDRESS
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full py-4 px-6 text-lg border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-emerald-500"
                  required
                />
              </div>

              <div>
                <p className="block text-sm font-semibold text-gray-900 mb-4">
                  I AM INTERESTED AS A...
                </p>
                <RadioGroup value={userType} onValueChange={setUserType} className="space-y-4">
                  {waitlistOptions.map(({ value, label, description, icon, benefits }) => (
                    <div
                      key={value}
                      className="relative border-2 border-gray-200 rounded-xl p-6 hover:border-emerald-300 transition-colors cursor-pointer"
                    >
                      <div className="flex items-start space-x-4">
                        <RadioGroupItem
                          value={value}
                          id={value}
                          className="mt-1 text-emerald-600 border-2"
                        />
                        <Label htmlFor={value} className="flex-1 cursor-pointer">
                          <div className="flex items-center mb-2">
                            <span className="text-2xl mr-3">{icon}</span>
                            <span className="font-semibold text-lg text-gray-900">{label}</span>
                          </div>
                          <p className="text-gray-600 mb-3">{description}</p>
                          <ul className="space-y-1">
                            {benefits.map((benefit) => (
                              <li key={benefit} className="flex items-center text-sm text-gray-500">
                                <CheckCircle className="w-4 h-4 text-emerald-500 mr-2" />
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </Label>
                      </div>
                    </div>
                  ))}
                </RadioGroup>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 px-8 text-lg font-semibold rounded-xl"
                disabled={!email || !userType}
              >
                Join Exclusive Waitlist
                <ArrowRight className="ml-2 h-6 w-6" />
              </Button>
            </form>

            <div className="mt-8 text-center">
              <div className="flex items-center justify-center text-sm text-gray-500 mb-4">
                <Lock className="h-4 w-4 mr-2" />
                Your information is secure and will never be shared
              </div>
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                <span>✨ Early access benefits</span>
                <span>🎁 Exclusive launch offers</span>
                <span>📱 Mobile app preview</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
