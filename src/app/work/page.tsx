import React from "react";
import PageWrapper from "../../components/PageWrapper";

import Porfolio from "@/components/Porfolio";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Work - Talal Mahmud",
  description:
    "Explore my portfolio and see the projects I have worked on. Discover my skills and expertise in various domains.",
  keywords: ["portfolio", "projects", "work", "skills", "expertise"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "My Work - Talal Mahmud",
    description:
      "Explore my portfolio and see the projects I have worked on. Discover my skills and expertise in various domains.",
    type: "website",
    url: "https://talalmahmud.vercel.app/work",
    images: [
      {
        url: "talal.jpg",
        width: 800,
        height: 600,
        alt: "My Work Image",
      },
    ],
  },
};

const page = () => {
  return (
    <div className=" w-full">
      <PageWrapper>
        <Porfolio />
      </PageWrapper>
    </div>
  );
};

export default page;
