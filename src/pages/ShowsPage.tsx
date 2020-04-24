import React, { useEffect, useContext, Fragment } from "react";
import "../sass/AlbumPage.scss";
import "../sass/ShowsPage.scss";

import Footer from "../components/Footer";
import TourChart from "../components/TourChart";
import PageTitle from "../components/PageTitle";
import MenuModal from "../components/MenuModal/menuModal";

import MenuModalState from "../context/menuModalState";

function ShowsPage() {
  const menuModalValue = useContext(MenuModalState);
  const { menuModalisOpen} : any = menuModalValue;

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
