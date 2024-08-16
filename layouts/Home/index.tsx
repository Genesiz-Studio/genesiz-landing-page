import React from "react";
import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import VideoSection from "./VideoSection";
import AboutUsSection from "./AboutUsSection";
import JoinSection from "./JoinSection";

const HomePage = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <VideoSection />
      <AboutUsSection />
      <FeatureSection />
      <JoinSection />
    </React.Fragment>
  );
};

export default HomePage;
