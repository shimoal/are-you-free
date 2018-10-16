import React, { Component } from "react";
import "../styles/MonthView.css";

import TimeUnit from "./TimeUnit";
import { MONTH_NAMES } from "../helpers/constants";
import { getNumDaysInMonth } from "../helpers/Utils";

export default class MonthView extends Component {
	render() {
		const { date } = this.props;

		const monthIndex = date.getMonth();
		const monthName = MONTH_NAMES[monthIndex];
		const daysInMonth = getNumDaysInMonth(monthIndex + 1, date.getYear());

		const days = [];

		for (let i = 1; i <= daysInMonth; i++) {
			days.push(<TimeUnit label={i} key={i} height={80} width={60} />);
		}

		return (
			<div className="calendar">
				<h2>{monthName}</h2>
				<div id="month-calendar">{days}</div>
			</div>
		);
	}
}
