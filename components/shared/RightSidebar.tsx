import { currentUser } from "@clerk/nextjs"; // Import the `currentUser` function from the Clerk package.
import UserCard from "../cards/UserCard"; // Import the `UserCard` component.

import { fetchCommunities } from "@/lib/actions/community.actions"; // Import the `fetchCommunities` function.
import { fetchUsers } from "@/lib/actions/user.actions"; // Import the `fetchUsers` function.

const RightSidebar = async () => {
  const user = await currentUser(); // Get the current user asynchronously.
  if (!user) return null; // If there's no user, return null.

  // Fetch users similar to the current user.
  const similarMinds = await fetchUsers({
    userId: user.id,
    pageSize: 4,
  });

  // Fetch suggested communities.
  const suggestedCommunities = await fetchCommunities({ pageSize: 4 });

  return (
    <aside className="custom-scrollbar rightsidebar">
      <div className="flex flex-1 flex-col justify-start">
        <h3 className="text-heading4-medium text-light-1">
          Suggested Communities
        </h3>

        <div className="mt-7 flex w-[350px] flex-col gap-9">
          {suggestedCommunities.communities.length > 0 ? (
            <>
              {suggestedCommunities.communities.map((community) => (
                <UserCard
                  key={community.id}
                  id={community.id}
                  name={community.name}
                  username={community.username}
                  imgUrl={community.image}
                  personType="Community"
                />
              ))}
            </>
          ) : (
            <p className="!text-base-regular text-light-3">
              No communities yet.
            </p>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-start">
        <h3 className="text-heading4-medium text-light-1">Similar Minds</h3>
        <div className="mt-7 flex w-[350px] flex-col gap-10">
          {similarMinds.users.length > 0 ? (
            <>
              {similarMinds.users.map((person) => (
                <UserCard
                  key={person.id}
                  id={person.id}
                  name={person.name}
                  username={person.username}
                  imgUrl={person.image}
                  personType="User"
                />
              ))}
            </>
          ) : (
            <p className="!text-base-regular text-light-3">No users yet.</p>
          )}
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
