import * as React from "react";
const { Component } = React;

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import CustomEventOptions from './CustomEventOptions';
import DayView from "../calendarViews/DayView";
import MonthView from "../calendarViews/MonthView";
import WeekView from "../calendarViews/WeekView";
import YearView from "../calendarViews/YearView";

interface IProps {
	addOption: (event: any) => void;
	handleEventTypeChange: (eventType: string) => void;
	handleOptionsChange: (optionIndex: number, event: any) => void;
	options: Array<string>;
	removeOption: (optionIndex: number, event: any) => void;
	selectOption: (event: any, value: string) => void;
}

const EVENT_TYPE = [
	'year',
	'month',
	'week',
	'day',
	'custom'
];

class OptionsCreator extends Component<IProps> {
	state = {
    value: 0,
  };

  getView(date: any) {
  	const {addOption, options, handleOptionsChange, removeOption, selectOption} = this.props;
		switch (EVENT_TYPE[this.state.value]) {
			case 'custom': 
				return <CustomEventOptions addOption={addOption} options={options} handleOptionsChange={handleOptionsChange} removeOption={removeOption}/>
			case 'day':
				return <DayView selectOption={selectOption} date={date} />;
			case 'week':
				return <WeekView selectOption={selectOption} date={date} />;
			case 'month':
				return <MonthView selectOption={selectOption} date={date} />;
			case 'year':
				return <YearView selectOption={selectOption} date={date} />;
			default:
				return <div />;
		}
	}

	handleChange(event: any, value: string) {
		this.props.handleEventTypeChange(EVENT_TYPE[value]);
		this.setState({value});
	}

	render() {
		const { value } = this.state;

		const date = new Date();
		const calendarView = this.getView(date);

		return (
			<div>
			<h5>Options</h5>
			  <AppBar position="static">
	        <Tabs value={value} onChange={(event, value) => this.handleChange(event, value)}>
	          <Tab label="Year View" />
	          <Tab label="Month View" />
	          <Tab label="Week View" />
	          <Tab label="Day View" />
	          <Tab label="Custom Options" />
	        </Tabs>
        </AppBar>
					{calendarView}
        </div>
		);
	}
}

export default OptionsCreator;