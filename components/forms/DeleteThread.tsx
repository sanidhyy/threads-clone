"use client";

// Import necessary libraries and components
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";

import { deleteThread } from "@/lib/actions/thread.actions";

// Define the props that the DeleteThread component accepts
type DeleteThreadProps = {
  threadId: string;
  currentUserId: string;
  authorId: string;
  parentId: string | null;
  isComment?: boolean;
};

const DeleteThread = ({
  threadId,
  currentUserId,
  authorId,
  parentId,
  isComment,
}: DeleteThreadProps) => {
  // Get the current pathname and router from Next.js
  const pathname = usePathname();
  const router = useRouter();

  // Check if the current user can delete the thread
  if (currentUserId !== authorId || pathname === "/") return null;

  return (
    <Image
      src="/assets/delete.svg"
      alt="delete"
      width={18}
      height={18}
      className="cursor-pointer object-contain"
      title="Delete thread"
      onClick={async () => {
        // Call the deleteThread function and provide necessary information
        await deleteThread(JSON.parse(threadId), pathname);

        // Redirect to the homepage if it's not a comment or there's no parent
        if (!parentId || !isComment) {
          router.push("/");
        }
      }}
    />
  );
};

export default DeleteThread;
