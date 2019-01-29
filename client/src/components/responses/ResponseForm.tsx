import * as React from "react";
const { Component } = React;
import axios from "axios";
import { RouteComponentProps, withRouter } from "react-router-dom";

import CancelButton from '../UI/CancelButton';
import SubmitButton from '../UI/SubmitButton';

import IEvent from '../../interfaces/IEvent';

interface IProps {
	event: IEvent;
	cancelResponse: () => void;
}

const OPTION_CHOICES = {
	yes: 'Yes',
	no: 'No',
	maybe: 'Maybe'
};

class EventForm extends Component<IProps & RouteComponentProps> {
	state = {
		name: "",
		options: this.props.event.options.map(option => ({...option, choice: OPTION_CHOICES.no}))
	};

	handleOptionsChange(optionIndex: number, e: { target: { value: string} }) {
		const options = [...this.state.options];
		options[optionIndex].choice = e.target.value;
		this.setState({options});
	}

	handleSubmit(e: any) {
		const { name, options } = this.state;
		const { event: {id, linkID}, history } = this.props;
		axios
			.post("/api/response", {
				name,
				options,
				eventId: id
			})
			.then(({ data }) => {
				history.push("/event/" + linkID);
			})
			.catch(err => {
				history.push("/events/error");
			});
	}

	render() {
		const {name, options} = this.state;
		return (
			<div>
				<form onSubmit={event => this.handleSubmit(event)}>

					<div className="container">
						<label>Name</label>
						<input type="text"
							value={name}
							onChange={event => this.setState({name: event.target.value})}/>
					</div>

					<div className="container">
						{options.map((option, optionIndex) => {
							return	(<div key={"response-options-"+optionIndex}>
								<label>{option.label}</label>
									<select 
										className="browser-default" 
										value={options[optionIndex].choice} 
										name={option.label} 
										onChange={event => this.handleOptionsChange(optionIndex, event)}
										size={3}>
										{Object.keys(OPTION_CHOICES).map(choice => {
											return 	<option key={choice} value={OPTION_CHOICES[choice]}>{OPTION_CHOICES[choice]}</option>;
										})}
									</select>
							</div>);
						})}
					</div>

					<CancelButton onClick={this.props.cancelResponse}/>
					<SubmitButton value="Create" />

				</form>
			</div>
		);
	}
}

export default withRouter(EventForm);