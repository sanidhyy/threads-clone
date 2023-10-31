"use client";

// Import necessary libraries and components
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

// Define the props that the UserCard component accepts
type UserCardProps = {
  id: string; // Unique identifier for the user or community
  name: string; // Name of the user or community
  username: string; // Username of the user or community
  imgUrl: string; // URL of the user's or community's image
  personType: string; // Type of the user (e.g., "Community")
};

const UserCard = ({
  id,
  name,
  username,
  imgUrl,
  personType,
}: UserCardProps) => {
  const router = useRouter();

  const isCommunity = personType === "Community";

  return (
    <article className="user-card">
      <div className="user-card_avatar">
        <div className="relative h-12 w-12">
          {/* Display the user's or community's avatar */}
          <Image
            src={imgUrl}
            alt="user_logo"
            fill
            sizes="48px"
            className="rounded-full object-cover"
          />
        </div>

        <div className="flex-1 text-ellipsis">
          {/* Display the user's or community's name and username */}
          <h4 className="text-base-semibold text-light-1">{name}</h4>
          <p className="text-small-medium text-gray-1">@{username}</p>
        </div>
      </div>

      {/* Button to view the user's or community's profile */}
      <Button
        className="user-card_btn"
        onClick={() => {
          // If it's a community, navigate to the community's page; otherwise, navigate to the user's profile
          if (isCommunity) {
            router.push(`/communities/${id}`);
          } else {
            router.push(`/profile/${id}`);
          }
        }}
        title="View User Profile"
      >
        View
      </Button>
    </article>
  );
};

export default UserCard;
