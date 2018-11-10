import * as React from "react";
const { Component } = React;

export default class CreateEvent extends Component {
	render() {
		return (
			<div className="center">
				<h2>Create a new Event</h2>
				<div className="row center">
					<a
						href="/events/new"
						className="btn-large waves-effect waves-light orange"
					>
						Create
					</a>
				</div>
			</div>
		);
	}
}
