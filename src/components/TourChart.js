import React, {useEffect, useState} from "react";
import TourItem from './TourItem'
import makeTimeDataReadable from '../helperfunctions/makeTimeDataReadable';
import createTourChart from '../helperfunctions/createTourChart';
import isAPIDataLoaded from "../helperfunctions/isAPIDataLoaded";
import useFetchAndSetAPIData from '../customhooks/useFetchAndSetAPIData'

function TourChart(props) {
    const showItems = useFetchAndSetAPIData('https://cloudninebackend2.herokuapp.com/current_tour_shows/')
  return (
    <div className="tour-chart">  
    {isAPIDataLoaded(showItems)? createTourChart(showItems) : <div className='noShows'>No Shows Scheduled </div> }
 </div>
  );
}

export default TourChart;
