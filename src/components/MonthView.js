import React, { Component } from "react";
import "../styles/MonthView.css";

import TimeUnit from "./TimeUnit";
import { MONTH_NAMES, MONTH_NUMBER_OF_DAYS } from "../helpers/constants";

export default class MonthView extends Component {
	render() {
		const { date } = this.props;

		const monthIndex = date.getMonth();
		const month = MONTH_NAMES[monthIndex];
		const daysInMonth = MONTH_NUMBER_OF_DAYS[month];

		const days = [];

		for (let i = 1; i <= daysInMonth; i++) {
			days.push(<TimeUnit label={i} key={i} height={80} width={60} />);
		}

		return (
			<div className="calendar">
				<h2>{month}</h2>
				<div id="month-calendar">{days}</div>
			</div>
		);
	}
}
