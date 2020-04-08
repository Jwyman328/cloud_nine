import React from "react";
import logo from "../logo.svg";
import "../App.scss";
import backgroundVideo from "../videos/cloud9Cut.mp4";
import MenuItem from "../components/menuItem";

import MainLogo from "../images/cloudNineLogo.png";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <div className="video-background-container">
      <video className="video-item" loop muted autoPlay>
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <div className="header">
        <img className="small-logo" src={MainLogo} />
      </div>

      <div className="link-list-container">
        <MenuItem title="Home" route="/" />
        <a
        className='menu_item_link'
          href={
            "https://open.spotify.com/artist/34LKlmDVDzR3K28oG0bCDC?si=jSWlQVdtRMqRFVLz1YMjvQ&fbclid=IwAR0R8iZPia3IIh_PvAAFqpFOZ_wiKj0W9MltqCPmV946Ol5IWM96NlI9ie0"
          }
          target="_blank"
        >
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
