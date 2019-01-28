import * as React from "react";
const { Component } = React;
import axios from "axios";
import { RouteComponentProps, withRouter } from "react-router-dom";

import IEvent from '../../interfaces/IEvent';

interface IProps {
	event: IEvent,
	linkID: string,
}


class EventForm extends Component<IProps & RouteComponentProps> {
	state = {
		name: "",
		options: this.props.event.options.map(option => ({...option, choice: ""}))
	};

	handleOptionsChange(optionIndex: number, event: { target: { value: string} }) {
		const options = [...this.state.options];
		options[optionIndex].choice = event.target.value;
		this.setState({options});
	}

	handleSubmit(event: any) {
		const { name, options } = this.state;
		const { event: {id}, linkID } = this.props;
		axios
			.post("/api/response", {
				name,
				options,
				eventId: id
			})
			.then(({ data }) => {
				this.props.history.push("/event/" + linkID);
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
						<label>Name</label>
						<input type="text"
							value={this.state.name}
							onChange={event => this.setState({name: event.target.value})}/>
					</div>

					<div className="container">
						{this.state.options.map((option, optionIndex) => {
							return	(<div key={"response-options-"+optionIndex}>
								<label>{option.label}</label>
								<input type="text"
									value={this.state.options[optionIndex].choice}
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