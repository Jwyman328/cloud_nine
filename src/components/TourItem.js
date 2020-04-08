import React from "react";

function TourItem(props) {
  return (
    <div className="tour-chart-item">
      <div>{props.date}</div>
      <div>{props.time}</div>
      <div>{props.location}</div>
      <div>{props.venue}</div>
    </div>
  );
}

export default TourItem;
