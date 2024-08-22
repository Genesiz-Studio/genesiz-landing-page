"use client";
import CardTypeOne from "@/components/Card";
import EmblaCarousel from "@/components/Slider/EmblaCarousel";
import { OPTIONS_EMBLA } from "@/utils/constants";
import React from "react";

const FeatureSection = () => {
  const ListFeature = [
    {
      title: "Web3 gears",
      description:
        "Collect, customize, and master a diverse arsenal of NFT weapons and gear",
      image: "/assets/arts/art_2.jpeg",
    },
    {
      title: "Team up",
      description:
        "Team up with others to execute strategic, coordinated attacks",
      image: "/assets/arts/art_3.jpeg",
    },
    {
      title: "Intense battle",
      description:
        "Engage in intense, fast-paced combat to eliminate your enemies",
      image: "/assets/arts/art_4.png",
    },
    {
      title: "Exploration",
      description:
        "Navigate the ruined cityscape, leveraging its unique environments and hazards",
      image: "/assets/arts/art_5.png",
    },
  ];
  return (
    <div className="text-center py-[92px]">
      <p className="title_text">Gameplay features</p>
      <div className="mt-[84px] cotaniner mx-auto px-0 ">
        <EmblaCarousel
          slides={ListFeature}
          // slides={
          //   <React.Fragment>
          //     {ListFeature.map((item, index) => (
          //       <div className="embla__slide" key={`Card-Feature-${index}`}>
          //         <CardTypeOne
          //           title={item.title}
          //           description={item.description}
          //           image={item.image}
          //           key={`Card-More-${index}`}
          //         />
          //       </div>
          //     ))}
          //   </React.Fragment>
          // }
        />
      </div>
    </div>
  );
};

export default FeatureSection;
