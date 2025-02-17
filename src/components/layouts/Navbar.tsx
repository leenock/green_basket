"use client";

import React, { useState } from "react";
import Image from "next/image";
import logo from "@/assets/images/logo.svg";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

import todoImage from "@/assets/images/icon-todo.svg";
import calendarImage from "@/assets/images/icon-calendar.svg";
import remindersImage from "@/assets/images/icon-reminders.svg";
import planningImage from "@/assets/images/icon-planning.svg";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";


type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
  iconImage?: string;
};

const navItems: NavItem[] = [
  {
    label: "Features",
    link: "#",
    children: [
      {
        label: "Todo list",
        link: "#",
        iconImage: todoImage,
      },
      {
        label: "Calendar",
        link: "#",
        iconImage: calendarImage,
      },
      {
        label: "Reminders",
        link: "#",
        iconImage: remindersImage,
      },
      {
        label: "Planning",
        link: "#",
        iconImage: planningImage,
      },
    ],
  },
  {
    label: "Compnay",
    link: "#",
    children: [
      {
        label: "History",
        link: "#",
      },
      {
        label: "Our Team",
        link: "#",
      },
      {
        label: "Blog",
        link: "#",
      },
    ],
  },
  {
    label: "Careers",
    link: "#",
  },
  {
    label: "About",
    link: "#",
  },
];

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <div className="mx-auto flex  w-full max-w-7xl justify-between px-4 py-5 text-sm">
      {/* left side  */}
      <section className="flex items-center gap-10">
        {/* logo */}
        <Image src={logo} alt="logo" />
        
        <MobileNav />

        {/* navitems */}
        <div className="hidden md:flex items-center gap-4 transition-all">
          {navItems.map((d, i) => (
            <Link
              key={i}
              href={d.link ?? "#"}
              className="relative px-2 py-3 transition-all"
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <p className="flex cursor-pointer items-center gap-2 text-neutral-400">
                <span>{d.label}</span>
                {d.children && (
                  <IoIosArrowDown
                    className={`transition-all ${
                      activeIndex === i ? "rotate-0" : "rotate-180"
                    }`}
                  />
                )}
              </p>
              {/* dropdown */}
              {d.children && activeIndex === i && (
                <div className="absolute right-0 top-10 flex w-auto flex-col gap-1 rounded-lg bg-white py-3 shadow-md">
                  {d.children.map((ch, j) => (
                    <Link
                      key={j}
                      href={ch.link ?? "#"}
                      className="flex items-center py-1 pl-6 pr-8 text-neutral-400 hover:text-black"
                    >
                      {ch.iconImage && (
                        <Image
                          src={ch.iconImage}
                          alt={`${ch.label}-icon`}
                          width={20}
                          height={20}
                        />
                      )}
                      <span className="whitespace-nowrap pl-3">{ch.label}</span>
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
        <button className="h-fit text-neutral-400 transition-all hover:text-black/90">
          Login
        </button>
        <button className="h-fit rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90">
          Register
        </button>
      </section>
      <FiMenu className="cursor-pointer text-4xl md:hidden"/>
    </div>
  );
}

function MobileNav(){
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
      <div className=" h-full w-[65%] bg-white px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose className="cursor-pointer text-4xl "
          />
        </section>
        </div>
    </div>
  );
}