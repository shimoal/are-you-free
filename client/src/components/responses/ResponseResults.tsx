import * as React from "react";
const { Component } = React;
import axios from 'axios';

import IEvent from '../../interfaces/IEvent';

import Responses from './Responses';

interface IProps {
	event: IEvent;
}

class ResponseResults extends Component<IProps> {
	state = {
		responses: []
	};

	componentDidMount() {
		const {id} = this.props.event;
		axios.get('/api/responses/' + id)
			.then(({data}) => {
				this.setState({responses: data});
			})
			.catch((error) => {
				this.setState({error});
			});
	}
	
	render() {
		if (this.state.responses.length) {
			return 	<Responses responses={this.state.responses} event={this.props.event} />;
		}
		return <p>No Responses</p>;

	}
}

export default ResponseResults;