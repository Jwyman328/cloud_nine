import React from "react";

type TourDateInformation = {
  date:string;
  time:string;
  location:string;
  venue:string;
} 
function TourItem({date,time,location,venue}:TourDateInformation) {
  return (
    <div className="tour-chart-item">
      <div className="tour-chart-item-element" >{date}</div>
      <div className="tour-chart-item-element">{time}</div>
      <div className="tour-chart-item-element">{location}</div>
      <div className="tour-chart-item-element">{venue}</div>
    </div>
  );
}

export default TourItem;
