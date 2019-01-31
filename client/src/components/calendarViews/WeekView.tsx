import * as React from "react";
const { Component } = React;
import "../../styles/WeekView.css";

import { DAY_NAMES, MONTH_NAMES } from "../../helpers/constants";
import { getAllWeekDates, getWeekDates } from "../../helpers/utils";
import TimeUnit from "./TimeUnit";
import ViewHeader from "./ViewHeader";

import ICalendarProps from "../../interfaces/ICalendarViewProps";

interface IProps {
	options: Array<string>;
}

interface IState {
	sundayDate: Date;
}

export default class WeekView extends Component<ICalendarProps & IProps> {
	state = {
		sundayDate: getAllWeekDates(this.props.date)[0]
	};

	handlePrevious = () => {
		this.setState((prevState: IState) => {
			const { sundayDate } = prevState;
			const prevSundayDate = new Date(
				sundayDate.getFullYear(),
				sundayDate.getMonth(),
				sundayDate.getDate() - 7
			);
			return {
				sundayDate: prevSundayDate
			};
		});
	};

	handleNext = () => {
		this.setState((prevState: IState) => {
			const { sundayDate } = prevState;
			const nextSundayDate = new Date(
				sundayDate.getFullYear(),
				sundayDate.getMonth(),
				sundayDate.getDate() + 7
			);
			return {
				sundayDate: nextSundayDate
			};
		});
	};

	render() {
		const { selectOption, options } = this.props;
		const weekDates = getAllWeekDates(this.state.sundayDate);

		return (
			<div className="calendar">
				<ViewHeader
					displayValue={getWeekDates(this.state.sundayDate)}
					handlePrevious={this.handlePrevious}
					handleNext={this.handleNext}
				/>

				<div id="weekView">
					{DAY_NAMES.map((name, i) => {
						const dateInfo = weekDates[i];

						const label = `${name} ${
							MONTH_NAMES[dateInfo.getMonth()]
						} ${dateInfo.getDate()} ${dateInfo.getFullYear()}`;
						return (
							<TimeUnit
								selectOption={selectOption}
								options={options}
								label={label}
								key={i}
								height={300}
								width={60}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}
