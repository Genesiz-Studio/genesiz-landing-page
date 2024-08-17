"use client";
import CardTypeOne from "@/components/Card";
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
      <div className="cotaniner mx-auto">
        <div className="flex gap-4 mt-[84px] px-[134px] max-md:px-10 overflow-auto">
          {ListFeature.map((item, index) => (
            <CardTypeOne
              title={item.title}
              description={item.description}
              image={item.image}
              key={`Card-More-${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
