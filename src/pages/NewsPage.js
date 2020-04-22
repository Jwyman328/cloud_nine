import React, { useEffect, useState, useContext, Fragment } from "react";
import comingSoon from "../images/AlbumComingSoon.png";
import SheWalksBy from "../images/SheWalksBy.png";
import groupPhoto from "../images/groupPhoto.png";
import { withRouter } from "react-router-dom";
import "../sass/AlbumPage.scss";
import "../App.scss";

import createNewsFeedItems from "../helperfunctions/createNewsFeedItems";
import Footer from "../components/Footer";

import NewsFeedItem from "../components/newsFeedItem";
import MenuIcon from "../images/menu-outline.svg";
import useFetchAndSetAPIData from "../customhooks/useFetchAndSetAPIData";
import isAPIDataLoaded from "../helperfunctions/isAPIDataLoaded";
import latestNewsAPILink from "../links/latestNewsAPILink";
import PageTitle from "../components/PageTitle";
import NewsFeed from "../components/NewsFeed";
import MenuModal from "../components/MenuModal/menuModal";
import menuModalState from "../context/menuModalState";

function NewsPage(props) {
  const menuModalValue = useContext(menuModalState);
  const { menuModalisOpen} = menuModalValue;

  return (
    <div className={"AlbumPage"}>
      <MenuModal />
      {menuModalisOpen ? null : (
        <Fragment>
          <PageTitle titleText="News" />
          <NewsFeed />
          <Footer />
        </Fragment>
      )}
    </div>
  );
}

export default withRouter(NewsPage);
