import CardTypeOne from "@/components/Card";
import React from "react";
import bg_more_section from "@/public/assets/arts/bg-more-section.png";

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
      <div className="cotaniner mx-auto">
        <div className="flex gap-4 mt-[84px] px-[134px] max-md:px-10 overflow-auto">
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
