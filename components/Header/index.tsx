"use client";
import React from "react";
import LogoIcon from "@/public/assets/icons/logo.svg";
import { IoIosMenu } from "react-icons/io";
import { usePopupNavigator } from "@/app/hooks/usePopupNavigator";
interface ListProps {
  title: string;
  href: string;
}
const Header = () => {
  const { showPopupNavigator } = usePopupNavigator();

  const ListNavigation: ListProps[] = [
    {
      title: "Characters",
      href: "/characters",
    },
    {
      title: "Weapons",
      href: "/weapons",
    },
    {
      title: "Blog",
      href: "/blog",
    },
  ];
  return (
    <header className=" py-4 sticky top-0 border-b border-[#82C708] bg-[#151515] z-[90]">
      <div className="mx-auto container">
        <div className="flex items-center w-full justify-between">
          <nav className="max-md:hidden">
            <ul className="flex">
              {ListNavigation.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className={`${
                      index != 0 && "border-l border-[#FFFFFF80]"
                    }text-white uppercase px-4`}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex gap-4 max-md:gap-2 items-center">
            <LogoIcon className="h-10" />

            <div>
              <p className="font-font_warface text-lg leading-[16px]">
                Genesiz <br /> Ghost City
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="border border-[#82C708] py-1 px-6 max-md:px-4 shadow-primary uppercase bg-[#151515]">
              <p>Join waitlist</p>
            </button>
            <IoIosMenu
              onClick={() => showPopupNavigator()}
              className="text-white text-3xl md:hidden cursor-pointer"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
