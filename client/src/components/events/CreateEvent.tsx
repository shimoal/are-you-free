import * as React from "react";
const { Component } = React;
import axios from "axios";
import { RouteComponentProps, withRouter } from "react-router-dom";

import EventForm from "./EventForm";
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

	handleTextFieldChange = (field: string, value: string) => {
		this.setState({ [field]: value });
	};

	handleSubmit = (event: any) => {
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
		const { createdBy, title, description, eventType } = this.state;
		return (
			<div className="center">
				<h2>Create a new Event</h2>
				<EventStepper
					eventDescription={{ title, createdBy, description }}
					eventType={eventType}
					handleTextFieldChange={this.handleTextFieldChange}
					selectOption={this.selectOption}
				/>
				<EventForm />
			</div>
		);
	}
}

export default withRouter(CreateEvent);
