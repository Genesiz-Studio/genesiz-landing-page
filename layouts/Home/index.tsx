import React from "react";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import VideoSection from "./VideoSection";
import AboutUsSection from "./AboutUsSection";
import JoinSection from "./JoinSection";
import MoreSection from "./MoreSection";

const HomePage = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      <HeroSection />
      <VideoSection />
      <AboutUsSection />
      <MoreSection />
      <FeatureSection />
      <JoinSection />
    </div>
  );
};

export default HomePage;
