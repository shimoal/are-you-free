import React, { Component } from "react";
import "../styles/DayView.css";

import TimeBlocks from "./TimeBlocks";
import { DAYS_OF_WEEK } from "../helpers/constants";

// const DAYS_OF_WEEK = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday"
// ];

export default class DayView extends Component {
  getDayOfWeek() {
    const dayIndex = this.props.date.getDay();
    return DAYS_OF_WEEK[dayIndex];
  }

  render() {
    console.log(this.props.date);
    const day = this.getDayOfWeek();
    console.log(day);

    return (
      <React.Fragment>
        <h2>{day}</h2>
        <div id="day-calendar">
          <TimeBlocks abbreviation="AM" />
          <TimeBlocks abbreviation="PM" />
        </div>
      </React.Fragment>
    );
  }
}
