import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import Searchbar from "@/components/shared/Searchbar";
import Pagination from "@/components/shared/Pagination";
import CommunityCard from "@/components/cards/CommunityCard";

import { fetchUser } from "@/lib/actions/user.actions";
import { fetchCommunities } from "@/lib/actions/community.actions";

// Define an asynchronous function named Page that takes search parameters as input
const Page = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string | undefined; q: string | undefined }>;
}) => {
  const { page, q } = await searchParams;

  // Get the current user
  const user = await currentUser();
  if (!user) return null; // Return null if there's no user to avoid TypeScript warnings

  // Fetch user information based on the user's ID
  const userInfo = await fetchUser(user.id);

  // Redirect to the onboarding page if the user hasn't completed onboarding
  if (!userInfo?.onboarded) redirect("/onboarding");

  // Fetch a list of communities based on search parameters
  const result = await fetchCommunities({
    searchString: q,
    pageNumber: page ? +page : 1,
    pageSize: 25,
  });

  return (
    <>
      <h1 className="head-text">Communities</h1>

      <div className="mt-5">
        <Searchbar routeType="communities" />
      </div>

      <section className="mt-9 flex flex-wrap gap-4">
        {result.communities.length === 0 ? (
          <p className="no-result">No Result.</p>
        ) : (
          <>
            {result.communities.map((community) => (
              <CommunityCard
                key={community.id}
                id={community.id}
                name={community.name}
                username={community.username}
                imgUrl={community.image}
                bio={community.bio}
                members={community.members}
              />
            ))}
          </>
        )}
      </section>

      <Pagination
        path="communities"
        pageNumber={page ? +page : 1}
        isNext={result.isNext}
      />
    </>
  );
};

export default Page;
