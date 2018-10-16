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

module.exports = {
	getNextMonth,
	getNumDaysInMonth,
	getNumDaysInPreviousMonth,
	getPreviousMonth
};
