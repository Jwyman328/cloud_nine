import React from "react";
import NewsFeedItem from "../components/newsFeedItem";

function createNewsFeedItems(newsItems) {
  const newsFeedItemsList = newsItems.map((item) => {
    return <NewsFeedItem key = {item.text_content} text={item.text_content} image={item.photo_url} />;
  });
  return newsFeedItemsList;
}

export default createNewsFeedItems;
