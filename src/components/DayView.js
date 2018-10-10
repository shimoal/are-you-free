import React, { Component } from "react";
import "../styles/DayView.css";

import TimeBlocks from "./TimeBlocks";
import { DAY_NAMES, MONTH_NAMES } from "../helpers/constants";

export default class DayView extends Component {
  getDayName() {
    const dayIndex = this.props.date.getDay();
    return DAY_NAMES[dayIndex];
  }

  getMonthName() {
    const monthIndex = this.props.date.getMonth();
    return MONTH_NAMES[monthIndex];
  }

  render() {
    const day = this.getDayName();
    const month = this.getMonthName();
    const date = this.props.date.getDate();

    return (
      <React.Fragment>
        <h2>
          {day}, {month} {date}
        </h2>
        <div id="day-calendar">
          <TimeBlocks abbreviation="AM" />
          <TimeBlocks abbreviation="PM" />
        </div>
      </React.Fragment>
    );
  }
}
