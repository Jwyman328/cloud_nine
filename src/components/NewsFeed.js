import React, { useContext } from "react";
import useFetchAndSetAPIData from "../customhooks/useFetchAndSetAPIData";
import isAPIDataLoaded from "../helperfunctions/isAPIDataLoaded";
import createNewsFeedItems from "../helperfunctions/createNewsFeedItems";
import latestNewsAPILink from "../links/latestNewsAPILink";

import menuModalState from "../context/menuModalState";
import './MenuModal/menuModal.scss'
function NewsFeed() {

  const newsItems = useFetchAndSetAPIData(latestNewsAPILink);

  return (
    <div  >
      {isAPIDataLoaded(newsItems) ? (
        <div >{createNewsFeedItems(newsItems)}</div>
      ) : (
        <div> Loading Latest News, Please Wait... </div>
      )}
    </div>
  );
}

export default NewsFeed;
