import utils from "./../helpers/utils";

const { getNextMonth, getNumDaysInMonth } = utils;

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
