import * as React from "react";
const { Component } = React;
import EventForm from "./EventForm";

export default class CreateEvent extends Component {
	render() {
		return (
			<div className="center">
				<h2>Create a new Event</h2>
				<div className="row center">
					<EventForm />
				</div>
			</div>
		);
	}
}
