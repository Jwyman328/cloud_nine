import React, { useEffect, useState } from "react";
import comingSoon from "../images/AlbumComingSoon.png";
import SheWalksBy from "../images/SheWalksBy.png";
import groupPhoto from "../images/groupPhoto.png";
import { withRouter } from "react-router-dom";
import "../sass/AlbumPage.scss";
import "../App.scss";

import createNewsFeedItems from '../helperfunctions/createNewsFeedItems'
import Footer from "../components/Footer";

import NewsFeedItem from "../components/newsFeedItem";
import MenuIcon from "../images/menu-outline.svg";
import useFetchAndSetAPIData from "../customhooks/useFetchAndSetAPIData";
import isAPIDataLoaded from "../helperfunctions/isAPIDataLoaded";
function NewsPage(props) {
  const newsItems = useFetchAndSetAPIData(
    "https://cloudninebackend2.herokuapp.com/latest_news_items/"
  );
  return (
    <div className="AlbumPage">
      <div className="pageTitle">News</div>

      <img className="menuIcon" src={MenuIcon} />

      {isAPIDataLoaded(newsItems) ? (
        <div className="newsFeed">
         {/*  <NewsFeedItem
            text={newsItems[0].text_content}
            image={newsItems[0].photo_url}
          />
          <NewsFeedItem
            text={newsItems[1].text_content}
            image={newsItems[1].photo_url}
          />
          <NewsFeedItem
            text={newsItems[2].text_content}
            image={newsItems[2].photo_url}
          /> */}
          {createNewsFeedItems(newsItems)}
        </div>
      ) : (
        <div> Loading Latest News, Please Wait... </div>
      )}

      <Footer />
    </div>
  );
}

export default withRouter(NewsPage);
