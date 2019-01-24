import * as React from "react";
const { Component } = React;
import axios from "axios";
import { RouteComponentProps, withRouter } from "react-router-dom";

interface IProps {
	linkID: string,
	eventId: number
}

class EventForm extends Component<IProps & RouteComponentProps> {
	state = {
		name: "",
		options: ["", "", ""]
	};

	handleOptionsChange(optionIndex: number, event: { target: { value: string} }) {
		const options = [...this.state.options];
		options[optionIndex] = event.target.value;
		this.setState({options});
	}

	handleSubmit(event: any) {
		const { name, options } = this.state;
		const { eventId, linkID } = this.props;
		axios
			.post("/api/response", {
				name,
				options,
				eventId
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