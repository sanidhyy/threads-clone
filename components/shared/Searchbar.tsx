"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { Input } from "../ui/input";

type SearchBarProps = {
  routeType: string;
};

const Searchbar = ({ routeType }: SearchBarProps) => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  // query after 0.3s of no input
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (search) {
        router.push(`/${routeType}?q=` + search);
      } else {
        router.push(`/${routeType}`);
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [search, routeType, router]);

  console.log(routeType);

  return (
    <div
      className="searchbar"
      title={`${
        routeType === "search" ? "Search creators" : "Search communities"
      }`}
    >
      <Image
        src="/assets/search-gray.svg"
        alt="search"
        width={24}
        height={24}
        className="object-contain"
      />
      <Input
        id="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={`${
          routeType === "search" ? "Search creators" : "Search communities"
        }`}
        className="no-focus searchbar_input"
      />
    </div>
  );
};

export default Searchbar;
