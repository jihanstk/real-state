"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { GiCancel } from "react-icons/gi";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { PiUserCircleFill } from "react-icons/pi";

import LoginForm from "../commn/LoginForm/LoginForm";
import NavLink from "../commn/NavLink/NavLink";

import {
  FaFacebookF,
  FaInstagramSquare,
  FaTelegram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutgoingMail } from "react-icons/md";

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

  const [isScrolled, setIsScrolled] = useState(false);
  // Stricky Navbar
  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className=" w-full fixed z-50">
      <div
        // className="hidden md:flex justify-between px-7 text-white border border-1"
        className={`${
          isScrolled
            ? "hidden"
            : "hidden md:flex justify-between px-7 text-white border border-1"
        } duration-300`}
      >
        <div className="flex">
          <div className="border-x">
            <FaFacebookF className="m-3" />
          </div>
          <div className="border-x">
            <FaWhatsapp className="m-3" />
          </div>
          <div className="border-x">
            <FaTelegram className="m-3" />
          </div>
          <div className="border-x">
            <FaTiktok className="m-3" />
          </div>
          <div className="border-x">
            <FaXTwitter className="m-3" />
          </div>
          <div className="border-x">
            <FaYoutube className="m-3" />
          </div>
          <div className="border-x">
            <FaInstagramSquare className="m-3" />
          </div>
          <div className="border-x">
            <MdOutgoingMail className="m-3" />
          </div>
        </div>
        <div className="flex ">
          <p className="border-x flex items-center px-6">Favorites</p>
          <p className="flex items-center px-6 border-x  ">contact@mail.com</p>
          <p className="border-x flex items-center px-6">+1 408 167 1234</p>
        </div>
      </div>
      <div
        className={`${
          isScrolled
            ? "bg-slate-200  w-full text-slate-600 flex justify-between items-center px-7 py-4 top-0"
            : "  text-white flex justify-between items-center px-7 py-4"
        }  navbar transition duration-1000 ease-in-out z-10`}
        style={{ transition: "all 0.3 ease" }}
      >
        {/* <div className="flex justify-between items-center px-7 py-4 text-white"> */}
        <div className="inline-block lg:hidden">
          <button onClick={() => setOpen(!open)}>
            <HiOutlineBars3BottomLeft className="text-3xl" />
          </button>
        </div>
        <div className="">
          <Link href="/">
            {" "}
            <h1 className="md:text-3xl sm:text-2xl text-xl font-bold">
              Homes🏠Hub
            </h1>
          </Link>
        </div>
        <div className="">
          <ul
            className={`lg:flex justify-center items-center gap-3 absolute lg:static font-bold w-full lg:w-auto  pl-20 top-20 lg:pb-0 pb-20 duration-100 ease-in-out ${
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
          <div className="login-form">
            {/* The button to open modal */}
            <label htmlFor="my_modal_6" className=" cursor-pointer">
              <PiUserCircleFill className="text-3xl" />
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my_modal_6" className="modal-toggle" />
            <div className="modal" role="dialog">
              <div className=" modal-box  bg-white ">
                <LoginForm></LoginForm>
                <div className="">
                  <label
                    htmlFor="my_modal_6"
                    className=" cursor-pointer absolute right-2 top-2"
                  >
                    <GiCancel className="text-2xl text-gray-500"></GiCancel>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
