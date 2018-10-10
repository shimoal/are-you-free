import React, { Component } from "react";
import "../styles/MonthView.css";

import TimeUnit from "./TimeUnit";

export default class MonthView extends Component {
	render() {
		const days = [];

		for (let i = 1; i <= 31; i++) {
			days.push(<TimeUnit label={i} key={i} height={100} width={100} />);
		}
		return (
			<React.Fragment>
				<h2>Monthly Calendar</h2>
				<div id="month-calendar">{days}</div>
			</React.Fragment>
		);
	}
}
