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

  // Redirect if the user has already onboarded
  if (userInfo?.onboarded) redirect("/");

  // Create a user data object
  const userData = {
    id: user.id,
    objectId: userInfo?._id,
    username: userInfo ? userInfo?.username : user.username,
    name: userInfo ? userInfo?.name : user.firstName ?? "",
    bio: userInfo ? userInfo?.bio : "",
    image: userInfo ? userInfo?.image : user.imageUrl,
  };

  // Render the page content
  return (
    <main className="mx-auto flex max-w-3xl flex-col justify-start px-10 py-20">
      <h1 className="head-text">Onboarding</h1>
      <p className="mt-3 text-base-regular text-light-2">
        Complete your profile now, to use Threds.
      </p>

      <section className="mt-9 bg-dark-2 p-10">
        {/* Render the AccountProfile component with user data and a button title */}
        <AccountProfile user={userData} btnTitle="Continue" />
      </section>
    </main>
  );
};

export default Page;
