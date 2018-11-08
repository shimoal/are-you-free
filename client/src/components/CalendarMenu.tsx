import * as React from "react";
const { Component } = React;
import "../styles/CalendarMenu.css";

import CalendarMenuItem from "./CalendarMenuItem";

export default class CalendarMenu extends Component<{
	selectedView: string;
	setView: (x: string) => void;
}> {
	render() {
		const { selectedView, setView } = this.props;
		return (
			<nav>
				<CalendarMenuItem
					selectedView={selectedView}
					setView={setView}
					view="year"
				/>
				<CalendarMenuItem
					selectedView={selectedView}
					setView={setView}
					view="month"
				/>
				<CalendarMenuItem
					selectedView={selectedView}
					setView={setView}
					view="week"
				/>
				<CalendarMenuItem
					selectedView={selectedView}
					setView={setView}
					view="day"
				/>
			</nav>
		);
	}
}
