// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import { Metadata } from "next";

// An array of sidebar links with image URLs, routes, and labels.
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

// Tabs for the user's profile page with values, labels, and icons.
export const PROFILE_TABS = [
  { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
  { value: "replies", label: "Replies", icon: "/assets/members.svg" },
  { value: "tagged", label: "Tagged", icon: "/assets/tag.svg" },
] as const;

// Tabs for a community page with values, labels, and icons.
export const COMMUNITY_TABS = [
  { value: "threads", label: "Threads", icon: "/assets/reply.svg" },
  { value: "members", label: "Members", icon: "/assets/members.svg" },
  { value: "requests", label: "Requests", icon: "/assets/request.svg" },
] as const;

// The name of your website, set as "Threads."
export const SITE_NAME = "Threads" as const;

// Additional links, including a GitHub link and source code link.
export const EXTRA_LINKS = {
  github: "https://github.com/sanidhyy",
  source_code: "https://github.com/sanidhyy/threads-clone",
} as const;

// Metadata for your website, including title, description, author information, keywords, and more.
export const SITE_DATA: Metadata = {
  title: SITE_NAME,
  description: `A Next.js 13 Meta ${SITE_NAME} application`,
  authors: {
    name: "Sanidhya Kumar Verma",
    url: EXTRA_LINKS.github,
  },
  keywords: [
    // List of keywords related to your website.
  ],
  themeColor: "#877EFF",
  manifest: "/manifest.json",
};
