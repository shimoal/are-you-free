import * as React from "react";

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

interface IProps {
	activeStep: number;
	handleBack: () => void;
	handleNext: () => void;
	handleSubmit: () => void;
	stepLabels: Array<string>;
}

function getStepContent(stepIndex: number) {
	switch (stepIndex) {
		case 0: 
			return 'Page 1: title and description';
		case 1:
			return 'Page 2: event type';
		case 2: 
			return 'Page 3: select options from calendar';
		case 3:
			return 'Page 4: verify all information';
		default:
			return 'Unknown';
	} 
}

export default (props: IProps) => {
	const {activeStep, handleBack, handleNext, handleSubmit, stepLabels} = props;

	return 	(
		<div>
		  <div>
        <Typography >{getStepContent(activeStep)}</Typography>
        <div>
          <Button
            disabled={activeStep === 0}
            onClick={handleBack}>
            Back
          </Button>
          {activeStep === stepLabels.length - 1 ? (
	          <Button 
	          	variant="contained" 
	          	color="primary" 
	          	onClick={handleSubmit}>
	            Finish
	          </Button>
          ) : (
            <Button 
	          	variant="contained" 
	          	color="primary" 
	          	onClick={handleNext}>
	            Next
          	</Button>
          )}
        </div>
      </div>
		</div>
	);
}