import * as React from "react";
const { Component } = React;
import axios from "axios";
import { RouteComponentProps, withRouter } from "react-router-dom";

const FIELDS = [
	{
		label: "Title",
		name: "title"
	},
	{
		label: "Creator (Example: Your name)",
		name: "createdBy"
	},
	{
		label: "Event Type",
		name: "eventType"
	}
];

class EventForm extends Component<{} & RouteComponentProps> {
	state = {
		createdBy: "",
		eventType: "",
		title: ""
	};

	handleChange(field: string, event: { target: { value: string } }) {
		this.setState({ [field]: event.target.value });
	}

	handleSubmit(event: any) {
		const { createdBy, eventType, title } = this.state;
		axios
			.post("/api/events/new", {
				createdBy,
				eventType,
				title
			})
			.then(({ data }) => {
				this.props.history.push("/event/" + data.linkID);
			})
			.catch(err => {
				this.props.history.push("/events/error");
			});
		event.preventDefault();
	}

	render() {
		return (
			<div>
				<form onSubmit={event => this.handleSubmit(event)}>
					{FIELDS.map(({ label, name }) => {
						return (
							<div key={name}>
								<label>{label}</label>
								<input
									type="text"
									value={this.state[name]}
									onChange={event => this.handleChange(name, event)}
								/>
							</div>
						);
					})}

					<input
						className="btn-large waves-effect waves-light orange"
						type="submit"
						value="Create"
					/>
				</form>
			</div>
		);
	}
}

export default withRouter(EventForm);
