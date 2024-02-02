"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "./banner.css";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import banner from "../../../assets/banner.jpg";
import Image from "next/image";
const Banner = () => {
  return (
    <div>
      <div className="relative mx-auto">
        <Image
          width={1000}
          height={100}
          style={{ width: "100%", height: "100vh", objectFit: "cover" }}
          className="mx-auto"
          src={banner}
          alt="House Image"
        />
        <div className="absolute top-0 w-full h-full bg-black/50  flex items-center ">
          <div className=" banner-overlay  w-full m-auto p-4 text-center">
            <h1 className="md:text-5xl text-3xl  md:font-bold text-white">
              Find Your Dream Home
            </h1>
            <p className="text-slate-300 text-md mt-5 text-[20px]">
              We are recognized for exceeding client expectations and delivering
              great results through dedication, ease of process, and
              extraordinary services to our worldwide clients.
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Banner;
