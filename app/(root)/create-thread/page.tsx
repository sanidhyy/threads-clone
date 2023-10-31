import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import PostThread from "@/components/forms/PostThread";

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

  return (
    <>
      <h1 className="head-text">Create Thread</h1>

      {/* Render the PostThread component with user information */}
      <PostThread userId={userInfo._id} />
    </>
  );
};

export default Page;
