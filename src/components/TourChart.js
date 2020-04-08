import React, {useEffect, useState} from "react";
import TourItem from './TourItem'

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
    const splitTime = (fullTime) => {
        let [dateTime1,hourTimeZ] = fullTime.split('T')
        let [hourTime,z] = hourTimeZ.split('Z')
        let[year,month,day] = dateTime1.split('-')
        let dateTime = `${month}-${day}-${year}`
        return ([hourTime, dateTime])
    }
    const createTourChart = () => {
        const allTourItems = showItems.map((showItem) => {
            const [hourTime, dateTime] = splitTime(showItem.date)
            return  <TourItem date={dateTime} time={hourTime} location = {showItem.location} venue={showItem.venue} />
        })
        return allTourItems
    }
  return (
    <div className="tour-chart">
{/*         <TourItem date='the date' location = 'MA' venue=',y house' />
 */}    
    {showItems.length > 0?createTourChart() : <div> No Shows Scheduled </div> }
 </div>
  );
}

export default TourChart;
