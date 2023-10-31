import { SignIn } from "@clerk/nextjs";

// Define a functional component named Page
const Page = () => {
  // Render the SignIn component provided by Clerk for user authentication
  return <SignIn />;
};

export default Page;
