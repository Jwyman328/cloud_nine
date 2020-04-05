import React from "react";
import "../App.scss";

import FooterItem from '../components/footerItem'

import MainLogo from "../images/cloudNineLogo.png";
import fbLogo from "../images/logo-facebook.svg";
import youtubeLogo from "../images/logo-youtube.svg";
import spotifyLogo from "../images/logo-spotify.svg";

function Footer(props) {
  return (
    <div className="footer">
      <div className="footer-social-media">
        <FooterItem
          logo={youtubeLogo}
          link="https://www.youtube.com/channel/UCt2dQJzOhBnxb_nrwmd2Nzw/featured"
        />
        <FooterItem
          logo={spotifyLogo}
          link="https://open.spotify.com/artist/34LKlmDVDzR3K28oG0bCDC?si=jSWlQVdtRMqRFVLz1YMjvQ&fbclid=IwAR0R8iZPia3IIh_PvAAFqpFOZ_wiKj0W9MltqCPmV946Ol5IWM96NlI9ie0"
        />
        <FooterItem
          logo={fbLogo}
          link="https://www.facebook.com/menofcloudnine/"
        />
      </div>
    </div>
  );
}

export default Footer;
