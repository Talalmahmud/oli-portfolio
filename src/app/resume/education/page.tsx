import React from "react";

const page = () => {
  return (
    <div className=" w-full flex flex-col gap-2">
      <p className=" text-white text-[36px]">My Educations</p>
      <p className=" text-[14px] text-slate-300">
        Under the hood, Next.js also abstracts and automatically configures
        tooling needed for React, like bundling, compiling, and more.
      </p>
      <div className=" h-[300px] w-full overflow-auto scrollbar-custom grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className=" bg-slate-600 rounded-md p-4 flex flex-col gap-2">
          <p className=" text-green-500 text-[18px] font-semibold">2023- Bsc</p>
          <p className=" text-white text-[18px] font-semibold">
            Computer Science and Engineer
          </p>

          <div className=" flex gap-2 items-center">
            <ul className="list-none">
              <li className="relative pl-5 text-[14px] text-slate-300">
                <span className="absolute left-0 top-[5px] h-[8px] w-[8px] rounded-full bg-green-500"></span>
                Institute:Manarat International University
              </li>
            </ul>
          </div>
        </div>
        <div className=" bg-slate-600 rounded-md p-4 flex flex-col gap-2">
          <p className=" text-green-500 text-[18px] font-semibold">
            2017- Diploma
          </p>
          <p className=" text-white text-[18px] font-semibold">
            Electronics Technology
          </p>

          <div className=" flex gap-2 items-center">
            <ul className="list-none">
              <li className="relative pl-5 text-[14px] text-slate-300">
                <span className="absolute left-0 top-[5px] h-[8px] w-[8px] rounded-full bg-green-500"></span>
                Dhaka Polytechnic Institute
              </li>
            </ul>
          </div>
        </div>
        <div className=" bg-slate-600 rounded-md p-4 flex flex-col gap-2">
          <p className=" text-green-500 text-[18px] font-semibold">2012- SSC</p>
          <p className=" text-white text-[18px] font-semibold">Science</p>

          <div className=" flex gap-2 items-center">
            <ul className="list-none">
              <li className="relative pl-5 text-[14px] text-slate-300">
                <span className="absolute left-0 top-[5px] h-[8px] w-[8px] rounded-full bg-green-500"></span>
                Hatimara High School
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
