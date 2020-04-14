import React, { useEffect, useState } from "react";
import "../sass/AlbumPage.scss";
import "../sass/ShowsPage.scss";

import Footer from "../components/Footer";
import TourChart from "../components/TourChart";
function ShowsPage(props) {
  return (
    <div className="AlbumPage">
      <div className="pageTitle">Shows</div>
      <TourChart />
      <Footer />
    </div>
  );
}

export default ShowsPage;
