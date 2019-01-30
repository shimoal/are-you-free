import * as React from "react";
const { Component } = React;
import "../../styles/MonthView.css";

import { MONTH_NAMES } from "../../helpers/constants";
import { getNumDaysInMonth } from "../../helpers/utils";
import TimeUnit from "./TimeUnit";

import ICalendarProps from "../../interfaces/ICalendarViewProps";

interface IProps {
	options: Array<string>;
}

export default class MonthView extends Component<ICalendarProps & IProps> {
	render() {
		const { selectOption, date, options } = this.props;

		const monthIndex = date.getMonth();
		const monthName = MONTH_NAMES[monthIndex];
		const daysInMonth = getNumDaysInMonth(monthIndex, date.getYear());

		const days = [];

		for (let i = 1; i <= daysInMonth; i++) {
			days.push(
				<TimeUnit
					options={options}
					selectOption={selectOption}
					label={i.toString()}
					key={i}
					height={80}
					width={60}
				/>
			);
		}

		return (
			<div className="calendar">
				<h2>{monthName}</h2>
				<div id="month-calendar">{days}</div>
			</div>
		);
	}
}
