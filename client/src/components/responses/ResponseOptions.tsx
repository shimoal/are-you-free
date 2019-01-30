import * as React from "react";

import ResponseOptionChoice from './ResponseOptionChoice';

interface IOption {
	id: number;
	label: string;
	choice: string;
}

interface IProps {
	handleOptionsChange: (optionId: number, choice: string) => void;
	options: Array<IOption>;
}

const ResponseOptions = (props: IProps) => {
	const {handleOptionsChange, options} = props;
	return <div>{options.map((option, optionIndex) => {
		return	(
			<ResponseOptionChoice handleOptionsChange={handleOptionsChange} option={option}/>
		);
	})}
	</div>;
}

export default ResponseOptions;