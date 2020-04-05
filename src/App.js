import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import backgroundVideo from "./videos/cloud9Cut.mp4";
import MenuItem from "./components/menuItem";
import FooterItem from './components/footerItem'

import MainLogo from "./images/cloudNineLogo.png";
import fbLogo from "./images/logo-facebook.svg";
import youtubeLogo from "./images/logo-youtube.svg";
import spotifyLogo from "./images/logo-spotify.svg";

function App() {
  return (
    <div className="video-background-container">
      <video className="video-item" loop muted autoPlay>
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <div className="header">
        <img className="small-logo" src={MainLogo} />
      </div>



      <div className="link-list-container">
        <MenuItem title="Home" />
        <MenuItem title="Albums" />
        <MenuItem title="Band" />
      </div>
      <div className="footer">
        <div className="footer-social-media">
          <FooterItem logo={fbLogo} link='https://www.facebook.com/menofcloudnine/' />
          <FooterItem logo={youtubeLogo} link='https://www.youtube.com/channel/UCt2dQJzOhBnxb_nrwmd2Nzw/featured'  />
          <FooterItem logo={spotifyLogo} link='https://open.spotify.com/artist/34LKlmDVDzR3K28oG0bCDC?si=jSWlQVdtRMqRFVLz1YMjvQ&fbclid=IwAR0R8iZPia3IIh_PvAAFqpFOZ_wiKj0W9MltqCPmV946Ol5IWM96NlI9ie0' />
        </div>
      </div>
    </div>
  );
}

export default App;
