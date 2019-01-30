import * as React from "react";
const { Component } = React;
import "../../styles/DayView.css";

import { DAY_NAMES, MONTH_NAMES } from "../../helpers/constants";
import TimeBlocks from "./TimeBlocks";

import ICalendarProps from "../../interfaces/ICalendarViewProps";

interface IProps {
  options: Array<string>;
}

export default class DayView extends Component<ICalendarProps & IProps> {
  render() {
    const { selectOption, date, options } = this.props;

    const day = DAY_NAMES[date.getDay()];
    const month = MONTH_NAMES[date.getMonth()];

    return (
      <React.Fragment>
        <h2>
          {day}, {month} {date.getDate()}
        </h2>
        <div id="day-calendar">
          <TimeBlocks
            abbreviation="AM"
            selectOption={selectOption}
            options={options}
          />
          <TimeBlocks
            abbreviation="PM"
            selectOption={selectOption}
            options={options}
          />
        </div>
      </React.Fragment>
    );
  }
}
