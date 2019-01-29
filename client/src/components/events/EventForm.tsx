import * as React from "react";
const { Component } = React;
import axios from "axios";
import { RouteComponentProps, withRouter } from "react-router-dom";

import SubmitButton from '../UI/SubmitButton';

const FIELDS = [
	{
		label: "Title",
		name: "title",
		placeholder: "My Event"
	},
	{
		label: "Creator (Example: Your name)",
		name: "createdBy",
		placeholder: "John Smith"
	},
	{
		label: "Event Type",
		name: "eventType",
		placeholder: "Weekly"
	}
];

interface IState {
	createdBy: string;
	eventType: string;
	title: string; 
	options: Array<string>;
}

class EventForm extends Component<{} & RouteComponentProps> {
	state = {
		createdBy: "",
		eventType: "",
		title: "", 
		options: [""]
	};

	addOption(event: any) {
		this.setState((prevState: IState) => {
			const options = [...prevState.options];
			options.push("");
			return {...prevState, options};
		});
		event.preventDefault();
	}

	removeOption(optionIndex: number, event: any) {
		const options = [...this.state.options];
		options.splice(optionIndex, 1);
		this.setState({options});
		event.preventDefault();
	}

	handleChange(field: string, event: { target: { value: string } }) {
		this.setState({ [field]: event.target.value });
	}

	handleOptionsChange(optionIndex: number, event: { target: { value: string} }) {
		const options = [...this.state.options];
		options[optionIndex] = event.target.value;
		this.setState({options});
	}

	handleSubmit(event: any) {
		const { createdBy, eventType, title, options } = this.state;
		axios
			.post("/api/events/new", {
				createdBy,
				eventType,
				title,
				options
			})
			.then(({ data }) => {
				this.props.history.push("/events/created/" + data.linkID);
			})
			.catch(err => {
				this.props.history.push("/events/error");
			});
		event.preventDefault();
	}

	render() {
		return (
			<div className="row">
				<form className="col s12" onSubmit={event => this.handleSubmit(event)}>

						{FIELDS.map(({ label, name, placeholder }) => {
							return (
								<div key={name} className="row">
									<div className="input-field col s12">
										<input
											id={name}
											onChange={event => this.handleChange(name, event)}
											placeholder={placeholder}
											type="text"
											value={this.state[name]}
										/>
										<label className="active" htmlFor={name}>{label}</label>
										</div>
								</div>
							);
						})}

						{this.state.options.map((option, optionIndex) => {
							return (
								<div key={"options-"+optionIndex} className="row">
									<div className="input-field col s12">
										<div className="right" onClick={(event) => {this.removeOption(optionIndex, event);}}>
										  <a className="btn red">
    										<i className="large material-icons">cancel</i>
  										</a>
  									</div>
										<input 
											id={`options-${optionIndex}`}
											onChange={event => this.handleOptionsChange(optionIndex, event)}
											type="text"
											value={this.state.options[optionIndex]}
										/>
										<label className="active" htmlFor={`options-${optionIndex}`}>
											Option {optionIndex + 1}
										</label>
									</div>
								</div>
							);
						})}

					<div className="row right">
						<div className="col s12 right">
						<button className="btn" onClick={(event) => this.addOption(event)}>
							Add Option
						</button>
						</div>
					</div>

					<div className="row">
						<div className="col s12">
							<SubmitButton value="Create" />
						</div>
					</div>

				</form>
			</div>
		);
	}
}

export default withRouter(EventForm);
