import React, { Component } from "react";
import "../styles/DayView.css";

import TimeBlocks from "./TimeBlocks";
import { DAYS_OF_WEEK } from "../helpers/constants";

export default class DayView extends Component {
  getDayOfWeek() {
    const dayIndex = this.props.date.getDay();
    return DAYS_OF_WEEK[dayIndex];
  }

  render() {
    const day = this.getDayOfWeek();

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
