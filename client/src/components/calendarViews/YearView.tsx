import * as React from "react";
const { Component } = React;
import "../../styles/YearView.css";

import { MONTH_NAMES } from "../../helpers/constants";

import TimeUnit from "./TimeUnit";
import ViewHeader from "./ViewHeader";

import ICalendarProps from "../../interfaces/ICalendarViewProps";

interface IProps {
	options: Array<string>;
}

interface IState {
	displayYear: number;
}

export default class YearView extends Component<ICalendarProps & IProps> {
	state = {
		displayYear: this.props.date.getFullYear()
	};

	handlePrevious = () => {
		this.setState((prevState: IState) => ({
			displayYear: prevState.displayYear - 1
		}));
	};

	handleNext = () => {
		this.setState((prevState: IState) => ({
			displayYear: prevState.displayYear + 1
		}));
	};

	render() {
		const { selectOption, options } = this.props;
		const { displayYear } = this.state;

		return (
			<div className="calendar">
				<ViewHeader
					displayValue={displayYear}
					handlePrevious={this.handlePrevious}
					handleNext={this.handleNext}
				/>

				<div id="yearView">
					{MONTH_NAMES.map((name, i) => {
						return (
							<TimeUnit
								selectOption={selectOption}
								options={options}
								label={`${name} ${displayYear}`}
								key={i}
								height={100}
								width={100}
							/>
						);
					})}
				</div>
			</div>
		);
	}
}
