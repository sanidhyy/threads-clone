import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs";

import Comment from "@/components/forms/Comment";

import ThreadCard from "@/components/cards/ThreadCard";

import { fetchUser } from "@/lib/actions/user.actions";
import { fetchThreadById } from "@/lib/actions/thread.actions";

// Define the revalidate constant with a value of 0
export const revalidate = 0;

// Define an asynchronous function named page that takes parameters as input
const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  if (!id) return null; // Return null if there's no thread ID

  // Get the current user
  const user = await currentUser();
  if (!user) return null; // Return null if there's no user to avoid TypeScript warnings

  // Fetch user information based on the user's ID
  const userInfo = await fetchUser(user.id);

  // Redirect to the onboarding page if the user hasn't completed onboarding
  if (!userInfo?.onboarded) redirect("/onboarding");

  // Fetch thread information based on the provided thread ID
  const thread = await fetchThreadById(id);

  return (
    <section className="relative">
      <div>
        {/* Render the ThreadCard component to display thread information */}
        <ThreadCard
          id={thread._id}
          currentUserId={user.id}
          parentId={thread.parentId}
          content={thread.text}
          author={thread.author}
          community={thread.community}
          createdAt={thread.createdAt}
          comments={thread.children}
        />
      </div>

      <div className="mt-7">
        {/* Render the Comment component to allow users to add comments */}
        <Comment
          threadId={id}
          currentUserImg={user.imageUrl}
          currentUserId={JSON.stringify(userInfo._id)}
        />
      </div>

      <div className="mt-10">
        {/* Render child threads (comments) using ThreadCard for each comment */}
        {thread.children.map((childItem: any) => (
          <ThreadCard
            key={childItem._id}
            id={childItem._id}
            currentUserId={user.id}
            parentId={childItem.parentId}
            content={childItem.text}
            author={childItem.author}
            community={childItem.community}
            createdAt={childItem.createdAt}
            comments={childItem.children}
            isComment
          />
        ))}
      </div>
    </section>
  );
};

export default page;
