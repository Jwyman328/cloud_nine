import React from "react";
import logo from "../logo.svg";
import "../App.scss";
import backgroundVideo from "../videos/cloud9Cut.mp4";
import MenuItem from "../components/menuItem";
import BandBackGroundVideo from "../components/BandBackGroundVideo";
import Footer from "../components/Footer";
import MainLogoHeader from "../components/MainLogoHeader";
import spotifyLink from "../links/spotifyLink";

function HomePage() {
  return (
    <div className="video-background-container">
      <BandBackGroundVideo />
      <MainLogoHeader />

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
