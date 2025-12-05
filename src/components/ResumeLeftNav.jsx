"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const ResumeLeftNav = () => {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div className=" flex flex-col gap-4 w-full xl:w-[575px]">
      <p className=" text-[48px] text-white font-semibold">Why hire me?</p>
      <p className=" text-[16px] text-slate-300">
        Under the hood, Next.js also abstracts and automatically configures
        tooling needed for React, like bundling, compiling, and more.
      </p>

      <div className=" flex flex-col gap-3">
        <Link
          href={"/resume"}
          className={` w-full rounded-[8px] text-[16px]   py-1 flex justify-center items-center ${
            pathName === "/resume"
              ? " bg-green-500 text-black"
              : "text-white bg-slate-500"
          } hover:bg-green-500 hover:text-black`}
        >
          Experience
        </Link>

        <Link
          href={"/resume/education"}
          className={` w-full rounded-[8px] text-[16px] py-1  flex justify-center items-center ${
            pathName === "/resume/education"
              ? " bg-green-500 text-black"
              : "text-white bg-slate-500 py-1 "
          } hover:bg-green-500 hover:text-black`}
        >
          Education
        </Link>
        <Link
          href={"/resume/skills"}
          className={` w-full rounded-[8px] text-[16px]   py-1 flex justify-center items-center ${
            pathName === "/resume/skills"
              ? " bg-green-500 text-black"
              : "text-white bg-slate-500"
          } hover:bg-green-500 hover:text-black`}
        >
          Skills
        </Link>
        <Link
          href={"/resume/about-me"}
          className={` w-full rounded-[8px] text-[16px]   py-1 flex justify-center items-center ${
            pathName === "/resume/about-me"
              ? " bg-green-500 text-black"
              : "text-white bg-slate-500"
          } hover:bg-green-500 hover:text-black`}
        >
          About Me
        </Link>
      </div>
    </div>
  );
};

export default ResumeLeftNav;
