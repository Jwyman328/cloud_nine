import React from "react";
import NewsFeedItem from "../components/newsFeedItem";

type NewsItems =
  | [
      { text_content: string; photo_url: string },
      { text_content: string; photo_url: string },
      { text_content: string; photo_url: string }
    ]
  | [] | any;
 type Item = { text_content: string; photo_url: string } ;

function createNewsFeedItems(newsItems: NewsItems) {
  const newsFeedItemsList = newsItems.map((item:Item) => {
    return (
      <NewsFeedItem
        key={item.text_content}
        text={item.text_content}
        image={item.photo_url}
      />
    );
  });
  return newsFeedItemsList;
}

export default createNewsFeedItems;
