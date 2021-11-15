import React from "react";
import { FaPizzaSlice, FaUserAlt } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { HiLocationMarker } from "react-icons/hi";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { FaSearchLocation } from "react-icons/fa";

const MobileNav = () => {
  return (
    <>
      <div className="items-center justify-between flex w-full md:hidden">
        <div className="w-28">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="logo"
            className="w-full h-full"
          />
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-zomato-400 text-white py-2 px-2 rounded-full">
            Use App
          </button>
          <span className="border p-2 border-blue-300 text-blue-400 rounded-full">
            <FaUserAlt />
          </span>
        </div>
      </div>
    </>
  );
};

const NavMd = () => {
  return (
    <>
      <div className="hidden lg:hidden md:inline container  mx-auto">
        <div className="hidden gap-8 w-full items-center justify-around md:flex">
          <div className="w-28">
            <span className="text-2xl">
              <GiHamburgerMenu />
            </span>
          </div>
          <div className="w-28">
            <img
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

const NavLg = () => {
  return (
    <>
      <div className="hidden lg:inline md:inline container px-20 mx-auto">
        <div className="hidden gap-4 w-full items-center justify-around lg:flex">
          <div className="w-28">
            <img
              src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
              alt="logo"
              className="w-full h-full"
            />
          </div>
          <div className="w-3/4 bg-white shadow-md p-3 flex items-center gap-3 border border-gray-200 rounded">
            <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
              <span className="text-zomato-400">
                <HiLocationMarker />
              </span>
              <input
                type="text"
                placeholder="Chennai"
                className="focus:outline-none"
              />
              <IoMdArrowDropdown />
            </div>
            <div className="flex w-full items-center gap-2">
              <FaSearchLocation />
              <input
                type="text"
                placeholder="Search for restaurants cusine or a dish"
                className="w-full focus:outline-none"
              />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="bg-zomato-400 text-white py-2 px-3 rounded-full">
              Use app
            </button>
            <span className="border p-2 border-blue-300 text-blue-400 rounded-full">
              <FaUserAlt />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

const Navbar = () => {
  return (
    <>
      <div className="p-4 flex bg-white md:hidden lg:hidden shadow-md items-center">
        <MobileNav className="md:hidden lg:hidden" />
      </div>

      <div className="p-4 flex bg-white hidden  lg:inline items-center">
        <NavMd className="hidden md:flex lg:hidden" />
      </div>
      <div className="p-4 flex bg-white hidden  lg:inline items-center">
        <NavLg className="hidden  lg:inline" />
      </div>
    </>
  );
};

export default Navbar;
