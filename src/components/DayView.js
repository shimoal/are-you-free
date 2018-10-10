import React, { Component } from "react";
import "../styles/DayView.css";

import TimeBlocks from "./TimeBlocks";
import { DAY_NAMES, MONTH_NAMES } from "../helpers/constants";

export default class DayView extends Component {
  render() {
    const { date } = this.props;

    const day = DAY_NAMES[date.getDay()];
    const month = MONTH_NAMES[date.getMonth()];

    return (
      <React.Fragment>
        <h2>
          {day}, {month} {date.getDate()}
        </h2>
        <div id="day-calendar">
          <TimeBlocks abbreviation="AM" />
          <TimeBlocks abbreviation="PM" />
        </div>
      </React.Fragment>
    );
  }
}
