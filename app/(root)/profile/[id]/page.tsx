import Image from "next/image";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import ThreadsTab from "@/components/shared/ThreadsTab";
import ProfileHeader from "@/components/shared/ProfileHeader";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { fetchUser } from "@/lib/actions/user.actions";
import { PROFILE_TABS } from "@/constants";

// Define an asynchronous function named Page that takes parameters as input
const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;

  // Get the current user
  const user = await currentUser();
  if (!user) return null; // Return null if there's no user to avoid TypeScript warnings

  // Fetch user information based on the provided user ID
  const userInfo = await fetchUser(id);

  // Redirect to the onboarding page if the user hasn't completed onboarding
  if (!userInfo?.onboarded) redirect("/onboarding");

  return (
    <section>
      {/* Render the ProfileHeader component with user information */}
      <ProfileHeader
        accountId={userInfo.id}
        authUserId={user.id}
        name={userInfo.name}
        username={userInfo.username}
        imgUrl={userInfo.image}
        bio={userInfo.bio}
      />

      <div className="mt-9">
        {/* Render a tabbed interface using the Tabs component */}
        <Tabs defaultValue="threads" className="w-full">
          <TabsList className="tab">
            {PROFILE_TABS.map((tab) => (
              <TabsTrigger
                key={tab.label}
                value={tab.value}
                className="tab"
                title={tab.label}
              >
                {/* Render tab icon */}
                <Image
                  src={tab.icon}
                  alt={tab.label}
                  width={24}
                  height={24}
                  className="h-auto w-auto object-contain"
                />
                <p className="max-sm:hidden">{tab.label}</p>

                {/* Display thread count for the "Threads" tab */}
                {tab.label === "Threads" && (
                  <p className="ml-1 rounded-sm bg-light-4 px-2 py-1 !text-tiny-medium text-light-2">
                    {userInfo.threads.length}
                  </p>
                )}
              </TabsTrigger>
            ))}
          </TabsList>
          {/* Render TabsContent for each tab */}
          {PROFILE_TABS.map((tab) => (
            <TabsContent
              key={`content-${tab.label}`}
              value={tab.value}
              className="w-full text-light-1"
            >
              {/* @ts-ignore */}
              <ThreadsTab
                currentUserId={user.id}
                accountId={userInfo.id}
                accountType="User"
              />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Page;
