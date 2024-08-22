import React from "react";
import bg_more_section from "@/public/assets/arts/bg-more-section.png";
import EmblaCarousel from "@/components/Slider/EmblaCarousel";

const MoreSection = () => {
  const ListSection = [
    {
      title: "Final coalition",
      description:
        "Attack with relentless force to dismantle Genesiz's ambitions and ensure the survival of the human race as it once was.",
      image: "/assets/arts/art_6.png",
    },
    {
      title: "Genesiz",
      description: `Defend the vision of a new, enhanced humanity. Protect the Neo-Adam project and prove the superiority of your superhuman brethren.`,
      image: "/assets/arts/art_7.png",
    },
  ];

  return (
    <div className="text-center py-[92px] relative">
      <img
        src={bg_more_section.src}
        alt=""
        className="w-full h-auto absolute top-0 left-0 -z-[1] border-b border-primary"
      />
      <p className="title_text">
        Choose your path <br />
        Genesiz or Final coalition
      </p>
      <p className="text-lg mt-9">
        As a warrior in this dystopian battlefield, you must decide your
        allegiance:
      </p>

      <div className="mt-[84px] cotaniner mx-auto px-0 ">
        <EmblaCarousel slides={ListSection} />
      </div>
    </div>
  );
};

export default MoreSection;
