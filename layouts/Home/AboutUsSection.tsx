import React from "react";
import AboutTopArt from "@/public/assets/arts/frame_about_1.svg";
import AboutTopArt_2 from "@/public/assets/arts/frame_about_2.svg";
import MapArt from "@/public/assets/arts/map_art.svg";
import AboutArt from "@/public/assets/arts/about_art.svg";
const AboutUsSection = () => {
  return (
    <div className="py-[50px] about_section px-4">
      <div className="container mx-auto ">
        <div className="flex flex-col gap-8 items-center ">
          <p
            className="font-font_warface title_text text-[52px] text-center max-w-[695px] z-10 "
            style={{
              textShadow: "0px 0px 16px #82C7088C",
            }}
          >
            The Conflict That Defines an Era
          </p>
          <MapArt className="z-10" />
        </div>
        <div className="mt-[52px] flex gap-4 justify-center">
          <div className=" p-4 border border-[#82C708] rounded-2xl flex flex-col max-w-[750px] gap-8 z-10">
            <AboutTopArt />
            <p className="">
              The year is 2245, a century after the echoes of World War IV
              ravaged the globe. From the ashes, a new nation emerged - Genesiz,
              driven by the audacious Neo-Adam project to forge a superhuman
              future
            </p>
            <p className="">
              {`But this vision for a transformed humanity faces fierce opposition
          from the Final Coalition, an alliance of the world's remaining powers.
          In the heart of the desolate Ghost City, the ultimate showdown will
          unfold, where strategy, skill, and survival instincts will determine
          the fate of the world.`}
            </p>
            <div className="flex justify-end max-md:hidden">
              <AboutTopArt_2 />
            </div>
          </div>
          <AboutArt className="z-10 max-md:hidden" />
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
