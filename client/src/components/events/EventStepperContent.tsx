import * as React from "react";

import Button from "@material-ui/core/Button";
import StepEventDescription from "./StepEventDescription";
import StepEventType from "./StepEventType";

interface IProps {
	activeStep: number;
	eventDescription: {
		title: string;
		createdBy: string;
		description: string;
	};
	eventType: string;
	handleBack: () => void;
	handleNext: () => void;
	handleSubmit: () => void;
	handleTextFieldChange: (field: string, value: string) => void;
	stepLabels: Array<string>;
}

export default (props: IProps) => {
	const {
		activeStep,
		eventDescription,
		eventType,
		handleBack,
		handleNext,
		handleSubmit,
		handleTextFieldChange,
		stepLabels
	} = props;

	let content = <div />;
	switch (activeStep) {
		case 0:
			content = (
				<StepEventDescription
					eventDescription={eventDescription}
					handleTextFieldChange={handleTextFieldChange}
				/>
			);
			break;
		case 1:
			content = (
				<StepEventType
					eventType={eventType}
					handleTextFieldChange={handleTextFieldChange}
				/>
			);
			break;
		case 2:
			content = <p>"Page 3: select options from calendar"</p>;
			break;
		case 3:
			content = <p>"Page 4: verify all information"</p>;
			break;
		default:
			break;
	}

	return (
		<div>
			<div>
				<div>{content}</div>
				<div>
					<Button disabled={activeStep === 0} onClick={handleBack}>
						Back
					</Button>
					{activeStep === stepLabels.length - 1 ? (
						<Button variant="contained" color="primary" onClick={handleSubmit}>
							Finish
						</Button>
					) : (
						<Button variant="contained" color="primary" onClick={handleNext}>
							Next
						</Button>
					)}
				</div>
			</div>
		</div>
	);
};
