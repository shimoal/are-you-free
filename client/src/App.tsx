import * as React from "react";
const { Component } = React;
import "./styles/App.css";

import CalendarMenu from "./components/calendarViews/CalendarMenu";
import DayView from "./components/calendarViews/DayView";
import MonthView from "./components/calendarViews/MonthView";
import WeekView from "./components/calendarViews/WeekView";
import YearView from "./components/calendarViews/YearView";

class App extends Component<{}, { selectedView: string }> {
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
			<div className="App">
				<CalendarMenu
					selectedView={this.state.selectedView}
					setView={(selectedView: string) => this.setState({ selectedView })}
				/>
				{calendarView}
			</div>
		);
	}
}

export default App;
