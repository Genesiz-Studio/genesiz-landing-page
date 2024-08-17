import React from "react";
import TwitterIcon from "@/public/assets/icons/twitter.svg";
import DiscordIcon from "@/public/assets/icons/discord.svg";
import LogoIcon from "@/public/assets/icons/logo.svg";
import Image from "next/image";
const Footer = () => {
  const ListFooterNav = [
    {
      title: "legal",
      href: "/legal",
    },
    {
      title: "terms of use",
      href: "/terms-of-use",
    },
    {
      title: "Privacy policy",
      href: "/privacy-policy",
    },
    {
      title: "cookie policy",
      href: "/cookie-policy",
    },
    {
      title: "support",
      href: "/support",
    },
  ];
  const ListSocial = [
    {
      title: "twitter",
      href: "https://twitter.com",
      icon: TwitterIcon,
    },
    {
      title: "discrod",
      href: "https://twitter.com",
      icon: DiscordIcon,
    },
  ];
  return (
    <footer className="bg-[#82C7080D]">
      <div
        className="bg-[#82C708] h-[1px] w-full "
        style={{
          boxShadow: "0px 8px 32px 2px #82C7088C",
        }}
      />
      <div className="container mx-auto">
        <div className="flex justify-between py-[52px] px-4 max-md:flex-col gap-4">
          <div className="flex gap-4 items-center">
            <LogoIcon className="h-[62px] w-[61px]" />
            <div>
              <p className="font-font_warface text-[28.68px] leading-normal">
                Genesiz <br /> Ghost City
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <ul className="flex gap-4 max-md:flex-col">
              {ListFooterNav.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.href}
                    className={` text-sm uppercase ${
                      index != 0 && "md:border-l border-[#FFFFFF80] md:pl-4"
                    }`}
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
            {/* <ul className="flex gap-4">
              {ListSocial.map((item, index) => (
                <li key={index} className="relative">
                  <div className="bg-white rounded-full h-8 w-8 absolute left-0 top-0 -z-10"></div>
                  {<item.icon className="h-6 w-6 z-10 absolute left-0" />}
                </li>
              ))}
            </ul> */}
          </div>
        </div>
        <div className="py-[52px] border-t border-[#FFFFFF26] flex flex-col items-center gap-4">
          <Image
            src="/assets/arts/license.png"
            height={85}
            width={146}
            alt="License Image"
          />
          <div className="max-w-[554px]">
            <p className="line-clamp-2 text-[#FFFFFF80] text-center text-sm">
              © 2024 Genesiz, Inc. GENESIZ: GHOST CITY, and RICOCHET ANTI-CHEAT
              are trademarks of Genesiz, Inc. All other trademarks and trade
              names are the property of their respective owners.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
