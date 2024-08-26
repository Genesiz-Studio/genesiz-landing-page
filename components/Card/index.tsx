import React from "react";
interface IProps {
  title: string;
  description: string;
  image: string;
}
const CardTypeOne = ({ title, description, image }: IProps) => {
  return (
    <div className="overflow-hidden border rounded-2xl border-[#3F6104] min-w-[650px] max-lg:min-w-[500px] max-md:min-w-[350px] aspect-video group relative hover:shadow-card">
      <div className="w-full h-full bg-gradient-to-r from-black/40 to-black/20 z-[1] absolute hidden top-0 left-0 group-hover:block transition-all"></div>
      <div className="w-full h-full bg-gradient-to-r from-primary/20 to-primary/10 z-[1] absolute hidden top-0 left-0 group-hover:block transition-all "></div>
      <div
        className="relative"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <p className="title_text max-md:text-2xl absolute left-6 top-[80%] group-hover:top-10 transition-all group-hover:z-[1] duration-700">
          {title}
        </p>
        <p className="text-xl max-w-[80%] text-start left-6 absolute top-[90%] group-hover:top-28 max-md:top-20 opacity-0 group-hover:opacity-100 group-hover:z-[1] duration-700 transition-all">
          {description}
        </p>
      </div>
    </div>
  );
};

export default CardTypeOne;
