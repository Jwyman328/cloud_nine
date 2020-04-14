import React, { useEffect, useState } from "react";
import "../sass/AlbumPage.scss";
import "../sass/ShowsPage.scss";

import Footer from "../components/Footer";
import TourChart from "../components/TourChart";
import PageTitle from '../components/PageTitle'

function ShowsPage(props) {
  return (
    <div className="AlbumPage">
      <PageTitle titleText='Shows' />
      <TourChart />
      <Footer />
    </div>
  );
}

export default ShowsPage;
