"use client";
import CardTypeOne from "@/components/Card";
import React from "react";

const FeatureSection = () => {
  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    speed: 500,
    centerPadding: "60px",
    slidesToShow: 1,
    slidesToScroll: 1,
  };
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
    <div>
      <p className="title_text">Gameplay features</p>
      <div className="slider-container">
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
