import * as React from "react";
const { Component } = React;
import axios from "axios";
import { RouteComponentProps, withRouter } from "react-router-dom";

import EventStepper from "./EventStepper";

interface IState {
	createdBy: string;
	description: string;
	eventType: string;
	title: string;
	options: Array<string>;
}

class CreateEvent extends Component<{} & RouteComponentProps> {
	state = {
		createdBy: "",
		description: "",
		eventType: "",
		title: "",
		options: []
	};

	addCustomOption = (event: any) => {
		this.setState((prevState: IState) => {
			const options = [...prevState.options];
			options.push("");
			return { ...prevState, options };
		});
		event.preventDefault();
	};

	handleOptionsChange = (
		optionIndex: number,
		event: { target: { value: string } }
	) => {
		const options = this.state.options.length ? [...this.state.options] : [""];
		options[optionIndex] = event.target.value;
		this.setState({ options });
	};

	handleTextFieldChange = (field: string, value: string) => {
		this.setState({ [field]: value });
	};

	handleSubmit = (event: any) => {
		const { createdBy, eventType, title, options, description } = this.state;
		axios
			.post("/api/events/new", {
				createdBy,
				eventType,
				title,
				options,
				description
			})
			.then(({ data }) => {
				this.props.history.push("/events/created/" + data.linkID);
			})
			.catch(err => {
				this.props.history.push("/events/error");
			});
		event.preventDefault();
	};

	removeOption = (optionIndex: number, event: any) => {
		const options = [...this.state.options];
		options.splice(optionIndex, 1);
		this.setState({ options });
		event.preventDefault();
	};

	selectOption = (e: any, value: string) => {
		this.setState((prevState: IState) => {
			const options = [...prevState.options];
			options.push(value);
			return { ...prevState, options };
		});
		e.preventDefault();
	};

	render() {
		const { createdBy, title, description, eventType, options } = this.state;
		return (
			<div className="center">
				<h2>Create a new Event</h2>
				<EventStepper
					addCustomOption={this.addCustomOption}
					eventDescription={{ title, createdBy, description }}
					eventType={eventType}
					handleOptionsChange={this.handleOptionsChange}
					handleTextFieldChange={this.handleTextFieldChange}
					options={options}
					removeOption={this.removeOption}
					selectOption={this.selectOption}
					handleSubmit={this.handleSubmit}
				/>
			</div>
		);
	}
}

export default withRouter(CreateEvent);
