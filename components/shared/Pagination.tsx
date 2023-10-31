"use client";

// Import necessary libraries and components
import { useRouter } from "next/navigation";

import { Button } from "../ui/button";

// Define the Pagination component
type PaginationProps = {
  pageNumber: number;
  isNext: boolean;
  path: string;
};

const Pagination = ({ pageNumber, isNext, path }: PaginationProps) => {
  const router = useRouter();

  // Handle navigation when the "Prev" or "Next" button is clicked
  const handleNavigation = (type: string) => {
    let nextPageNumber = pageNumber;

    if (type === "prev") {
      // Decrease the page number when "Prev" is clicked, ensuring it doesn't go below 1
      nextPageNumber = Math.max(1, pageNumber - 1);
    } else if (type === "next") {
      // Increase the page number when "Next" is clicked
      nextPageNumber = pageNumber + 1;
    }

    // Construct the new route with the updated page number
    if (nextPageNumber > 1) {
      router.push(`/${path}?page=${nextPageNumber}`);
    } else {
      router.push(`/${path}`);
    }
  };

  // If there's no "Next" page and the current page is 1, return null (no pagination needed)
  if (!isNext && pageNumber === 1) return null;

  return (
    <div className="pagination">
      {/* "Prev" button */}
      <Button
        onClick={() => handleNavigation("prev")}
        disabled={pageNumber === 1}
        className="!text-small-regular text-light-2"
        title="Previous Item"
      >
        Prev
      </Button>
      {/* Display the current page number */}
      <p className="text-small-semibold text-light-1">{pageNumber}</p>
      {/* "Next" button */}
      <Button
        onClick={() => handleNavigation("next")}
        disabled={!isNext}
        className="!text-small-regular text-light-2"
        title="Next Item"
      >
        Next
      </Button>
    </div>
  );
};

export default Pagination;
