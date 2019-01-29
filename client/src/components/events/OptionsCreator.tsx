import * as React from 'react';
const {Component} = React;

import Calendar from '../Calendar';

class OptionsCreator extends Component {
	render() {
		return <div>
			Options
			<Calendar />
		</div>
	}

}

export default OptionsCreator;