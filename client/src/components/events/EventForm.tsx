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
		title: "", 
		options: ["", "", ""]
	};

	handleChange(field: string, event: { target: { value: string } }) {
		this.setState({ [field]: event.target.value });
	}

	handleOptionsChange(optionIndex: number, event: { target: { value: string} }) {
		const options = [...this.state.options];
		options[optionIndex] = event.target.value;
		this.setState({options});
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
				this.props.history.push("/events/created/" + data.linkID);
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

					<div className="container">
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
					</div>

					<div className="container">
						{this.state.options.map((option, optionIndex) => {
							return	(<div>
								<label>Option {optionIndex + 1}</label>
								<input type="text"
									value={this.state.options[optionIndex]}
									onChange={event => this.handleOptionsChange(optionIndex, event)}
									/>
							</div>);
						})}
					</div>

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
