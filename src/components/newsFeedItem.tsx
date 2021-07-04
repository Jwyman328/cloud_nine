import React from "react";

type NewFeedItemData = {
  text: string;
  image: string;
};

function NewsFeedItem({ text, image }: NewFeedItemData) {
  return (
    <div className="newsFeed__item">
      <div className="newsFeed__content">
        <div className="newsFeed__text">{text}</div>
      </div>
      <img className="newsFeed__image" src={image} />
    </div>
  );
}

export default NewsFeedItem;
