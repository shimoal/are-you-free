import * as React from "react";
const { Component } = React;

import { MONTH_NAMES } from "../../helpers/constants";

import CalendarView from "./CalendarView";
import Grid from "@material-ui/core/Grid";
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
		const { removeOption, selectOption, options } = this.props;
		const { displayYear } = this.state;

		return (
			<div>
				<ViewHeader
					displayValue={displayYear}
					handlePrevious={this.handlePrevious}
					handleNext={this.handleNext}
				/>

				<CalendarView>
					<Grid container>
						{MONTH_NAMES.map((name, i) => {
							return (
								<Grid item>
									<TimeUnit
										selectOption={selectOption}
										removeOption={removeOption}
										options={options}
										label={`${name} ${displayYear}`}
										key={i}
										height={100}
										width={100}
									/>
								</Grid>
							);
						})}
					</Grid>
				</CalendarView>
			</div>
		);
	}
}
