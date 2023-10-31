"use client"; // Indicates that this code should run on the client side.

import Image from "next/image"; // Import the `Image` component from Next.js.
import { useRouter } from "next/navigation"; // Import the `useRouter` hook from Next.js.
import { useEffect, useState } from "react"; // Import the `useEffect` and `useState` hooks from React.

import { Input } from "../ui/input"; // Import the `Input` component from a local module.

type SearchBarProps = {
  routeType: string; // Define the `SearchBarProps` type, which includes a `routeType` prop of type string.
};

const Searchbar = ({ routeType }: SearchBarProps) => {
  const router = useRouter(); // Get the router object using the `useRouter` hook.
  const [search, setSearch] = useState(""); // Initialize a state variable `search` and its setter function `setSearch`.

  // Use the `useEffect` hook to listen for changes to `search` and `routeType`.
  useEffect(() => {
    // Create a delayed function to perform the search after 300 milliseconds of no input.
    const delayDebounceFn = setTimeout(() => {
      if (search) {
        router.push(`/${routeType}?q=` + search); // If there is a search query, navigate to the search results page.
      } else {
        router.push(`/${routeType}`); // If there is no search query, navigate to the base route.
      }
    }, 300);

    // Clean up the timeout when `search`, `routeType`, or `router` change.
    return () => clearTimeout(delayDebounceFn);
  }, [search, routeType, router]);

  console.log(routeType); // Log the `routeType` to the console.

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

export default Searchbar; // Export the `Searchbar` component as the default export.
