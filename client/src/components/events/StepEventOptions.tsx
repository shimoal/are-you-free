import * as React from "react";
const { Component } = React;

import CustomEventOptions from "./CustomEventOptions";
// import DayView from "../calendarViews/DayView";
import DateAndTimeByWeekView from "../calendarViews/DateAndTimeByWeekView";
import MonthView from "../calendarViews/MonthView";
import WeekView from "../calendarViews/WeekView";
import YearView from "../calendarViews/YearView";

interface IProps {
	addCustomOption: (event: any) => void;
	eventType: string;
	handleOptionsChange: (optionIndex: number, event: any) => void;
	options: Array<string>;
	removeOption: (optionIndex: number, event: any) => void;
	selectOption: (event: any, value: string) => void;
}

class StepEventOptions extends Component<IProps> {
	state = {
		value: 0
	};

	getView(date: any) {
		const {
			addCustomOption,
			eventType,
			options,
			handleOptionsChange,
			removeOption,
			selectOption
		} = this.props;

		switch (eventType) {
			case "custom":
				return (
					<CustomEventOptions
						addCustomOption={addCustomOption}
						options={options}
						handleOptionsChange={handleOptionsChange}
						removeOption={removeOption}
					/>
				);
			case "day":
				return (
					<DateAndTimeByWeekView
						options={options}
						removeOption={removeOption}
						selectOption={selectOption}
						date={date}
					/>
				);
			case "week":
				return (
					<WeekView
						options={options}
						removeOption={removeOption}
						selectOption={selectOption}
						date={date}
					/>
				);
			case "month":
				return (
					<MonthView
						options={options}
						removeOption={removeOption}
						selectOption={selectOption}
						date={date}
					/>
				);
			case "year":
				return (
					<YearView
						options={options}
						removeOption={removeOption}
						selectOption={selectOption}
						date={date}
					/>
				);
			default:
				return <div />;
		}
	}

	render() {
		const date = new Date();
		return this.getView(date);
	}
}

export default StepEventOptions;
