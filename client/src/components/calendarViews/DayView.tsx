import * as React from "react";
const { Component } = React;
import "../../styles/DayView.css";

import { DAY_NAMES, MONTH_NAMES } from "../../helpers/constants";
import TimeBlocks from "./TimeBlocks";

import IProps from '../../interfaces/ICalendarViewProps';

export default class DayView extends Component<IProps> {
  render() {
    const { selectOption, date } = this.props;

    const day = DAY_NAMES[date.getDay()];
    const month = MONTH_NAMES[date.getMonth()];

    return (
      <React.Fragment>
        <h2>
          {day}, {month} {date.getDate()}
        </h2>
        <div id="day-calendar">
          <TimeBlocks abbreviation="AM" selectOption={selectOption}/>
          <TimeBlocks abbreviation="PM" selectOption={selectOption}/>
        </div>
      </React.Fragment>
    );
  }
}
