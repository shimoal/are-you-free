import * as React from "react";
const { Component } = React;

class EventForm extends Component {
	state = {
		createdBy: "",
		eventType: "",
		title: ""
	};

	handleChange(field: string, event: any) {
		this.setState({ [field]: event.target.value });
	}

	handleSubmit(event: any) {
		console.log("submit", this.state);
		event.preventDefault();
	}

	render() {
		return (
			<div>
				<form onSubmit={() => this.handleSubmit}>
					<label>Title</label>
					<input
						type="text"
						value={this.state.title}
						onChange={event => this.handleChange("title", event)}
					/>

					<label>Creator (Example: Your name)</label>
					<input
						type="text"
						value={this.state.createdBy}
						onChange={event => this.handleChange("createdBy", event)}
					/>

					<label>Type</label>
					<input
						type="text"
						value={this.state.eventType}
						onChange={event => this.handleChange("eventType", event)}
					/>

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

export default EventForm;
