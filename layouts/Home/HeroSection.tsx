import React from "react";
import HeroArtArrow from "@/public/assets/arts/hero_art_shape.svg";

const HeroSection = () => {
  return (
    <div className="container mx-auto mt-[120px] mb-[36px]">
      <div className="flex justify-around">
        <div className="flex items-center ">
          <HeroArtArrow />
          <div className="text-left">
            <p className="font-font_warface text-4xl">Genesiz: Ghost City</p>
            <p>Reclaim the Future, Reshape Humanity</p>
          </div>
        </div>
        <div className="flex items-center">
          <p className="text-center line-clamp-3  w-[497px] text-sm ">
            {` In the aftermath of a devastating global conflict, two factions
            clash for control of a critical laboratory that holds the key to the
            world's future. Choose your side, master your arsenal, and fight for
            the destiny of mankind in the war-torn ruins of Ghost City.`}
          </p>
          <HeroArtArrow className="rotate-180" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
