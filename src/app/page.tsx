import Contact from "@/components/Contact";
import PageWrapper from "../components/PageWrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Porfolio from "@/components/Porfolio";

const Home = () => {
  return (
    <div className=" w-full">
      <PageWrapper>
        <div className=" flex flex-col md:flex-row justify-between py-6 md:py-10 xl:py-20 items-start xl:items-center gap-8 xl:gap-16">
          <div className=" flex flex-col w-full md:w-[475px]">
            <p className=" text-[16px] text-slate-300">Software Developer</p>
            <p className=" text-white text-[36px] font-semibold">
              Hello I<span className=" text-green-400">&apos;</span>m
            </p>
            <p className=" py-1 text-[48px] font-medium text-green-500">
              MD OLIULLAH
            </p>
            <p className=" text-[16px] text-slate-200">
              I&apos;m a passionate Full-Stack developer specializing in
              building dynamic, responsive, and user-friendly web applications.
              With expertise in React, Next.js, Tailwind CSS, Node.js,
              Express.js, MongoDB, and PostgreSQL, I create efficient and
              scalable solutions tailored to client needs. I thrive on
              transforming ideas into reality through clean, modern code,
              ensuring performance and functionality go hand-in-hand.
              Let&apos&apos;s collaborate to bring your vision to life!
            </p>
            <div className=" py-4 flex items-center gap-2 md:gap-4">
              <Link
                href="/Resume_of_Md_Oliullah.pdf"
                target="_blank"
                className=" text-[13px] md:text-[16px] flex justify-center hover:text-white items-center gap-1 font-bold text-green-500 border-[1px] border-green-300 hover:border-green-500 shadow-md rounded-[16px] px-4 py-1"
              >
                Download CV{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="white"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M12 16l4-4h-3V4h-2v8H8l4 4zm9 2v2H3v-2h18z"></path>
                  </g>
                </svg>
              </Link>

              <Link
                target="__blank"
                href={`https://wa.me/+8801929072083`}
                className=" cursor-pointer h-[32px] w-[32px]  flex justify-center items-center border-[1px] border-green-300 hover:border-green-500 shadow-md rounded-full p-1"
              >
                <Image
                  src={"/whatsapp.svg"}
                  height={15}
                  width={16}
                  alt=""
                  className=" h-4 w-4"
                />
              </Link>
            </div>
          </div>
          <div className=" rounded-full border-2 border-dashed border-green-500 flex justify-center items-center animate-dash">
            <div className=" h-[336px] w-[336px] md:h-[290px] md:w-[290px] relative bg-transparent">
              <Image
                src="/oli.jpeg"
                priority
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                alt="Profile Picture"
                className="rounded-full"
              />
            </div>
          </div>
        </div>
        <div className=" text-3xl font-semibold text-white flex items-center gap-2 justify-center">
          <p> 2+ Years Experienc</p>
          <div className="w-[15px] h-[15px] bg-green-500 rounded-full ">
            <div className="w-[15px] h-[20px] bg-green-500 rounded-full animate-ping"></div>
          </div>
        </div>
        <div className=" my-10">
          {" "}
          <Porfolio />
        </div>
        <div className=" my-10">
          {" "}
          <Contact />
        </div>
      </PageWrapper>
    </div>
  );
};

export default Home;
