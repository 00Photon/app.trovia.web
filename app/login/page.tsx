"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useMutation } from "@tanstack/react-query"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Eye, EyeOff } from "lucide-react"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"

import { authService } from "@/services/auth.service"
import { login_schema } from "@/schema/auth"
import { LoginPayload } from "@/types"
import MinorAuthLayout from "@/components/layout/minor-auth-layout"
import { useProfileStore } from "@/store/profile-store";

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const setProfile = useProfileStore((s) => s.setProfile)
  const fetchProfile = useProfileStore((s) => s.fetchProfile)

  const form = useForm<LoginPayload>({
    resolver: yupResolver(login_schema),
    defaultValues: {
      email: "",
      phone: "",
      password: "",
    },
  })

  const mutation = useMutation({
    mutationFn: async (payload: LoginPayload) => {
      return await authService.login(payload)
    },
    onSuccess: async (response) => {
      if (response && response.user && response.user.role) {
        setProfile(response.user);
        if (response.user.role === "admin") {
          router.push("/admin")
        } else {
          router.push("/account")
        }
      } else {
        router.push("/login")
      }
    },
  })

  const onSubmit = (data: LoginPayload) => {
    mutation.mutate(data)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <MinorAuthLayout
        title="Welcome Back"
        description="Sign in to your Trovia account"
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <div className="relative">
                    <FormControl>
                      <Input
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        {...field}
                      />
                    </FormControl>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-4 w-4 text-gray-400" />
                      ) : (
                        <Eye className="h-4 w-4 text-gray-400" />
                      )}
                    </Button>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center justify-between">
              <Link href="/forgot-password" className="text-sm text-teal-600 hover:underline">
                Forgot password?
              </Link>
            </div>
            <Button
              type="submit"
              className="w-full bg-teal-600 hover:bg-teal-700"
              disabled={mutation.isPending}
            >
              {mutation.isPending ? "Signing In..." : "Sign In"}
            </Button>
          </form>
        </Form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link href="/onboard/sign-up" className="text-teal-600 hover:underline font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </MinorAuthLayout>
    </div>
  )
}