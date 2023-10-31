import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import LeftSidebar from "@/components/shared/LeftSidebar";
import Bottombar from "@/components/shared/Bottombar";
import RightSidebar from "@/components/shared/RightSidebar";
import Topbar from "@/components/shared/Topbar";

import { generateMetadata } from "@/lib/utils";

import "../globals.css";

// Create an instance of the Inter font with the "latin" subset
const inter = Inter({ subsets: ["latin"] });

// Define metadata for the page
export const metadata: Metadata = generateMetadata();

// Define the root layout component that wraps the entire application
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={inter.className}>
          <Topbar /> {/* Render the top navigation bar */}
          <main className="flex flex-row">
            <LeftSidebar /> {/* Render the left sidebar */}
            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>
            {/* @ts-ignore */}
            <RightSidebar /> {/* Render the right sidebar */}
          </main>
          <Bottombar /> {/* Render the bottom navigation bar */}
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
