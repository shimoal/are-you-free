import * as React from "react";
const { Component } = React;

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import DayView from "./calendarViews/DayView";
import MonthView from "./calendarViews/MonthView";
import WeekView from "./calendarViews/WeekView";
import YearView from "./calendarViews/YearView";

export default class CalendarMenu extends Component<{}> {
	state = {
    value: 0,
  };

  getView(date: any) {
		switch (this.state.value) {
			case 3:
				return <DayView date={date} />;
			case 2:
				return <WeekView date={date} />;
			case 1:
				return <MonthView date={date} />;
			case 0:
				return <YearView date={date} />;
			default:
				return <div />;
		}
	}

	handleChange(event: any, value: string) {
		this.setState({value});
	}
	render() {
		const { value } = this.state;

		const date = new Date();
		const calendarView = this.getView(date);

		return (
			<div>
			  <AppBar position="static">
	        <Tabs value={value} onChange={(event, value) => this.handleChange(event, value)}>
	          <Tab label="Year View" />
	          <Tab label="Month View" />
	          <Tab label="Week View" />
	          <Tab label="Day View" />
	        </Tabs>
        </AppBar>
					{calendarView}
        </div>
		);
	}
}
