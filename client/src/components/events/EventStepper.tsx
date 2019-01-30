import * as React from 'react';
const {Component} = React;
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import EventStepperContent from './EventStepperContent';

const STEPS = [
	'Describe your event', 
	'Choose an event type', 
	'Select options for your event', 
	'Verify event information'
];

interface IState {
	activeStep: number;
}

class EventStepper extends Component<{}, IState> {
	state = {
		activeStep: 0
	}

  handleNext = () => {
	  this.setState(prevState => ({
	    activeStep: prevState.activeStep + 1,
	  }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleSubmit = () => {
  	this.setState({
  		activeStep: 0
  	});
  }

	render() {
		const {activeStep} = this.state;
		return <div>
			<Stepper activeStep={activeStep} alternativeLabel>
				{STEPS.map(step => {
					return <Step key={step}>
						<StepLabel>{step}</StepLabel>
					</Step>;
				})}
			</Stepper>
			<EventStepperContent 
				activeStep={activeStep} 
				handleBack={this.handleBack} 
				handleNext={this.handleNext} 
				handleSubmit={this.handleSubmit}
				stepLabels={STEPS}/>
		</div>;
	}
}

export default EventStepper;