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
		nextMonthIndex: 1
	},
	{
		monthName: "February",
		index: 1,
		previousMonthIndex: 0,
		nextMonthIndex: 2
	},
	{
		monthName: "March",
		index: 2,
		previousMonthIndex: 1,
		nextMonthIndex: 3
	},
	{
		monthName: "April",
		index: 3,
		previousMonthIndex: 2,
		nextMonthIndex: 4
	},
	{
		monthName: "May",
		index: 4,
		previousMonthIndex: 3,
		nextMonthIndex: 5
	},
	{
		monthName: "June",
		index: 5,
		previousMonthIndex: 4,
		nextMonthIndex: 6
	},
	{
		monthName: "July",
		index: 6,
		previousMonthIndex: 5,
		nextMonthIndex: 7
	},
	{
		monthName: "August",
		index: 7,
		previousMonthIndex: 6,
		nextMonthIndex: 8
	},
	{
		monthName: "September",
		index: 8,
		previousMonthIndex: 7,
		nextMonthIndex: 9
	},
	{
		monthName: "October",
		index: 9,
		previousMonthIndex: 8,
		nextMonthIndex: 10
	},
	{
		monthName: "November",
		index: 10,
		previousMonthIndex: 9,
		nextMonthIndex: 11
	},
	{
		monthName: "December",
		index: 11,
		previousMonthIndex: 10,
		nextMonthIndex: 0
	}
];

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
		expect(getNumDaysInMonth(0, 2018)).toEqual(31); //January has 31 days
		expect(getNumDaysInMonth(1, 2018)).toEqual(28); //February has 28 days (on non-leap years)
		expect(getNumDaysInMonth(2, 2018)).toEqual(31); //March has 31 days
		expect(getNumDaysInMonth(3, 2018)).toEqual(30); //April has 30 days
		expect(getNumDaysInMonth(4, 2018)).toEqual(31); //May has 31 days
		expect(getNumDaysInMonth(5, 2018)).toEqual(30); //June has 30 days
		expect(getNumDaysInMonth(6, 2018)).toEqual(31); //July has 31 days
		expect(getNumDaysInMonth(7, 2018)).toEqual(31); //August has 31 days
		expect(getNumDaysInMonth(8, 2018)).toEqual(30); //September has 30 days
		expect(getNumDaysInMonth(9, 2018)).toEqual(31); //October has 31 days
		expect(getNumDaysInMonth(10, 2018)).toEqual(30); //November has 30 days
		expect(getNumDaysInMonth(11, 2018)).toEqual(31); //December has 31 days
	});

	it("should return the correct number of days for February, including leap years", () => {
		expect(getNumDaysInMonth(1, 2016)).toEqual(29); //2016 is a leap year
		expect(getNumDaysInMonth(1, 2020)).toEqual(29); //2020 is a leap year
		expect(getNumDaysInMonth(1, 2000)).toEqual(29); //2000 is  a leap year
		expect(getNumDaysInMonth(1, 1900)).toEqual(28); //1900 is not a leap year
		expect(getNumDaysInMonth(1, 2011)).toEqual(28); //2011 is not a leap year
		expect(getNumDaysInMonth(1, 1683)).toEqual(28); //1683 is not a leap year
		expect(getNumDaysInMonth(1, 1804)).toEqual(29); //1804 is  a leap year
	});
});

describe("getNumDaysInPreviousMonth", () => {
	it("should be defined", () => {
		expect(getNumDaysInPreviousMonth).toBeDefined();
	});

	it("should return the correct number of days of the previous month for every month in a certain year", () => {
		expect(getNumDaysInPreviousMonth(0, 2018)).toEqual(31); //December has 31 days
		expect(getNumDaysInPreviousMonth(1, 2018)).toEqual(31); //January has 31 days
		expect(getNumDaysInPreviousMonth(2, 2018)).toEqual(28); //February has 28 days (on non-leap years)
		expect(getNumDaysInPreviousMonth(3, 2018)).toEqual(31); //March has 31 days
		expect(getNumDaysInPreviousMonth(4, 2018)).toEqual(30); //April has 30 days
		expect(getNumDaysInPreviousMonth(5, 2018)).toEqual(31); //May has 31 days
		expect(getNumDaysInPreviousMonth(6, 2018)).toEqual(30); //June has 30 days
		expect(getNumDaysInPreviousMonth(7, 2018)).toEqual(31); //July has 31 days
		expect(getNumDaysInPreviousMonth(8, 2018)).toEqual(31); //August has 31 days
		expect(getNumDaysInPreviousMonth(9, 2018)).toEqual(30); //Septemer has 30 days
		expect(getNumDaysInPreviousMonth(10, 2018)).toEqual(31); //October has 31 days
		expect(getNumDaysInPreviousMonth(11, 2018)).toEqual(30); //November has 30 days
	});

	it("should return the correct number of days for February (when current month is March), including leap years", () => {
		expect(getNumDaysInPreviousMonth(2, 2016)).toEqual(29); //2016 is a leap year
		expect(getNumDaysInPreviousMonth(2, 2020)).toEqual(29); //2020 is a leap year
		expect(getNumDaysInPreviousMonth(2, 2000)).toEqual(29); //2000 is  a leap year
		expect(getNumDaysInPreviousMonth(2, 1900)).toEqual(28); //1900 is not a leap year
		expect(getNumDaysInPreviousMonth(2, 2011)).toEqual(28); //2011 is not a leap year
		expect(getNumDaysInPreviousMonth(2, 1683)).toEqual(28); //1683 is not a leap year
		expect(getNumDaysInPreviousMonth(2, 1804)).toEqual(29); //1804 is  a leap year
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
});
