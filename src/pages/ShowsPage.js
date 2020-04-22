import React, { useEffect, useState, useContext, Fragment } from "react";
import "../sass/AlbumPage.scss";
import "../sass/ShowsPage.scss";

import Footer from "../components/Footer";
import TourChart from "../components/TourChart";
import PageTitle from "../components/PageTitle";
import MenuModal from "../components/MenuModal/menuModal";

import MenuModalState from "../context/menuModalState";

function ShowsPage(props) {
  const menuModalValue = useContext(MenuModalState);
  const { menuModalisOpen } = menuModalValue;

  return (
    <div className="AlbumPage">
      <MenuModal />

      {menuModalisOpen ? null : (
        <Fragment>
          <PageTitle titleText="Shows" />
          <TourChart />
          <Footer />
        </Fragment>
      )}
    </div>
  );
}

export default ShowsPage;
