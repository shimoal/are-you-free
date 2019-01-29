import * as React from 'react';
const {Component} = React;

import Calendar from '../Calendar';

interface IProps {
	handleOptionsChange: (optionIndex: number, event: any) => void;
	options: Array<string>;
	removeOption: (optionIndex: number, event: any) => void;
}

class OptionsCreator extends Component<IProps> {
	render() {
		const {handleOptionsChange, options, removeOption} = this.props;
		return <div>
			Options
			<Calendar options={options} handleOptionsChange={handleOptionsChange} removeOption={removeOption}/>
		</div>
	}

}

export default OptionsCreator;