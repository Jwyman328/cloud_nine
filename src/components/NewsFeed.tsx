import React, { useContext, Fragment } from "react";
import useFetchAndSetAPIData from "../customhooks/useFetchAndSetAPIData";
import isAPIDataLoaded from "../helperfunctions/isAPIDataLoaded";
import createNewsFeedItems from "../helperfunctions/createNewsFeedItems";
import latestNewsAPILink from "../links/latestNewsAPILink";

import menuModalState from "../context/menuModalState";
import "./MenuModal/menuModal.scss";

type NewsApiData = {text_content:string, photo_url: string}[]

type NewsItem =
[] | NewsApiData;

function NewsFeed() {
  const newsItems:NewsItem  = useFetchAndSetAPIData<NewsItem>(latestNewsAPILink);

  return (
    <Fragment>
      {isAPIDataLoaded(newsItems) ? (
        <Fragment>{createNewsFeedItems(newsItems)}</Fragment>
      ) : (
        <div> Loading Latest News, Please Wait... </div>
      )}
    </Fragment>
  );
}

export default NewsFeed;
