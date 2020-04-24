import React, { useRef, useEffect, useState } from "react";
import logo from "../logo.svg";
import "../App.scss";
//import backgroundVideo from "../videos/cloud9Cut.mp4";
import MenuItem from "../components/menuItem";
import BandBackGroundVideo from "../components/BandBackGroundVideo";
import Footer from "../components/Footer";
import MainLogoHeader from "../components/MainLogoHeader";
import spotifyLink from "../links/spotifyLink";
import groupPhoto from "../images/groupPhoto.png";


type containerElement = HTMLDivElement | null;

function HomePage() {
  const [showVideo, setShowVideo] = useState<boolean>(true);

  const handleRef = (el: containerElement) => {
    if (el) {
      const width: number = el.getBoundingClientRect().width;
      if (width > 530) {
        setShowVideo(true);
      } else {
        setShowVideo(false);
      }
    } else {
      setShowVideo(false);
    }
  };
  return (
    <div ref={(el) => handleRef(el)} className="video-background-container">
      <MainLogoHeader />
      {showVideo ? (
        <BandBackGroundVideo />
      ) : (
        <div className="mobileBackground"> </div>
      )}

      <div className="link-list-container">
        <MenuItem title="Home" route="/" />
        <a className="menu_item_link" href={spotifyLink} target="_blank">
          <MenuItem title="Music" />
        </a>

        <MenuItem title="Shows" route="/Shows" />
        <MenuItem title="news" route="/News" />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
