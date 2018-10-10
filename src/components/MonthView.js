import React, { Component } from "react";
import "../styles/MonthView.css";

import TimeUnit from "./TimeUnit";

export default class MonthView extends Component {
	render() {
		const days = [];

		for (let i = 1; i <= 31; i++) {
			days.push(<TimeUnit label={i} key={i} height={80} width={60} />);
		}
		return (
			<div className="calendar">
				<h2>Monthly Calendar</h2>
				<div id="month-calendar">{days}</div>
			</div>
		);
	}
}
