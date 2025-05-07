"use client";
import React, { useState } from "react";
import Image from "next/image";

interface NavModel {
  title: string;
  href?: string;
}

const Menu = () => {
  const _navs: NavModel[] = [
    {
      title: "Trang chủ",
      href: "home",
    },
    {
      title: "Cặp đôi",
      href: "couple",
    },
    {
      title: "Sự kiện cưới",
      href: "website-event",
    },
    {
      title: "Chuyện tình yêu",
      href: "our-story",
    },
    {
      title: "Album ảnh cưới",
      href: "album",
    },
  ];

  const [navs] = useState<NavModel[]>(_navs);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed w-full h-16 bg-transparent text-white z-40">
      <nav className="container mx-auto flex justify-between items-center p-5">
        <div className="text-lg font-bold flex items-center justify-center space-x-2">
          <Image
            src="/icons/logo_64.png"
            alt="Wedding"
            width={32}
            height={32}
          ></Image>
          <p>Wedding</p>
        </div>
        <div className="hidden md:flex space-x-4">
          {navs.map((nav: NavModel, i) => (
            <a
              key={i}
              href={"#" + nav.href}
              className="cursor-pointer hover:bg-pink-600 px-3 py-2 rounded"
            >
              {nav.title}
            </a>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-30">
          {navs.map((nav: NavModel, i) => (
            <a
              key={i}
              href={"#" + nav.href}
              className="block cursor-pointer hover:bg-pink-600 px-4 py-2 "
            >
              {nav.title}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Menu;
