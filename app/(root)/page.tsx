import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import ThreadCard from "@/components/cards/ThreadCard";

import Pagination from "@/components/shared/Pagination";

import { fetchPosts } from "@/lib/actions/thread.actions";
import { fetchUser } from "@/lib/actions/user.actions";

// Define an asynchronous function named Home that takes search parameters as input
const Home = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string | undefined }>;
}) => {
  const { page } = await searchParams;

  // Get the current user
  const user = await currentUser();
  if (!user) return null; // Return null if there's no user to avoid TypeScript warnings

  // Fetch user information based on the user's ID
  const userInfo = await fetchUser(user.id);

  // Redirect to the onboarding page if the user hasn't completed onboarding
  if (!userInfo?.onboarded) redirect("/onboarding");

  // Fetch a list of posts (threads) based on search parameters
  const result = await fetchPosts(page ? +page : 1, 30);

  return (
    <>
      <h1 className="head-text text-left">Home</h1>

      <section className="mt-9 flex flex-col gap-10">
        {result.posts.length === 0 ? (
          <p className="no-result">No threads found.</p>
        ) : (
          <>
            {result.posts.map((post) => (
              // Render ThreadCard component for each post (thread)
              <ThreadCard
                key={post._id}
                id={post._id}
                currentUserId={user.id}
                parentId={post.parentId}
                content={post.text}
                author={post.author}
                community={post.community}
                createdAt={post.createdAt}
                comments={post.children}
              />
            ))}
          </>
        )}
      </section>

      <Pagination
        path="/"
        pageNumber={page ? +page : 1}
        isNext={result.isNext}
      />
    </>
  );
};

export default Home;
