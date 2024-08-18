import CardTypeOne from "@/components/Card";
import React from "react";
import bg_more_section from "@/public/assets/arts/bg-more-section.png";
import EmblaCarousel from "@/components/Slider/EmblaCarousel";
import { EmblaOptionsType } from "embla-carousel";
import { OPTIONS_EMBLA } from "@/utils/constants";
const MoreSection = () => {
  const ListSection = [
    {
      title: "Genesiz",
      description:
        "Collect, customize, and master a diverse arsenal of NFT weapons and gear",
      image: "/assets/arts/art_1.png",
    },
    {
      title: "Genesiz up",
      description:
        "Collect, customize, and master a diverse arsenal of NFT weapons and gear",
      image: "/assets/arts/art_1.png",
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
        <EmblaCarousel
          options={OPTIONS_EMBLA}
          slides={
            <React.Fragment>
              {ListSection.map((item, index) => (
                <div className="embla__slide" key={`Card-More-${index}`}>
                  <CardTypeOne
                    title={item.title}
                    description={item.description}
                    image={item.image}
                  />
                </div>
              ))}
            </React.Fragment>
          }
        />
      </div>
    </div>
  );
};

export default MoreSection;
