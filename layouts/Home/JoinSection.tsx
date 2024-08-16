import React from "react";

const JoinSection = () => {
  return (
    <div className="py-[268px] flex flex-col items-center gap-9 join_section">
      <p className="title_text z-10">Join the Battle for the Future</p>
      <p className="text-center text-lg max-w-[796px] line-clamp-2 z-10">
        {`The war for Ghost City's laboratory has begun. Will you fight to defend
        a new era of humanity, or stand with those who seek to preserve the
        past? The choice is yours.`}
      </p>
    </div>
  );
};

export default JoinSection;
