import React, { Component } from "react";
import "./styles/App.css";

import CalendarMenu from "./components/CalendarMenu";
import DayView from "./components/DayView";
import MonthView from "./components/MonthView";
import WeekView from "./components/WeekView";
import YearView from "./components/YearView";

class App extends Component {
	state = {
		selectedView: "day"
	};

	getView(date) {
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
		var date = new Date();
		return (
			<div className="App">
				<CalendarMenu
					selectedView={this.state.selectedView}
					setView={selectedView => this.setState({ selectedView })}
				/>
				{this.getView(date)}
			</div>
		);
	}
}

export default App;
