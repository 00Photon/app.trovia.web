"use client";
import { ReactNode } from "react";
import { JSX } from "react/jsx-runtime";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "./auth-provider";

const IndexProvider = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Toaster richColors={true} position="top-center" />
          {children}
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
};

export default IndexProvider;
