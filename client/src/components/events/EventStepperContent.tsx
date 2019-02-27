import * as React from "react";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import StepEventDescription from "./StepEventDescription";
import StepEventType from "./StepEventType";
import StepEventOptions from "./StepEventOptions";
import StepEventVerification from "./StepEventVerification";

interface IProps {
	activeStep: number;
	addCustomOption: (event: any) => void;
	eventDescription: {
		title: string;
		createdBy: string;
		description: string;
	};
	eventType: string;
	handleBack: () => void;
	handleNext: () => void;
	handleSubmit: (e: any) => void;
	handleEventTypeChange: (value: string) => void;
	handleOptionsChange: (optionIndex: number, event: any) => void;
	handleTextFieldChange: (field: string, value: string) => void;
	options: Array<string>;
	removeOption: (optionIndex: number, event: any) => void;
	stepLabels: Array<string>;
	selectOption: (e: any, value: string) => void;
}

export default (props: IProps) => {
	const {
		activeStep,
		addCustomOption,
		eventDescription,
		eventType,
		handleBack,
		handleEventTypeChange,
		handleNext,
		handleOptionsChange,
		handleSubmit,
		handleTextFieldChange,
		options,
		removeOption,
		stepLabels,
		selectOption
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
					handleEventTypeChange={handleEventTypeChange}
				/>
			);
			break;
		case 2:
			content = (
				<StepEventOptions
					addCustomOption={addCustomOption}
					handleOptionsChange={handleOptionsChange}
					eventType={eventType}
					selectOption={selectOption}
					options={options}
					removeOption={removeOption}
				/>
			);
			break;
		case 3:
			content = (
				<StepEventVerification
					eventDescription={eventDescription}
					eventType={eventType}
					options={options}
				/>
			);
			break;
		default:
			break;
	}

	return (
		<div>
			<div>
				<div>{content}</div>
				<Grid container justify="center" spacing={40}>
					<Grid item>
						<Button disabled={activeStep === 0} onClick={handleBack}>
							Back
						</Button>
					</Grid>
					<Grid item>
						{activeStep === stepLabels.length - 1 ? (
							<Button
								variant="contained"
								color="primary"
								onClick={handleSubmit}
							>
								Finish
							</Button>
						) : (
							<Button variant="contained" color="primary" onClick={handleNext}>
								Next
							</Button>
						)}
					</Grid>
				</Grid>
			</div>
		</div>
	);
};
