"use client";

// Import necessary libraries and components
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { SignOutButton, SignedIn, useAuth } from "@clerk/nextjs";

import { SIDEBAR_LINKS } from "@/constants";

// Define the LeftSidebar component
const LeftSidebar = () => {
  // Get the router, pathname from navigation, and userId from Clerk's useAuth
  const router = useRouter();
  const pathname = usePathname();
  const { userId } = useAuth();

  return (
    <aside className="custom-scrollbar leftsidebar">
      <div className="flex w-full flex-1 flex-col gap-6 px-6">
        {SIDEBAR_LINKS.map((link) => {
          // Check if the link is currently active based on the pathname
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          return (
            // Render links from SIDEBAR_LINKS array
            <Link
              key={link.label}
              href={
                link.route === "/profile"
                  ? `${link.route}/${userId}`
                  : link.route
              }
              title={link.label}
              className={`leftsidebar_link ${isActive && "bg-primary-500 "}`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={24}
                height={24}
              />

              <p className="text-light-1 max-lg:hidden">{link.label}</p>
            </Link>
          );
        })}
      </div>

      <div className="mt-10 px-6">
        <SignedIn>
          {/* Render the SignOutButton for logged-in users */}
          <SignOutButton signOutCallback={() => router.push("/sign-in")}>
            <div className="flex cursor-pointer gap-4 p-4" title="Logout">
              <Image
                src="/assets/logout.svg"
                alt="logout"
                width={24}
                height={24}
              />

              <p className="text-light-2 max-lg:hidden">Logout</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </aside>
  );
};

export default LeftSidebar;
