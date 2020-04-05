import React from "react";

function NewsFeedItem(props) {
  return (
    <div className="newsFeed-item">
      <div className="newsFeed-item-content">
        <div className="newsFeed-item-content-text">{props.text}</div>
      </div>
      <img className="newsFeed-item-image" src={props.image} />
    </div>
  );
}

export default NewsFeedItem;
