import React from "react";

function TourItem(props) {
  return (
    <div className="tour-chart-item">
      <div className="tour-chart-item-element" >{props.date}</div>
      <div className="tour-chart-item-element">{props.time}</div>
      <div className="tour-chart-item-element">{props.location}</div>
      <div className="tour-chart-item-element">{props.venue}</div>
    </div>
  );
}

export default TourItem;
