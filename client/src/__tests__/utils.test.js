import {
	getNextMonth,
	getNumDaysInMonth,
	getNumDaysInPreviousMonth,
	getPreviousMonth,
	getWeekEndingDate,
	getWeekStartingDate,
	getWeekDates
} from "./../helpers/utils";

const DATES = [
	{
		sampleDate: "10/16/2018",
		startingDate: "October 14",
		endingDate: "October 20",
		weekDates: "October 14 - October 20"
	},
	{
		sampleDate: "02/27/2018",
		startingDate: "February 25",
		endingDate: "March 3",
		weekDates: "February 25 - March 3"
	},
	{
		sampleDate: "05/01/2019",
		startingDate: "April 28",
		endingDate: "May 4",
		weekDates: "April 28 - May 4"
	},
	{
		sampleDate: "12/30/2019",
		startingDate: "December 29",
		endingDate: "January 4",
		weekDates: "December 29 - January 4"
	},
	{
		sampleDate: "01/04/2018",
		startingDate: "December 31",
		endingDate: "January 6",
		weekDates: "December 31 - January 6"
	}
];

const MONTHS = [
	{
		monthName: "January",
		index: 0,
		previousMonthIndex: 11,
		nextMonthIndex: 1,
		daysInMonth: 31,
		daysInPreviousMonth: 31 // December has 31 days
	},
	{
		monthName: "February",
		index: 1,
		previousMonthIndex: 0,
		nextMonthIndex: 2,
		daysInMonth: 28, // On non-leap years
		daysInPreviousMonth: 31 // January has 31 days
	},
	{
		monthName: "March",
		index: 2,
		previousMonthIndex: 1,
		nextMonthIndex: 3,
		daysInMonth: 31,
		daysInPreviousMonth: 28 // February has 28 days
	},
	{
		monthName: "April",
		index: 3,
		previousMonthIndex: 2,
		nextMonthIndex: 4,
		daysInMonth: 30,
		daysInPreviousMonth: 31 // March has 31 days
	},
	{
		monthName: "May",
		index: 4,
		previousMonthIndex: 3,
		nextMonthIndex: 5,
		daysInMonth: 31,
		daysInPreviousMonth: 30 // April has 30 days
	},
	{
		monthName: "June",
		index: 5,
		previousMonthIndex: 4,
		nextMonthIndex: 6,
		daysInMonth: 30,
		daysInPreviousMonth: 31 // May has 31 days
	},
	{
		monthName: "July",
		index: 6,
		previousMonthIndex: 5,
		nextMonthIndex: 7,
		daysInMonth: 31,
		daysInPreviousMonth: 30 // June has 30 days
	},
	{
		monthName: "August",
		index: 7,
		previousMonthIndex: 6,
		nextMonthIndex: 8,
		daysInMonth: 31,
		daysInPreviousMonth: 31 // July has 31 days
	},
	{
		monthName: "September",
		index: 8,
		previousMonthIndex: 7,
		nextMonthIndex: 9,
		daysInMonth: 30,
		daysInPreviousMonth: 31 // August has 31 days
	},
	{
		monthName: "October",
		index: 9,
		previousMonthIndex: 8,
		nextMonthIndex: 10,
		daysInMonth: 31,
		daysInPreviousMonth: 30 // September has 30 days
	},
	{
		monthName: "November",
		index: 10,
		previousMonthIndex: 9,
		nextMonthIndex: 11,
		daysInMonth: 30,
		daysInPreviousMonth: 31 // October has 31 days
	},
	{
		monthName: "December",
		index: 11,
		previousMonthIndex: 10,
		nextMonthIndex: 0,
		daysInMonth: 31,
		daysInPreviousMonth: 30 // November has 30 days
	}
];

const NON_LEAP_YEARS = [1900, 2011, 1683];
const LEAP_YEARS = [2016, 2020, 2000, 1804];

describe("getNextMonth", () => {
	it("should exist", () => {
		expect(getNextMonth).toBeDefined();
	});

	it("should return the index of the following month", () => {
		MONTHS.forEach(({ index, nextMonthIndex }) => {
			expect(getNextMonth(index)).toEqual(nextMonthIndex);
		});
	});
});

describe("getNumDaysInMonth", () => {
	it("should exist", () => {
		expect(getNumDaysInMonth).toBeDefined();
	});

	it("should return the correct number of days for every month", () => {
		MONTHS.forEach(({ index, daysInMonth }) => {
			expect(getNumDaysInMonth(index, 2018)).toEqual(daysInMonth);
		});
	});

	it("should return 28 days for February in non-leap years", () => {
		NON_LEAP_YEARS.forEach(year => {
			expect(getNumDaysInMonth(1, year)).toEqual(28);
		});
	});

	it("should return 29 days for February in leap years", () => {
		LEAP_YEARS.forEach(year => {
			expect(getNumDaysInMonth(1, year)).toEqual(29);
		});
	});
});

describe("getNumDaysInPreviousMonth", () => {
	it("should be defined", () => {
		expect(getNumDaysInPreviousMonth).toBeDefined();
	});

	it("should return the correct number of days of the previous month for every month in a certain year", () => {
		MONTHS.forEach(({ index, daysInPreviousMonth }) => {
			expect(getNumDaysInPreviousMonth(index, 2018)).toEqual(
				daysInPreviousMonth
			);
		});
	});

	it("should return 28 days for March during non-leap years", () => {
		NON_LEAP_YEARS.forEach(year => {
			expect(getNumDaysInPreviousMonth(2, year)).toEqual(28);
		});
	});

	it("should return 29 days for March during leap years", () => {
		LEAP_YEARS.forEach(year => {
			expect(getNumDaysInPreviousMonth(2, year)).toEqual(29);
		});
	});
});

describe("getPreviousMonth", () => {
	it("should be defined", () => {
		expect(getPreviousMonth).toBeDefined();
	});

	it("should return the index of the previous month", () => {
		MONTHS.forEach(({ index, previousMonthIndex }) => {
			expect(getPreviousMonth(index)).toEqual(previousMonthIndex);
		});
	});
});

describe("getWeekEndingDate", () => {
	it("should be defined", () => {
		expect(getWeekEndingDate).toBeDefined();
	});

	it("should return the correct week ending date for any date passed in", () => {
		DATES.forEach(({ sampleDate, endingDate }) => {
			let date = new Date(sampleDate);
			expect(getWeekEndingDate(date)).toEqual(endingDate);
		});
	});
});

describe("getWeekStartingDate", () => {
	it("should be defined", () => {
		expect(getWeekStartingDate).toBeDefined();
	});

	it("should return the correct week starting date for any date passed in", () => {
		DATES.forEach(({ sampleDate, startingDate }) => {
			let date = new Date(sampleDate);
			expect(getWeekStartingDate(date)).toEqual(startingDate);
		});
	});
});

describe("getWeekDates", () => {
	it("should be defined", () => {
		expect(getWeekDates).toBeDefined();
	});

	it("should return the correct week dates, starting to end, for any date passed in", () => {
		DATES.forEach(({ sampleDate, weekDates }) => {
			let date = new Date(sampleDate);
			expect(getWeekDates(date)).toEqual(weekDates);
		});
	});
});

