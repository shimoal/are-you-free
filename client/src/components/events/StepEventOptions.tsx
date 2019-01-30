import * as React from "react";
const { Component } = React;

// import CustomEventOptions from "./CustomEventOptions";
import DayView from "../calendarViews/DayView";
import MonthView from "../calendarViews/MonthView";
import WeekView from "../calendarViews/WeekView";
import YearView from "../calendarViews/YearView";

interface IProps {
	// addOption: (event: any) => void;
	eventType: string;
	// handleEventTypeChange: (eventType: string) => void;
	// handleOptionsChange: (optionIndex: number, event: any) => void;
	// options: Array<string>;
	// removeOption: (optionIndex: number, event: any) => void;
	selectOption: (event: any, value: string) => void;
}

class StepEventOptions extends Component<IProps> {
	state = {
		value: 0
	};

	getView(date: any) {
		const {
			// addOption,
			eventType,
			// options,
			// handleOptionsChange,
			// removeOption,
			selectOption
		} = this.props;

		switch (eventType) {
			case "custom":
				return (
					<div />
					// <CustomEventOptions
					// 	addOption={addOption}
					// 	options={options}
					// 	handleOptionsChange={handleOptionsChange}
					// 	removeOption={removeOption}
					// />
				);
			case "day":
				return <DayView selectOption={selectOption} date={date} />;
			case "week":
				return <WeekView selectOption={selectOption} date={date} />;
			case "month":
				return <MonthView selectOption={selectOption} date={date} />;
			case "year":
				return <YearView selectOption={selectOption} date={date} />;
			default:
				return <div />;
		}
	}

	render() {
		const date = new Date();
		const calendarView = this.getView(date);

		return (
			<div className="row">
				<h5>Options</h5>
				{calendarView}
			</div>
		);
	}
}

export default StepEventOptions;
