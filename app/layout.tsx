import type React from "react";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import IndexProvider from "@/providers";

const figtree = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Trovia - Find the best people for your startup",
  description:
    "Get more sales and maximize the conversion rates. Discover the most productive channels.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <IndexProvider>{children}</IndexProvider>
      </body>
    </html>
  );
}
