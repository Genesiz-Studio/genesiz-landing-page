"use client";
import React, { useEffect, useRef } from "react";
import HeroArtArrow from "@/public/assets/arts/hero_art_shape.svg";
import { IoMdPlay } from "react-icons/io";
import { IoMdPause } from "react-icons/io";
import { HiMiniSpeakerWave } from "react-icons/hi2";
import { HiMiniSpeakerXMark } from "react-icons/hi2";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [isMuted, setIsMuted] = React.useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.onplay = () => {
        setIsPlaying(true);
      };
      video.onpause = () => {
        setIsPlaying(false);
      };
      video.onvolumechange = () => {
        setIsMuted(video.muted);
      };
    }
  }, []);

  return (
    <div className="md:mt-[-73px] relative">
      <div className="rounded-md overflow-hidden relative">
        <div className="flex gap-6 justify-around items-center absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <HeroArtArrow className="max-lg:hidden scale-y-150" />
          <div className="flex flex-col justify-center -mt-2">
            <div className="flex items-center justify-center">
              <div className="text-left">
                <div className="font-font_warface title_text text-center bg-gradient-to-r from-[#80BF10] via-[#95FF32] to-[#82C708] bg-clip-text text-transparent whitespace-nowrap flex gap-x-2 max-sm:flex-col">
                  <div>
                    Genesiz<span className="max-sm:hidden">:</span>
                  </div>
                  <div>Ghost City</div>
                </div>
                <p className="text-center text-shadow-black">
                  Reclaim the Future, Reshape Humanity
                </p>
              </div>
            </div>
            <div className="flex justify-center items-center mt-8 max-sm:hidden">
              <p className="text-center w-[497px] text-[#FFFFFFBF] text-sm max-md:mt-5 leading-[20px] text-shadow-black">
                {`In the aftermath of a devastating global conflict, two factions clash for control of a critical laboratory that holds the key to the world's future. Choose your side, master your arsenal, and fight for the destiny of mankind in the war-torn ruins of Ghost City.`}
              </p>
            </div>
          </div>
          <HeroArtArrow className="rotate-180 max-lg:hidden scale-y-150" />
        </div>
        {/* <div className="absolute z-20 bottom-10 right-10 max-sm:bottom-2 max-sm:right-2 flex gap-2">
          <div
            onClick={() => {
              videoRef.current!.muted = !videoRef.current!.muted;
            }}
            className="h-10 max-sm:h-6 aspect-square grid place-items-center border border-gray-400 text-gray-400 rounded cursor-pointer"
          >
            {isMuted ? (
              <HiMiniSpeakerXMark className="sm:text-2xl" />
            ) : (
              <HiMiniSpeakerWave className="sm:text-2xl" />
            )}
          </div>
          <div
            onClick={() => {
              if (isPlaying) {
                videoRef.current!.pause();
              } else {
                videoRef.current!.play();
              }
            }}
            className="h-10 max-sm:h-6 aspect-square grid place-items-center border border-gray-400 text-gray-400 rounded cursor-pointer"
          >
            {isPlaying ? (
              <IoMdPause className="sm:text-2xl" />
            ) : (
              <IoMdPlay className="sm:text-2xl" />
            )}
          </div>
        </div> */}
        {/* <video
          ref={videoRef}
          className="md:w-screen md:h-screen object-cover"
          src="assets/videos/the_genesiz.mp4"
          autoPlay
          loop
          playsInline
          muted
        /> */}

        <iframe
          width="1038"
          height="584"
          src="https://www.youtube.com/embed/YNB38sB2rhE?autoplay=1&mute=1&controls=0&modestbranding=1&rel=0&showinfo=0&loop=1&playlist=YNB38sB2rhE"
          title="The Genesiz"
          frameBorder="0"
          className="md:w-screen md:h-screen object-cover"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <div className="bg-gradient-to-b from-transparent via-transparent to-[#151515] z-10 w-full h-full absolute top-0 left-0"></div>
      </div>
      <div className="flex justify-center items-center mt-8">
        <p className="text-center w-[497px] text-[#FFFFFFBF] text-sm max-md:mt-5 leading-[20px] sm:hidden">
          {`In the aftermath of a devastating global conflict, two factions clash for control of a critical laboratory that holds the key to the world's future. Choose your side, master your arsenal, and fight for the destiny of mankind in the war-torn ruins of Ghost City.`}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
