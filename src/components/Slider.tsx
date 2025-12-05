"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

export default function Slider() {
  return (
    <div className="slider-container bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-10">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="swiper-custom"
      >
        {/* Slide 1 */}

        {/* Additional Slides */}
        {[...Array(8)].map((_, i) => (
          <SwiperSlide key={i}>
            <div className="flex flex-col lg:flex-row items-center gap-8 p-6">
              {/* Left Content */}
              <div className="text-content w-full lg:w-1/2">
                <h2 className="text-6xl font-extrabold text-green-500 mb-4">
                  01
                </h2>
                <h3 className="text-3xl lg:text-5xl font-bold text-white mb-4">
                  Social Media
                </h3>
                <p className="text-lg text-gray-400 mb-4">
                  Under the hood, Next.js also abstracts and automatically
                  configures tooling needed for React, like bundling, compiling,
                  and more.
                </p>
                <p className="text-lg text-gray-400">
                  Stack:{" "}
                  <span className="font-bold italic text-green-400">
                    HTML, CSS, Tailwind CSS, Material UI, React Js, Next Js
                  </span>
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <Link
                    href="https://github.com/Talalmahmud/social-media.git"
                    target="_blank"
                  >
                    <button className="p-2 border border-green-400 text-green-400 hover:bg-green-400 hover:text-white transition duration-300 rounded-full">
                      GitHub
                    </button>
                  </Link>
                  <Link
                    href="https://social-media-2023.netlify.app/"
                    target="_blank"
                  >
                    <button className="p-2 bg-green-400 text-white hover:bg-green-600 transition duration-300 rounded-full">
                      Visit Site
                    </button>
                  </Link>
                </div>
              </div>
              {/* Right Image */}
              <div className="image-content w-full lg:w-1/2 relative h-64 lg:h-96">
                <Image
                  src="/social.png"
                  alt="Social Media"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                  priority
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
