import { redirect } from "next/navigation"; // Import the `redirect` function from Next.js.

import { fetchCommunityPosts } from "@/lib/actions/community.actions"; // Import the `fetchCommunityPosts` function.
import { fetchUserPosts } from "@/lib/actions/user.actions"; // Import the `fetchUserPosts` function.

import ThreadCard from "../cards/ThreadCard"; // Import the `ThreadCard` component.

type IResult = {
  // Define the `IResult` type, which describes the structure of the result data.
  name: string;
  image: string;
  id: string;
  threads: {
    _id: string;
    text: string;
    parentId: string | null;
    author: {
      name: string;
      image: string;
      id: string;
    };
    community: {
      id: string;
      name: string;
      image: string;
    } | null;
    createdAt: string;
    children: {
      author: {
        image: string;
      };
    }[];
  }[];
};

type ThreadsTabProps = {
  currentUserId: string;
  accountId: string;
  accountType: string;
};

const ThreadsTab = async ({
  currentUserId,
  accountId,
  accountType,
}: ThreadsTabProps) => {
  let result: IResult; // Declare a variable `result` with the type `IResult`.

  if (accountType === "Community") {
    result = await fetchCommunityPosts(accountId); // Fetch community posts if the `accountType` is "Community".
  } else {
    result = await fetchUserPosts(accountId); // Fetch user posts if the `accountType` is not "Community".
  }

  if (!result) {
    redirect("/"); // Redirect to the home page if `result` is falsy.
  }

  return (
    <section className="mt-9 flex flex-col gap-10">
      {result.threads.map((thread) => (
        <ThreadCard
          key={thread._id}
          id={thread._id}
          currentUserId={currentUserId}
          parentId={thread.parentId}
          content={thread.text}
          author={
            accountType === "User"
              ? { name: result.name, image: result.image, id: result.id }
              : {
                  name: thread.author.name,
                  image: thread.author.image,
                  id: thread.author.id,
                }
          }
          community={
            accountType === "Community"
              ? { name: result.name, id: result.id, image: result.image }
              : thread.community
          }
          createdAt={thread.createdAt}
          comments={thread.children}
        />
      ))}
    </section>
  );
};

export default ThreadsTab; // Export the `ThreadsTab` component as the default export.
