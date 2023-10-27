import { UserButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default Home;
