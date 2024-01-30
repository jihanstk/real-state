"use client";
import Link from "next/link";
import { useState } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { PiUserCircleFill } from "react-icons/pi";
import NavLink from "../commn/NavLink/NavLink";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const navLists = [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      title: "Rents",
      path: "/rents",
    },
    {
      id: 3,
      title: "Sells",
      path: "/sells",
    },
    {
      id: 4,
      title: "About US",
      path: "/about",
    },
    {
      id: 5,
      title: "Contact US",
      path: "/contact",
    },
  ];
  return (
    <div className="flex justify-between items-center px-7 fixed w-full z-50 bg-white py-4">
      <div className="inline-block lg:hidden">
        <button onClick={() => setOpen(!open)}>
          <HiOutlineBars3BottomLeft className="text-3xl" />
        </button>
      </div>
      <div className="">
        <Link href="/">
          {" "}
          <h1 className="md:text-3xl sm:text-2xl text-xl font-bold">
            House🏠Hub
          </h1>
        </Link>
      </div>
      <div className="">
        <ul
          className={`lg:flex justify-center items-center gap-3 absolute lg:static bg-white font-bold w-full lg:w-auto  pl-20 top-20 lg:pb-0 pb-20 duration-1000 ease-in-out ${
            !open ? "-left-[100rem]" : "left-0"
          }`}
        >
          {navLists.map((list) => {
            return (
              <NavLink key={list.id} href={list.path}>
                <li className="uppercase text-md">{list.title}</li>
              </NavLink>
            );
          })}
        </ul>
      </div>
      <div className="flex justify-evenly items-center ">
        <div className="hidden sm:inline-block">
          <a
            href="tel:01888351004"
            className="flex items-center text-md font-bold sm:px-6"
          >
            {" "}
            <BsTelephoneFill className="text-green-800" /> <p>01888351004</p>
          </a>
        </div>
        <p className="text-3xl">
          <PiUserCircleFill />
        </p>
      </div>
    </div>
  );
};

export default Navigation;
