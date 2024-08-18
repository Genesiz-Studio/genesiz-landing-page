import React from "react";
import HeroArtArrow from "@/public/assets/arts/hero_art_shape.svg";

const HeroSection = () => {
  return (
    <div className="container mx-auto mt-[52px] mb-[36px] px-4">
      <div className="flex justify-around max-md:flex-col">
        <div className="flex items-center max-md:justify-center">
          <HeroArtArrow className="max-md:hidden" />
          <div className="text-left">
            <p className="font-font_warface text-4xl max-md:text-center">
              Genesiz: Ghost City
            </p>
            <p className="max-md:text-center">
              Reclaim the Future, Reshape Humanity
            </p>
          </div>
        </div>
        <div className="flex items-center max-md:justify-center">
          <p className="text-center md:line-clamp-3 w-[497px] text-[#FFFFFFBF] text-sm max-md:mt-5 leading-[20px]">
            {`In the aftermath of a devastating global conflict, two factions
            clash for control of a critical laboratory that holds the key to the
            world's future. Choose your side, master your arsenal, and fight for
            the destiny of mankind in the war-torn ruins of Ghost City.`}
          </p>
          <HeroArtArrow className="rotate-180 max-md:hidden" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
