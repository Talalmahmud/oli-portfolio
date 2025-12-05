import Image from "next/image";
import Link from "next/link";
import React from "react";
import { portfolioData, PortfolioItem } from "../utils/constant";

const Porfolio = () => {
  return (
    <>
      {" "}
      <p className=" text-white text-center font-semibold text-2xl py-4 ">
        My Works
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {/* {Array(15)
        .fill(null)
        .map((_, index) => (
          <div key={index} className="w-full  text-white">
            <div className="relative group">
              <Image
                src="/social.png"
                height={300}
                width={200}
                alt={`Project ${index + 1}`}
                className="h-[150px] w-full "
                priority
              />{" "}
              <div className="absolute top-0 left-0 transition-all hidden group-hover:flex justify-center items-center gap-4 bg-white/60 h-[150px] w-full">
                <Link
                  className=" hover:bg-green-100 rounded-2xl p-1"
                  href={"/"}
                >
                  {" "}
                  <Image
                    src="/gitlink.svg"
                    height={24}
                    width={24}
                    alt={`Project ${index + 1}`}
                    className="h-[24px] w-[24px] "
                    priority
                  />
                </Link>
                <Link
                  className=" hover:bg-green-100 rounded-2xl p-1"
                  href={"/"}
                >
                  {" "}
                  <Image
                    src="/eye.svg"
                    height={24}
                    width={24}
                    alt={`Project ${index + 1}`}
                    className="h-[24px] w-[24px] "
                    priority
                  />{" "}
                </Link>
              </div>
            </div>
            <p>Project</p>
          </div>
        ))} */}

        {portfolioData?.map((item: PortfolioItem, index: number) => (
          <div
            key={index}
            className="w-full transition-all ease-in-out duration-1000 hover:bg-white hover:font-semibold hover:text-green-400 rounded-md p-2  text-white"
          >
            <div className="relative group">
              <Image
                src={item?.image || "/social.png"}
                height={300}
                width={200}
                alt={`Project ${index + 1}`}
                className="h-[150px] w-full "
                priority
              />{" "}
              <div className="absolute top-0 left-0 transition-all hidden group-hover:flex justify-center items-center gap-4 bg-white/60 h-[150px] w-full">
                <Link
                  className=" hover:bg-green-100 rounded-2xl p-1"
                  href={item?.code || "/"}
                  target="_blank"
                >
                  {" "}
                  <Image
                    src="/gitlink.svg"
                    height={24}
                    width={24}
                    alt={`Project ${index + 1}`}
                    className="h-[24px] w-[24px] "
                    priority
                  />
                </Link>
                <Link
                  className=" hover:bg-green-100 rounded-2xl p-1"
                  href={item?.live || "/"}
                  target="_blank"
                >
                  {" "}
                  <Image
                    src="/eye.svg"
                    height={24}
                    width={24}
                    alt={`Project ${index + 1}`}
                    className="h-[24px] w-[24px] "
                    priority
                  />{" "}
                </Link>
              </div>
            </div>
            <p className=" text-[14px] py-2">{item?.name}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Porfolio;
