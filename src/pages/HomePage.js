import React from "react";
import logo from "../logo.svg";
import "../App.scss";
import backgroundVideo from "../videos/cloud9Cut.mp4";
import MenuItem from "../components/menuItem";

import MainLogo from "../images/cloudNineLogo.png";
import Footer from '../components/Footer'

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
        <MenuItem title="Home" route='/' />
        <MenuItem title="Music" route='/Music' />
        <MenuItem title="Shows" route='/Shows' />
        <MenuItem title="news" route='/News' />

      </div>
     <Footer />
    </div>
  );
}

export default HomePage;
