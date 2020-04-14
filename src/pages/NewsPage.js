import React, { useEffect, useState } from "react";
import comingSoon from "../images/AlbumComingSoon.png";
import SheWalksBy from "../images/SheWalksBy.png";
import groupPhoto from '../images/groupPhoto.png'
import { withRouter } from "react-router-dom";
import "../sass/AlbumPage.scss";
import "../App.scss";

import Footer from '../components/Footer'

import NewsFeedItem from '../components/newsFeedItem'
import MenuIcon from '../images/menu-outline.svg'

function NewsPage(props) {
  const [newsItems, setNewsItems] = useState([])
  
  const fetchItems =  async() => {
      const data = await fetch('https://cloudninebackend2.herokuapp.com/latest_news_items/')
      const dataJson = await data.json()
      setNewsItems(dataJson)
      console.log(dataJson)
    }

    useEffect(() => {
        fetchItems()
    }, [])

  return (
    <div className="AlbumPage">
     <div className='pageTitle'>
         News
     </div>
    
    <img className='menuIcon' src={MenuIcon} />
   
     { newsItems.length> 0? <div className="newsFeed">
        <NewsFeedItem text={newsItems[0].text_content} image={newsItems[0].photo_url} />
        <NewsFeedItem text={newsItems[1].text_content} image={newsItems[1].photo_url} />
        <NewsFeedItem text={newsItems[2].text_content} image={newsItems[2].photo_url} />
  </div> : <div> Loading Latest News, Please Wait... </div> }

  <Footer  />

    </div>
  );
}

export default withRouter(NewsPage);
