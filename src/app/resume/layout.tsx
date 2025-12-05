import PageWrapper from "../../components/PageWrapper";
import ResumeLeftNav from "../../components/ResumeLeftNav";
import React from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Metadata } from "next";

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: "Resume - MD OLIULLAH",
  description: "Explore my educational background and academic achievements.",
  keywords: ["education", "academic", "qualifications", "degrees"],
  openGraph: {
    title: "Education - MD OLIULLAH",
    description: "Explore my educational background and academic achievements.",
    type: "website",
    images: [
      {
        url: "oli.jpeg",
        width: 600,
        height: 400,
        alt: "Resume Image",
      },
    ],
  },
};

const ResumeLayout = ({ children }: Props) => {
  return (
    <div className=" w-full">
      <PageWrapper>
        <div className="  flex flex-col md:flex-row gap-14 py-6">
          <ResumeLeftNav />
          <div className=" w-full">
            {children}
            <GoogleAnalytics gaId="G-JKVH5BTTGR" />
          </div>
        </div>
      </PageWrapper>
    </div>
  );
};

export default ResumeLayout;
