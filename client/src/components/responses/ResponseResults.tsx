import * as React from "react";
const { Component } = React;
import axios from 'axios';

interface IProps {
	eventId: number
}

class ResponseResults extends Component<IProps> {
	state = {
		responses: [{name: "", options: [{label: "", response: ""}]}]
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
			{JSON.stringify(this.state.responses)}
		</div>;
	}
}

export default ResponseResults;