"use client";
import React, { useState } from "react";
import PageWrapper from "./PageWrapper";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileNavBar from "./MobileNavBar";

const NavBar = () => {
  const pathName = usePathname();
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className=" w-full sticky top-0 left-0 bg-black z-30">
      <PageWrapper>
        <div className=" flex items-center justify-between py-4">
          <Link
            href={"/"}
            className=" text-white text-[24px] flex items-end font-bold  text-xl"
          >
            Md Oliullah.
            <span className=" text-green-500 text-4xl">.</span>
          </Link>
          <div className=" md:flex hidden  items-center gap-4">
            <Link
              href={"/"}
              className={`text-[16px] font-semibold hover:text-green-500 border-b-[2px] ${
                pathName === "/"
                  ? "text-green-500 border-green-600"
                  : "text-slate-300 "
              } border-transparent hover:border-green-600 p-2`}
            >
              Home
            </Link>
            <Link
              href={"/service"}
              className={`text-[16px] font-semibold hover:text-green-500 border-b-[2px] ${
                pathName === "/service"
                  ? "text-green-500 border-green-600"
                  : "text-slate-300 "
              } border-transparent hover:border-green-600 p-2`}
            >
              Services
            </Link>
            <Link
              href={"/resume"}
              className={`text-[16px] font-semibold hover:text-green-500 border-b-[2px] ${
                pathName.startsWith("/resume")
                  ? "text-green-500 border-green-600"
                  : "text-slate-300 "
              } border-transparent hover:border-green-600 p-2`}
            >
              Resume
            </Link>
            <Link
              href={"/work"}
              className={`text-[16px] font-semibold hover:text-green-500 border-b-[2px] ${
                pathName === "/work"
                  ? "text-green-500 border-green-600"
                  : "text-slate-300 "
              } border-transparent hover:border-green-600 p-2`}
            >
              Work
            </Link>
            <Link
              href={"/contact"}
              className={`text-[16px] font-semibold hover:text-green-500 border-b-[2px] ${
                pathName === "/contact"
                  ? "text-green-500 border-green-600"
                  : "text-slate-300 "
              } border-transparent hover:border-green-600 p-2`}
            >
              Contact
            </Link>
          </div>
          <div
            className=" cursor-pointer block md:hidden"
            onClick={() => setToggle(!toggle)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 50 50"
            >
              <path
                fill="white"
                d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"
              ></path>
            </svg>
          </div>
        </div>
      </PageWrapper>
      {toggle && <MobileNavBar close={toggle} setClose={setToggle} />}
    </div>
  );
};

export default NavBar;
