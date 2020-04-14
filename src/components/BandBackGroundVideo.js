import React from "react";
import backgroundVideo from "../videos/cloud9Cut.mp4";

function BandBackGroundVideo() {
  return (
    <video className="video-item" loop muted autoPlay>
      <source src={backgroundVideo} type="video/mp4" />
    </video>
  );
}

export default BandBackGroundVideo;
