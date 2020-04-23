import React from "react";

type NewFeedItemData = {
  text: string;
  image: string;
};

function NewsFeedItem({ text, image }: NewFeedItemData) {
  return (
    <div className="newsFeed-item">
      <div className="newsFeed-item-content">
        <div className="newsFeed-item-content-text">{text}</div>
      </div>
      <img className="newsFeed-item-image" src={image} />
    </div>
  );
}

export default NewsFeedItem;
