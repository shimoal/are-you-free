import * as React from "react";

import ResponseOptionChoice from './ResponseOptionChoice';

interface IOption {
	id: number;
	label: string;
	choice: string;
}

interface IProps {
	handleOptionsChange: (optionIndex: number, event: any) => void;
	options: Array<IOption>;
}

const ResponseOptions = (props: IProps) => {
	const {options} = props;
	return <div>{options.map((option, optionIndex) => {
		return	(
			<ResponseOptionChoice label={option.label}/>
		);
	})}
	</div>;
}

export default ResponseOptions;