import React, { Component } from "react";
import "../styles/WeekView.css";

import TimeUnit from "./TimeUnit";
import { DAY_NAMES, MONTH_NAMES } from "../helpers/constants";
import { getNumDaysInMonth } from "../helpers/utils";

export default class WeekView extends Component {
	getWeekDates() {
		const { date } = this.props;
		const currentdate = date.getDate();
		const dayOfWeek = date.getDay();
		const sundayDate = this.getSundayDate();
		const saturdayDate = this.getSaturdayDate();
		return `${sundayDate} - ${saturdayDate}`;
	}

	getPreviousMonth(currentMonth) {
		return currentMonth === 0 ? 11 : currentMonth - 1;
	}

	getNextMonth(currentMonth) {
		return currentMonth === 11 ? 0 : currentMonth + 1;
	}

	getDaysInPreviousMonth(currentMonth, currentYear) {
		const prevMonthIndex = this.getPreviousMonth(currentMonth);

		const prevMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;

		return getNumDaysInMonth(prevMonthIndex, prevMonthYear);
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

		const prevMonthIndex = this.getPreviousMonth(monthIndex);
		const daysInPrevMonth = this.getDaysInPreviousMonth(monthIndex, year);

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
		const nextMonthIndex = this.getNextMonth(date.getMonth());

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
