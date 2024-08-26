"use client";
import React from "react";
import LogoIcon from "@/public/assets/icons/logo.svg";
import { IoIosMenu } from "react-icons/io";
import { usePopupNavigator } from "@/app/hooks/usePopupNavigator";
import { usePathname } from "next/navigation";
interface ListProps {
  title: string;
  href: string;
}
const Header = () => {
  const { showPopupNavigator } = usePopupNavigator();

  const path = usePathname();

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
      href: "#",
    },
  ];
  return (
    <header className="py-4 sticky top-0 border-b border-[#82C708] bg-[#151515] z-[90] shadow-card">
      <div className="mx-auto container">
        <div className="flex items-center w-full justify-between">
          <nav className="max-md:hidden flex-1">
            <ul className="flex">
              {ListNavigation.map((item, index) => (
                <li key={index} className="cursor-pointer">
                  <a
                    href={item.href}
                    className={`${
                      index != 0 && "border-l border-[#FFFFFF80]"
                    } uppercase px-4 ${
                      path.includes(item.href) ? "text-primary" : "text-white"
                    }`}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a href="/">
            <div className="flex gap-4 max-md:gap-2 md:justify-center flex-1 cursor-pointer">
              <LogoIcon className="h-10" />

              <div>
                <p className="font-font_warface text-lg leading-[16px]">
                  Genesiz <br /> Ghost City
                </p>
              </div>
            </div>
          </a>
          <div className="flex gap-2 flex-1 justify-end pr-4">
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
