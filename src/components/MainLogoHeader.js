import React from "react";
import MainLogo from "../images/cloudNineLogo.png";

function MainLogoHeader() {
  return (
    <div className="header">
      <img className="small-logo" src={MainLogo} />
    </div>
  );
}

export default MainLogoHeader;
