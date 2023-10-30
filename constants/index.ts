import { Metadata } from "next";

export const SIDEBAR_LINKS = [
  {
    imgURL: "/assets/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/search.svg",
    route: "/search",
    label: "Search",
  },
  {
    imgURL: "/assets/heart.svg",
    route: "/activity",
    label: "Activity",
  },
  {
    imgURL: "/assets/create.svg",
    route: "/create-thread",
    label: "Create Thread",
  },
  {
    imgURL: "/assets/community.svg",
    route: "/communities",
    label: "Communities",
  },
  {
    imgURL: "/assets/user.svg",
    route: "/profile",
    label: "Profile",
  },
] as const;

export const PROFILE_TABS = [
  { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
  { value: "replies", label: "Replies", icon: "/assets/members.svg" },
  { value: "tagged", label: "Tagged", icon: "/assets/tag.svg" },
] as const;

export const COMMUNITY_TABS = [
  { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
  { value: "members", label: "Members", icon: "/assets/members.svg" },
  { value: "requests", label: "Requests", icon: "/assets/request.svg" },
] as const;

export const SITE_NAME = "Threads" as const;

export const EXTRA_LINKS = {
  github: "https://github.com/sanidhyy",
  source_code: "https://github.com/sanidhyy/threads-clone",
} as const;

export const SITE_DATA: Metadata = {
  title: SITE_NAME,
  description: `A Next.js 13 Meta ${SITE_NAME} application`,
  authors: {
    name: "Sanidhya Kumar Verma",
    url: EXTRA_LINKS.github,
  },
  keywords: [
    "reactjs",
    "nextjs",
    "vercel",
    "react",
    "threads",
    "meta",
    "twitter",
    "instagram",
    "meta-threads",
    "shadcn",
    "shadcn-ui",
    "radix-ui",
    "uploadthing",
    "clsx",
    "mongoose",
    "mongodb",
    "lucide-react",
    "next-pwa",
    "postcss",
    "prettier",
    "react-dom",
    "tailwindcss",
    "tailwindcss-animate",
    "ui/ux",
    "js",
    "javascript",
    "typescript",
    "eslint",
    "html",
    "css",
  ],
  themeColor: "#877EFF",
  manifest: "/manifest.json",
};
