import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import AccountProfile from "@/components/forms/AccountProfile";

import { fetchUser } from "@/lib/actions/user.actions";

// Define an asynchronous function named Page
const Page = async () => {
  // Get the current user
  const user = await currentUser();
  if (!user) return null; // Return null if there's no user to avoid TypeScript warnings

  // Fetch user information based on the user's ID
  const userInfo = await fetchUser(user.id);

  // Redirect to the onboarding page if the user hasn't completed onboarding
  if (!userInfo?.onboarded) redirect("/onboarding");

  // Prepare user data for the AccountProfile component
  const userData = {
    id: user.id,
    objectId: userInfo?._id,
    username: userInfo ? userInfo?.username : user.username,
    name: userInfo ? userInfo?.name : user.firstName ?? "",
    bio: userInfo ? userInfo?.bio : "",
    image: userInfo ? userInfo?.image : user.imageUrl,
  };

  return (
    <>
      <h1 className="head-text">Edit Profile</h1>
      <p className="mt-3 text-base-regular text-light-2">Make any changes</p>

      <section className="mt-12">
        {/* Render the AccountProfile component with user data */}
        <AccountProfile user={userData} btnTitle="Continue" />
      </section>
    </>
  );
};

export default Page;
