import React, { useEffect, useContext, Fragment } from "react";
import comingSoon from "../images/AlbumComingSoon.png";
import SheWalksBy from "../images/SheWalksBy.png";
import groupPhoto from "../images/groupPhoto.png";
import { withRouter } from "react-router-dom";
import "../sass/AlbumPage.scss";
import "../App.scss";

import Footer from "../components/Footer";

import NewsFeedItem from "../components/newsFeedItem";
import MenuIcon from "../images/menu-outline.svg";
import isAPIDataLoaded from "../helperfunctions/isAPIDataLoaded";
import latestNewsAPILink from "../links/latestNewsAPILink";
import PageTitle from "../components/PageTitle";
import NewsFeed from "../components/NewsFeed";
import MenuModal from "../components/MenuModal/menuModal";
import MenuModalState from "../context/menuModalState";

type AppContextInterFace  = {
  menuModalisOpen:boolean | null;
  setMenuModalIsOpen:Function ;
  handleClick:Function;
} 

function NewsPage() {
  const menuModalValue = useContext<AppContextInterFace>(MenuModalState);
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
