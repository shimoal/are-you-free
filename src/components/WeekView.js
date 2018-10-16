import React, { Component } from "react";
import "../styles/WeekView.css";

import TimeUnit from "./TimeUnit";
import { DAY_NAMES, MONTH_NAMES } from "../helpers/constants";
import {
	getNextMonth,
	getNumDaysInMonth,
	getNumDaysInPreviousMonth,
	getPreviousMonth
} from "../helpers/utils";

export default class WeekView extends Component {
	getWeekDates() {
		const sundayDate = this.getSundayDate();
		const saturdayDate = this.getSaturdayDate();
		return `${sundayDate} - ${saturdayDate}`;
	}

	getSundayDate() {
		const { date } = this.props;
		const monthIndex = date.getMonth();
		const year = date.getFullYear();

		const sundayDate = date.getDate() - date.getDay();

		if (sundayDate > 0) {
			const currentMonth = MONTH_NAMES[monthIndex];
			return `${currentMonth} ${sundayDate}`;
		}

		const prevMonthIndex = getPreviousMonth(monthIndex);
		const daysInPrevMonth = getNumDaysInPreviousMonth(monthIndex, year);

		const prevMonth = MONTH_NAMES[prevMonthIndex];
		const dateDay = daysInPrevMonth + sundayDate;

		return `${prevMonth} ${dateDay}`;
	}

	getSaturdayDate() {
		const { date } = this.props;
		const currentdate = date.getDate();
		const dayOfWeek = date.getDay();
		const saturdayDate = 6 - dayOfWeek + currentdate;
		const daysInCurrentMonth = getNumDaysInMonth(
			date.getMonth(),
			date.getFullYear()
		);
		if (saturdayDate <= daysInCurrentMonth) {
			return `${MONTH_NAMES[date.getMonth()]} ${saturdayDate}`;
		}
		const day = saturdayDate - daysInCurrentMonth;
		const nextMonthIndex = getNextMonth(date.getMonth());

		return `${MONTH_NAMES[nextMonthIndex]} ${day}`;
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
