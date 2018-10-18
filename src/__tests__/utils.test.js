import utils from "./../helpers/utils";

const {
	getNextMonth,
	getNumDaysInMonth,
	getNumDaysInPreviousMonth,
	getPreviousMonth
} = utils;

describe("getNextMonth", () => {
	it("should exist", () => {
		expect(getNextMonth).toBeDefined();
	});

	it("should return the index of the following month", () => {
		expect(getNextMonth(0)).toEqual(1); // Index of January should return index of February
		expect(getNextMonth(1)).toEqual(2); // Index of February should return index of February
		expect(getNextMonth(2)).toEqual(3); // Index of March should return index of February
		expect(getNextMonth(3)).toEqual(4); // Index of April should return index of February
		expect(getNextMonth(4)).toEqual(5); // Index of May should return index of February
		expect(getNextMonth(5)).toEqual(6); // Index of June should return index of February
		expect(getNextMonth(6)).toEqual(7); // Index of July should return index of February
		expect(getNextMonth(7)).toEqual(8); // Index of August should return index of February
		expect(getNextMonth(8)).toEqual(9); // Index of September should return index of February
		expect(getNextMonth(9)).toEqual(10); // Index of October should return index of February
		expect(getNextMonth(10)).toEqual(11); // Index of November should return index of December
		expect(getNextMonth(11)).toEqual(0); // Index of December should return index of January
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
		expect(getPreviousMonth(0)).toEqual(11); // Index of January (0) should return index of December (11)
		expect(getPreviousMonth(1)).toEqual(0); // Index of February (1) should return index of January (0)
		expect(getPreviousMonth(2)).toEqual(1); // Index of March should (2) return index of February (1)
		expect(getPreviousMonth(3)).toEqual(2); // Index of April (3) should return index of March (2)
		expect(getPreviousMonth(4)).toEqual(3); // Index of May (4) should return index of April (3)
		expect(getPreviousMonth(5)).toEqual(4); // Index of June (5) should return index of May (4)
		expect(getPreviousMonth(6)).toEqual(5); // Index of July (6) should return index of June (5)
		expect(getPreviousMonth(7)).toEqual(6); // Index of August (7) should return index of July (6)
		expect(getPreviousMonth(8)).toEqual(7); // Index of September (8) should return index of August (7)
		expect(getPreviousMonth(9)).toEqual(8); // Index of October (9) should return index of September (8)
		expect(getPreviousMonth(10)).toEqual(9); // Index of November (10) should return index of October (9)
		expect(getPreviousMonth(11)).toEqual(10); // Index of December (11) should return index of November (10)
	});
});
