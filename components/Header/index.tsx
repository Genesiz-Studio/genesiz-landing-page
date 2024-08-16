import React from "react";
import LogoIcon from "@/public/assets/icons/logo.svg";
import Image from "next/image";
interface ListProps {
  title: string;
  href: string;
}
const Header = () => {
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
          <nav className="">
            <ul className="flex ">
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
          <div className="flex gap-4 items-center">
            <LogoIcon className="h-10" />

            <div>
              <p className="font-font_warface text-lg">
                Genesiz <br /> Ghost City
              </p>
            </div>
          </div>
          <button className="border border-[#82C708] py-1 px-6 shadow-primary uppercase bg-[#151515">
            Join waitlist
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
