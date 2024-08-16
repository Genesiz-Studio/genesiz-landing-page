import React from "react";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import VideoSection from "./VideoSection";
import AboutUsSection from "./AboutUsSection";
import JoinSection from "./JoinSection";
import MoreSection from "./MoreSection";

const HomePage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <VideoSection />
      <AboutUsSection />
      <MoreSection />
      <FeatureSection />
      <JoinSection />
    </React.Fragment>
  );
};

export default HomePage;
