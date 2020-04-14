import React from  'react'
import useFetchAndSetAPIData from "../customhooks/useFetchAndSetAPIData";
import isAPIDataLoaded from "../helperfunctions/isAPIDataLoaded";
import createNewsFeedItems from "../helperfunctions/createNewsFeedItems";
import latestNewsAPILink from "../links/latestNewsAPILink";

function NewsFeed() {
    const newsItems = useFetchAndSetAPIData(latestNewsAPILink);

    return(
        <div>
  {isAPIDataLoaded(newsItems) ? (
            <div className="newsFeed">{createNewsFeedItems(newsItems)}</div>
          ) : (
            <div> Loading Latest News, Please Wait... </div>
          )}
    
        </div>)
      
}

export default NewsFeed;