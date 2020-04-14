import React, { useEffect, useState } from "react";
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
import NewsFeed from '../components/NewsFeed';

function NewsPage(props) {
  return (
    <div className="AlbumPage">
      <PageTitle titleText="News" />
      <img className="menuIcon" src={MenuIcon} />
      <NewsFeed />
      <Footer />
    </div>
  );
}

export default withRouter(NewsPage);
