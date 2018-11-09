import * as React from "react";
const { Component } = React;

import CalendarMenu from "./calendarViews/CalendarMenu";
import DayView from "./calendarViews/DayView";
import MonthView from "./calendarViews/MonthView";
import WeekView from "./calendarViews/WeekView";
import YearView from "./calendarViews/YearView";

class Calendar extends Component<{}, { selectedView: string }> {
	state = {
		selectedView: "day"
	};

	getView(date: any) {
		switch (this.state.selectedView) {
			case "day":
				return <DayView date={date} />;
			case "week":
				return <WeekView date={date} />;
			case "month":
				return <MonthView date={date} />;
			case "year":
				return <YearView date={date} />;
			default:
				return <div />;
		}
	}

	render() {
		const date = new Date();
		const calendarView = this.getView(date);

		return (
			<div>
				<CalendarMenu
					selectedView={this.state.selectedView}
					setView={(selectedView: string) => this.setState({ selectedView })}
				/>
				{calendarView}
			</div>
		);
	}
}

export default Calendar;
