import React from "react";
interface IProps {
  title: string;
  description: string;
  image: string;
}
const CardTypeOne = ({ title, description, image }: IProps) => {
  return (
    <div className="border rounded-2xl border-[#3F6104">
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
      ></div>
      <div>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardTypeOne;
