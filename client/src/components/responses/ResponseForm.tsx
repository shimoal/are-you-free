import * as React from "react";
const { Component } = React;
import axios from "axios";
import { RouteComponentProps, withRouter } from "react-router-dom";

import CancelButton from '../UI/CancelButton';
import ResponseOptions from './ResponseOptions';
import SubmitButton from '../UI/SubmitButton';

import IEvent from '../../interfaces/IEvent';

interface IProps {
	event: IEvent;
	cancelResponse: () => void;
}

const OPTION_CHOICES = {
	yes: 'Yes',
	no: 'No',
	maybe: 'Maybe'
};

class EventForm extends Component<IProps & RouteComponentProps> {
	state = {
		name: "",
		options: this.props.event.options.map(option => ({...option, choice: OPTION_CHOICES.no}))
	};

	handleOptionsChange(optionIndex: number, e: { target: { value: string} }) {
		const options = [...this.state.options];
		options[optionIndex].choice = e.target.value;
		this.setState({options});
	}

	handleSubmit(e: any) {
		const { name, options } = this.state;
		const { event: {id, linkID}, history } = this.props;
		axios
			.post("/api/response", {
				name,
				options,
				eventId: id
			})
			.then(({ data }) => {
				history.push("/event/" + linkID);
			})
			.catch(err => {
				history.push("/events/error");
			});
	}

	render() {
		const {name, options} = this.state;
		return (
			<div className="row">
				<form className="col s12" onSubmit={event => this.handleSubmit(event)}>
						<div className="row">
							<input 
								id="name"
								type="text"
								value={name}
								onChange={event => this.setState({name: event.target.value})}/>
							<label className="active" htmlFor="name">Name</label>
						</div>


						<ResponseOptions handleOptionsChange={(optionsIndex, event) => this.handleOptionsChange(optionsIndex, event)} options={options}/>

					<div className="row center">
						<div className="col s6">
							<CancelButton onClick={this.props.cancelResponse}/>
						</div>
						<div className="col s6">
							<SubmitButton value="Create" />
						</div>
					</div>

				</form>
			</div>
		);
	}
}

export default withRouter(EventForm);