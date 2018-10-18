import { MONTH_NAMES } from "./constants";

const getNextMonth = currentMonth => {
	// months are numbered 0-11
	// if the current month is 11 (December), return 0 for January
	return currentMonth === 11 ? 0 : currentMonth + 1;
};

const getNumDaysInMonth = (month, year) => {
	// months are numbered 0-11
	// This will return the last date for the current monnth, ie the number of days in the month
	return new Date(year, month + 1, 0).getDate();
};

const getNumDaysInPreviousMonth = (month, year) => {
	const prevMonthIndex = getPreviousMonth(month);
	const prevMonthYear = month === 0 ? year - 1 : year;

	return getNumDaysInMonth(prevMonthIndex, prevMonthYear);
};

const getPreviousMonth = currentMonth => {
	// months are numbered 0-11
	// if the current month is 0 (January), return 12 for December
	return currentMonth === 0 ? 11 : currentMonth - 1;
};

// Week ends on Saturday
// Returns a "MONTH DAY" string of the ending date for the week of the date provided
const getWeekEndingDate = date => {
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
};

// Week starts on a Sunday
// Returns a "MONTH DAY" string of the starting date for the week of the date provided
const getWeekStartingDate = date => {
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
};

// Returns a string representing the week of the date provided
// EX: "November 30 - October 6"
const getWeekDates = date => {
	const weekStartingDate = getWeekStartingDate(date);
	const weekEndingDate = getWeekEndingDate(date);
	return `${weekStartingDate} - ${weekEndingDate}`;
};

export {
	getNextMonth,
	getNumDaysInMonth,
	getNumDaysInPreviousMonth,
	getPreviousMonth,
	getWeekEndingDate,
	getWeekStartingDate,
	getWeekDates
};
