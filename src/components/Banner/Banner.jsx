"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "./banner.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// import required modules
import Image from "next/image";
import { Autoplay, EffectFade } from "swiper/modules";
const Banner = () => {
  const houseImages = [
    {
      path: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      path: "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      path: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      path: "https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];
  return (
    <div className="mt-20">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
        className="mySwiper"
      >
        {houseImages.map((image, i) => (
          <SwiperSlide key={i} className=" w-full ">
            <div className="relative mx-auto" style={{ width: "97%" }}>
              <Image
                width={1000}
                height={1000}
                style={{ width: "100%", height: "600px", objectFit: "cover" }}
                className="mx-auto  rounded-3xl"
                src={image.path}
                alt="House Image"
              />
              <div className="absolute top-0 w-full h-full bg-black/50 rounded-3xl flex items-center ">
                <div className=" banner-overlay  w-full md:ml-32 p-4 md:text-left text-center">
                  <h1 className="md:text-5xl text-5xl  md:font-bold text-white">
                    We will help you find your{" "}
                    <span className="text-green-300">Wonderful</span> home
                  </h1>
                  <p className="text-slate-300 text-md mt-5 text-[20px]">
                    A great plateform to buy, sell and rent your properties
                    without any agent or commisions.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* TODO Sell and search option with tab */}
      <div></div>
    </div>
  );
};

export default Banner;
