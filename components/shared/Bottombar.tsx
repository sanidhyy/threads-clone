"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@clerk/nextjs";

import { SIDEBAR_LINKS } from "@/constants";

const Bottombar = () => {
  const pathname = usePathname();
  const { userId } = useAuth();

  return (
    <section className="bottombar">
      <div className="bottombar_container">
        {SIDEBAR_LINKS.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;

          return (
            <Link
              href={
                link.route === "/profile"
                  ? `${link.route}/${userId}`
                  : link.route
              }
              key={link.label}
              className={`bottombar_link ${isActive && "bg-primary-500"}`}
            >
              <Image
                src={link.imgURL}
                alt={link.label}
                width={16}
                height={16}
                className="object-contain"
              />

              <p className="text-subtle-medium text-light-1 max-sm:hidden">
                {link.label.split(/\s+/)[0]}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Bottombar;
