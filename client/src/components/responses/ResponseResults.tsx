import * as React from "react";
const { Component } = React;
import axios from 'axios';

import IEvent from '../../interfaces/IEvent';

interface IProps {
	event: IEvent;
	eventId: number
}

interface IResponse_Options {
	response_option: {
		choice: string
	}
}

interface IResponse {
	name: string,
	options: Array<IResponse_Options>
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
		return <div>
			<h2>Results</h2>
			<table>
				<thead>
					<tr>
						<th>
							Name
						</th>
						{this.props.event.options.map((option, i) => {
							return <th key={`option-label-${i}`}>
								{option.label}
							</th>
						})}
					</tr>
				</thead>
				<tbody>
					{this.state.responses.map((response: IResponse, i) => {
						return (
							<tr key={`response-${i}`}>
								<td>{response.name}</td>
								{response.options.map((option, i) => {
									return <td key={`response-option-${i}`} >{option.response_option.choice}</td>
								})}
							</tr>);
					})}
				</tbody>
			</table>
		</div>;
	}
}

export default ResponseResults;