import React from "react";
import HeroArtArrow from "@/public/assets/arts/hero_art_shape.svg";

const HeroSection = () => {
  return (
    <div className="container mx-auto mt-[52px] mb-[36px] px-4 relative">
      <div className="container mx-auto px-4">
        <div className="rounded-md overflow-hidden relative">
          <div className="flex gap-6 justify-around items-center absolute z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <HeroArtArrow className="max-lg:hidden scale-y-125" />
            <div className="flex flex-col justify-center">
              <div className="flex items-center justify-center">
                <div className="text-left">
                  <div className="font-font_warface title_text text-center bg-gradient-to-r from-[#80BF10] via-[#95FF32] to-[#82C708] bg-clip-text text-transparent whitespace-nowrap flex gap-x-2 max-sm:flex-col">
                    <div>
                      Genesiz<span className="max-sm:hidden">:</span>
                    </div>

                    <div>Ghost City</div>
                  </div>
                  <p className="text-center">
                    Reclaim the Future, Reshape Humanity
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center mt-8 max-sm:hidden">
                <p className="text-center w-[497px] text-[#FFFFFFBF] text-sm max-md:mt-5 leading-[20px] ">
                  {`In the aftermath of a devastating global conflict, two factions
            clash for control of a critical laboratory that holds the key to the
            world's future. Choose your side, master your arsenal, and fight for
            the destiny of mankind in the war-torn ruins of Ghost City.`}
                </p>
              </div>
            </div>
            <HeroArtArrow className="rotate-180 max-lg:hidden scale-y-125" />
          </div>
          <video
            className="brightness-[65%] object-cover w-full h-full"
            src="assets/videos/the_genesiz.mp4"
            autoPlay
            loop
            playsInline
            muted
            // controls
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-8">
        <p className="text-center w-[497px] text-[#FFFFFFBF] text-sm max-md:mt-5 leading-[20px] sm:hidden">
          {`In the aftermath of a devastating global conflict, two factions
            clash for control of a critical laboratory that holds the key to the
            world's future. Choose your side, master your arsenal, and fight for
            the destiny of mankind in the war-torn ruins of Ghost City.`}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
