module.exports = {
	getNumDaysInMonth: function(month, year) {
		return new Date(year, month, 0).getDate();
	}
};
