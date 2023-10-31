import Image from "next/image"; // Import the `Image` component from Next.js.
import Link from "next/link"; // Import the `Link` component from Next.js.
import { OrganizationSwitcher, SignedIn, SignOutButton } from "@clerk/nextjs"; // Import components from Clerk for authentication.
import { dark } from "@clerk/themes"; // Import a dark theme from Clerk.

import { EXTRA_LINKS, SITE_NAME } from "@/constants"; // Import constants from a local module.

const Topbar = () => {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4" title="Threads">
        <Image src="/logo.svg" alt="logo" width={28} height={28} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">
          {SITE_NAME}
        </p>
      </Link>

      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer">
                <Image
                  src="/assets/logout.svg"
                  alt="logout"
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>

        <div title="Your Organisation">
          <OrganizationSwitcher
            appearance={{
              baseTheme: dark,
              elements: {
                organizationSwitcherTrigger: "py-2 px-4",
              },
            }}
          />
        </div>

        <div className="flex items-center gap-1">
          <Link
            href={EXTRA_LINKS.source_code}
            target="_blank"
            rel="noreferrer noopener"
            className="flex cursor-pointer"
            title="Source Code"
          >
            <Image
              src="/assets/github.svg"
              alt="github"
              width={24}
              height={24}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Topbar; // Export the `Topbar` component as the default export.
