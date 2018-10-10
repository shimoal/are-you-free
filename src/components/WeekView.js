import React, { Component } from "react";
import "../styles/WeekView.css";

import TimeUnit from "./TimeUnit";
import { DAY_NAMES } from "../helpers/constants";

export default class WeekView extends Component {
	getWeekDates() {
		const { date } = this.props;
		const currentdate = date.getDate();
		const dayOfWeek = date.getDay();
		const sundayDate = currentdate - dayOfWeek;
		const saturdayDate = 6 - dayOfWeek + currentdate;
		return `${sundayDate} - ${saturdayDate}`;
	}

	render() {
		this.getWeekDates();

		return (
			<div className="calendar">
				<h2>{this.getWeekDates()}</h2>
				<div id="weekView">
					{DAY_NAMES.map((name, i) => {
						return <TimeUnit label={name} key={i} height={300} width={60} />;
					})}
				</div>
			</div>
		);
	}
}
