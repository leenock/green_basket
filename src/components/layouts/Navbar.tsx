"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import logo from "@/assets/images/logo4.svg";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

import todoImage from "@/assets/images/icon-todo.svg";
import calendarImage from "@/assets/images/icon-calendar.svg";
import remindersImage from "@/assets/images/icon-reminders.svg";
import planningImage from "@/assets/images/icon-planning.svg";

import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
  iconImage?: string;
};

const navItems: NavItem[] = [
  {
    label: "SHOP WITH US",
    link: "#",
    children: [
      {
        label: "Fruits",
        link: "#",
        iconImage: todoImage,
      },
      {
        label: "Vegetables",
        link: "#",
        iconImage: calendarImage,
      },
      {
        label: "Dairy & Eggs",
        link: "#",
        iconImage: remindersImage,
      },
      {
        label: "Meat & Poultry",
        link: "#",
        iconImage: planningImage,
      },
    ],
  },
  {
    label: "HOW IT WORKS",
    link: "#",
  },
  {
    label: "ABOUT",
    link: "#",
  },
  {
    label: "CONTACT US",
    link: "#",
  },
];

export default function Navbar() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenue] = useState(false);
  function openSideMenu() {
    setSideMenue(true);
  }
  function closeSideMenu() {
    setSideMenue(false);
  }
  return (
    <div className="mx-auto flex  w-full max-w-7xl justify-between px-4 py-5 text-sm">
      {/* left side  */}
      <section ref={animationParent} className="flex items-center gap-10">
        {/* logo */}
        <Image src={logo} alt="logo" width={110} height={50} />  {/* Example: 100px wide, 50px tall */}

        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}

        {/* navitems */}
        <div className="hidden md:flex items-center gap-4 transition-all">
          {navItems.map((d, i) => (
            <Link
              key={i}
              href={d.link ?? "#"}
              className="relative group  px-2 py-3 transition-all "
            >
              <p className="flex cursor-pointer items-center gap-2 text-neutral-800 group-hover:text-black font-bold">
                <span>{d.label}</span>
                {d.children && (
                  <IoIosArrowDown className=" rotate-180  transition-all group-hover:rotate-0" />
                )}
              </p>
              {/* dropdown */}
              {d.children && (
                <div className="absolute right-0   top-10 hidden w-auto  flex-col gap-1   rounded-lg bg-white py-3 shadow-md  transition-all group-hover:flex ">
                  {d.children.map((ch, i) => (
                    <Link
                      key={i}
                      href={ch.link ?? "#"}
                      className=" flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black "
                    >
                      {/* image */}
                      {ch.iconImage && (
                        <Image
                          src={ch.iconImage}
                          alt={`${ch.label}-icon`}
                          width={20}
                          height={20}
                        />
                      )}
                      {/* Item */}
                      <span className="whitespace-nowrap   pl-3 ">
                        {ch.label}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </section>
      {/* right side  navs*/}
      <section className=" hidden md:flex   items-center gap-8 ">
        <button className="h-fit text-neutral-800 transition-all hover:text-black/90 font-extrabold ">
          Login
        </button>
        <button className="h-fit rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-800 transition-all hover:border-black hover:text-black/90 font-bold">
          Register
        </button>
      </section>
      <FiMenu
        onClick={openSideMenu}
        className="cursor-pointer text-4xl md:hidden"
      />
    </div>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
      <div className=" h-full w-[65%] bg-white px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl "
          />
        </section>
        <div className="flex flex-col text-base gap-2 transition-all">
          {navItems.map((d, i) => (
            <SingleNavItem
              key={i}
              label={d.label}
              iconImage={d.iconImage}
              link={d.link}
            >
              {d.children}
            </SingleNavItem>
          ))}
        </div>
        <section className="  flex  flex-col   gap-8  mt-4 items-center">
          <button className="h-fit text-neutral-800 transition-all hover:text-black/90 font-extrabold">
            Login
          </button>
          <button className="w-full  max-w-[200px]  rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-800 transition-all hover:border-black hover:text-black/90 font-extrabold">
            Register
          </button>
        </section>
      </div>
    </div>
  );
}

function SingleNavItem(d: NavItem) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    return setItem(!isItemOpen);
  }
  return (
    <Link
      ref={animationParent}
      onClick={toggleItem}
      href={d.link ?? "#"}
      className="relative px-2 py-3 transition-all "
    >
      <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black">
        <span>{d.label}</span>
        {d.children && (
          <IoIosArrowDown
            className={`text-xs transition-all  ${isItemOpen && " rotate-180"}`}
          />
        )}
      </p>
      {/* dropdown */}
      {isItemOpen && d.children && (
        <div className=" w-auto  flex-col gap-1   rounded-lg bg-white py-3  transition-all flex ">
          {d.children.map((ch, i) => (
            <Link
              key={i}
              href={ch.link ?? "#"}
              className=" flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black "
            >
              {/* image */}
              {ch.iconImage && (
                <Image
                  src={ch.iconImage}
                  alt={`${ch.label}-icon`}
                  width={20}
                  height={20}
                />
              )}
              {/* Item */}
              <span className="whitespace-nowrap   pl-3 ">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </Link>
  );
}
