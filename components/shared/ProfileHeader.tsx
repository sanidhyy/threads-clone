import Link from "next/link";
import Image from "next/image";

// Define the ProfileHeader component
type ProfileHeaderProps = {
  accountId: string;
  authUserId: string;
  name: string;
  username: string;
  imgUrl: string;
  bio: string;
  type?: string;
};

const ProfileHeader = ({
  accountId,
  authUserId,
  name,
  username,
  imgUrl,
  bio,
  type,
}: ProfileHeaderProps) => {
  return (
    <div className="flex w-full flex-col justify-start">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* User profile image */}
          <div className="relative h-20 w-20 object-cover">
            <Image
              src={imgUrl}
              alt="logo"
              fill
              sizes="80px"
              className="rounded-full object-cover shadow-2xl"
            />
          </div>

          <div className="flex-1">
            {/* User name and username */}
            <h2 className="text-left text-heading3-bold text-light-1">
              {name}
            </h2>
            <p className="text-base-medium text-gray-1">@{username}</p>
          </div>
        </div>
        {/* Edit profile link for the authenticated user */}
        {accountId === authUserId && type !== "Community" && (
          <Link href="/profile/edit" title="Edit Profile">
            <div className="flex cursor-pointer gap-3 rounded-lg bg-dark-3 px-4 py-2">
              <Image
                src="/assets/edit.svg"
                alt="logout"
                width={16}
                height={16}
                className="h-4 w-4"
              />

              <p className="text-light-2 max-sm:hidden">Edit</p>
            </div>
          </Link>
        )}
      </div>

      {/* User bio */}
      <p className="mt-6 max-w-lg text-base-regular text-light-2">{bio}</p>

      {/* Vertical line separator */}
      <div className="mt-12 h-0.5 w-full bg-dark-3" />
    </div>
  );
};

export default ProfileHeader;
