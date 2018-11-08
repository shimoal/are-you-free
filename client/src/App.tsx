import * as React from "react";
const { Component } = React;
import "./styles/App.css";

import CalendarMenu from "./components/CalendarMenu";
import DayView from "./components/DayView";
import MonthView from "./components/MonthView";
import WeekView from "./components/WeekView";
import YearView from "./components/YearView";

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
		const setView = (selectedView: string) => this.setState({ selectedView });
		return (
			<div className="App">
				<CalendarMenu
					selectedView={this.state.selectedView}
					setView={setView}
				/>
				{this.getView(date)}
			</div>
		);
	}
}

export default App;
