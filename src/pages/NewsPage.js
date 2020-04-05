import React from "react";
import comingSoon from "../images/AlbumComingSoon.png";
import SheWalksBy from "../images/SheWalksBy.png";
import groupPhoto from '../images/groupPhoto.png'
import { withRouter } from "react-router-dom";
import "../sass/AlbumPage.scss";
import Footer from '../components/Footer'

import NewsFeedItem from '../components/newsFeedItem'
import MenuIcon from '../images/menu-outline.svg'

function NewsPage(props) {

  return (
    <div className="AlbumPage">
     <div className='pageTitle'>
         News
     </div>
    
    <img className='menuIcon' src={MenuIcon} />
   
      <div className="newsFeed">
        <NewsFeedItem text='The countdown begins' image={comingSoon} />
        <NewsFeedItem text="Check out our single, All the Way Back Home. More coming soon!!" image={SheWalksBy} />
        <NewsFeedItem text='We are pleased to announce the release of our first single, "She Walks By (In My Head)."' image={groupPhoto} />

        
      </div>
      <Footer />
    </div>
  );
}

export default withRouter(NewsPage);
