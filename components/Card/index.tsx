import React from "react";
interface IProps {
  title: string;
  description: string;
  image: string;
}
const CardTypeOne = ({ title, description, image }: IProps) => {
  return (
    <div className="overflow-hidden border rounded-2xl border-[#3F6104] ">
      <div
        className="relative"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "438px",
          width: "777px",
        }}
      >
        <p className="title_text absolute left-6 bottom-5"> {title}</p>
      </div>
      <div className="border  border-[#82C708] hidden">
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardTypeOne;
