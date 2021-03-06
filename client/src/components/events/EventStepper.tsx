import * as React from "react";
const { Component } = React;
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";

import EventStepperContent from "./EventStepperContent";

const STEPS = [
	"Describe your event",
	"Choose an event type",
	"Select options for your event",
	"Verify event information"
];

interface IProps {
	addCustomOption: (event: any) => void;
	eventDescription: {
		title: string;
		createdBy: string;
		description: string;
	};
	eventType: string;
	handleEventTypeChange: (value: string) => void;
	handleOptionsChange: (optionIndex: number, event: any) => void;
	handleSubmit: (e: any) => void;
	handleTextFieldChange: (field: string, value: string) => void;
	options: Array<string>;
	removeOption: (optionIndex: number, event: any) => void;
	selectOption: (e: any, value: string) => void;
}

interface IState {
	activeStep: number;
}

class EventStepper extends Component<IProps, IState> {
	state = {
		activeStep: 0
	};

	handleNext = () => {
		this.setState(prevState => ({
			activeStep: prevState.activeStep + 1
		}));
	};

	handleBack = () => {
		this.setState(prevState => ({
			activeStep: prevState.activeStep - 1
		}));
	};

	render() {
		const {
			addCustomOption,
			eventDescription,
			eventType,
			handleEventTypeChange,
			handleTextFieldChange,
			options,
			removeOption,
			selectOption,
			handleOptionsChange,
			handleSubmit
		} = this.props;
		const { activeStep } = this.state;
		return (
			<div>
				<Stepper activeStep={activeStep} alternativeLabel>
					{STEPS.map(step => {
						return (
							<Step key={step}>
								<StepLabel>{step}</StepLabel>
							</Step>
						);
					})}
				</Stepper>
				<EventStepperContent
					activeStep={activeStep}
					addCustomOption={addCustomOption}
					eventDescription={eventDescription}
					eventType={eventType}
					handleBack={this.handleBack}
					handleNext={this.handleNext}
					handleEventTypeChange={handleEventTypeChange}
					handleOptionsChange={handleOptionsChange}
					handleSubmit={handleSubmit}
					handleTextFieldChange={handleTextFieldChange}
					options={options}
					removeOption={removeOption}
					stepLabels={STEPS}
					selectOption={selectOption}
				/>
			</div>
		);
	}
}

export default EventStepper;
