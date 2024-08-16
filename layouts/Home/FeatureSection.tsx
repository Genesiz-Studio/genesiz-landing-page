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
        "Collect, customize, and master a diverse arsenal of NFT weapons and gear",
      image: "/assets/arts/art_3.jpeg",
    },
  ];
  return (
    <div className="container mx-auto">
      <p className="title_text">Gameplay features</p>

      <div className="mt-9">
        {ListFeature.map((item, index) => (
          <CardTypeOne
            title={item.title}
            key={`card-feature-${index}`}
            description={item.description}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
