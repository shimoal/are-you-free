import * as React from "react";
const { Component } = React;
import axios from 'axios';

import IEvent from '../../interfaces/IEvent';

import Responses from './Responses';

interface IProps {
	event: IEvent;
	eventId: number
}

class ResponseResults extends Component<IProps> {
	state = {
		responses: []
	};

	componentDidMount() {
		const {eventId} = this.props;
		axios.get('/api/responses/' + eventId)
			.then(({data}) => {
				this.setState({responses: data});
			})
			.catch((error) => {
				this.setState({error});
			});
	}
	
	render() {
		if (this.state.responses.length) {
			return 	<div>
				<h2>Results</h2>
				<Responses responses={this.state.responses} options={this.props.event.options} />
			</div>;
		}
		return <p>No Responses</p>;

	}
}

export default ResponseResults;