import React from "react";

type TourDateInformation = {
  date:string;
  time:string;
  location:string;
  venue:string;
} 
function TourItem({date,time,location,venue}:TourDateInformation) {
  return (
    <div className="tour-chart__event">
      <div className="tour-chart__data" >{date}</div>
      <div className="tour-chart__data">{time}</div>
      <div className="tour-chart__data">{location}</div>
      <div className="tour-chart__data">{venue}</div>
    </div>
  );
}

export default TourItem;
