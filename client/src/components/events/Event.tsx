import * as React from "react";
const { Component } = React;

import ResponseForm from "../responses/ResponseForm";
import ResponseResults from "../responses/ResponseResults";

import IEvent from "../../interfaces/IEvent";

interface IProps {
	event: IEvent;
}

class Event extends Component<IProps> {
	state = {
		addingNew: false
	};

	renderForm() {
		if (this.state.addingNew) {
			return (
				<ResponseForm
					cancelResponse={() => this.setState({ addingNew: false })}
					event={this.props.event}
				/>
			);
		}
		return (
			<div className="row center">
				<button
					className="btn-large amber darken-2"
					onClick={() => {
						this.setState({ addingNew: true });
					}}
				>
					Add a Response
				</button>
			</div>
		);
	}

	render() {
		const {
			event,
			event: { createdBy, title, linkID }
		} = this.props;
		return (
			<div>
				<div className="center">
					<h2>Event: {title}</h2>
					<h5>Event Created By: {createdBy}</h5>
					<p>{event.description}</p>
					<p>
						This event can be accessed by sharing this link:
						<br />
						{"https://are-you-free.herokuapp.com/event/" + linkID}
					</p>
				</div>
				<div>{this.renderForm()}</div>
				<ResponseResults event={event} />
			</div>
		);
	}
}

export default Event;
