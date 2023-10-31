import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import { Toaster } from "@/components/ui/toaster";

import { generateMetadata } from "@/lib/utils";

import "../globals.css";

// Initialize the Inter font with the "latin" subset
const inter = Inter({ subsets: ["latin"] });

// Generate metadata for the page
export const metadata: Metadata = generateMetadata("Authentication");

// Define a root layout component
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  // Render the ClerkProvider component, which provides authentication features
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      {/* Set the HTML language to English */}
      <html lang="en">
        {/* Set the body class with the Inter font and background color */}
        <body className={`${inter.className} bg-dark-1`}>
          {children} {/* Render the child components within this layout */}
          {/* Render the Toaster component for displaying notifications */}
          <aside>
            <Toaster />
          </aside>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
