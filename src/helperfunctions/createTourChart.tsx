import React from 'react'
import TourItem from '../components/TourItem'
import makeTimeDataReadable from './makeTimeDataReadable';

type ShowItems = {date:string,location:string, venue:string}[];

const createTourChart = (showItems:ShowItems) => {
    const allTourItems = showItems.map((showItem) => {
        const [hourTime, dateTime] = makeTimeDataReadable(showItem.date)
        return  <TourItem date={dateTime} time={hourTime} location = {showItem.location} venue={showItem.venue} />
    })
    return allTourItems
}

export default createTourChart