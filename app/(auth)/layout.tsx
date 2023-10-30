import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import { Toaster } from "@/components/ui/toaster";

import { generateMetadata } from "@/lib/utils";

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = generateMetadata("Authentication");

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>
          {children}

          <aside>
            <Toaster />
          </aside>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
