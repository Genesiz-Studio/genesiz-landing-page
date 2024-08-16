import CardTypeOne from "@/components/Card";
import React from "react";

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
    <div className="text-center py-[256px]">
      <p className="title_text">Choose your path Genesiz or Final coalition</p>
      <p className="text-lg mt-9">
        As a warrior in this dystopian battlefield, you must decide your
        allegiance:
      </p>
      <div className="cotaniner mx-auto">
        <div className="flex gap-4 mt-[84px]">
          {ListSection.map((item, index) => (
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

export default MoreSection;
