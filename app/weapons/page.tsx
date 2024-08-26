import art2 from "@/public/assets/arts/art_2.jpeg";

const Weapons = () => {
  return (
    <div className="w-screen h-screen relative">
      <img
        src={art2.src}
        alt=""
        className="w-full h-full object-cover brightness-50"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black flex items-center justify-center">
        <p className="text-white text-4xl font-font_warface text-shadow-primary title_text animate-fade-up">
          Coming soon
        </p>
      </div>
    </div>
  );
};

export default Weapons;
