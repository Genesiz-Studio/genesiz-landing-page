import React from "react";

const VideoSection = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="aspect-video rounded-md overflow-hidden">
        <video
          // src="assets/videos/the_genesiz.mp4"

          autoPlay
          loop
          playsInline
          muted
          // controls
        />
      </div>
    </div>
  );
};

export default VideoSection;
