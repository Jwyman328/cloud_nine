import React, {useEffect, useState} from "react";
import TourItem from './TourItem'
import makeTimeDataReadable from '../helperfunctions/makeTimeDataReadable';
import createTourChart from '../helperfunctions/createTourChart';
import isAPIDataLoaded from "../helperfunctions/isAPIDataLoaded";

function TourChart(props) {
    const [showItems, setShowItems] = useState([])

    const fetchShows =  async() => {
        const data = await fetch('https://cloudninebackend2.herokuapp.com/current_tour_shows/')
        const dataJson = await data.json()
        setShowItems(dataJson)
      }

      useEffect(() => {
        fetchShows()
    }, [])

/*     const createTourChart = () => {
        const allTourItems = showItems.map((showItem) => {
            const [hourTime, dateTime] = makeTimeDataReadable(showItem.date)
            return  <TourItem date={dateTime} time={hourTime} location = {showItem.location} venue={showItem.venue} />
        })
        return allTourItems
    } */
  return (
    <div className="tour-chart">
{/*         <TourItem date='the date' location = 'MA' venue=',y house' />
 */}    
    {isAPIDataLoaded(showItems)? createTourChart(showItems) : <div className='noShows'>No Shows Scheduled </div> }
 </div>
  );
}

export default TourChart;
