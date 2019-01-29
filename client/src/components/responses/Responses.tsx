import * as React from 'react';

import IOption from '../../interfaces/IOption';

interface IResponse_Options {
	response_option: {
		choice: string
	}
}

interface IResponse {
	name: string,
	options: Array<IResponse_Options>
}

interface IProps {
	options: Array<IOption>;
	responses: Array<IResponse>
}

export default (props: IProps) => {
	return (
		<div>
			<h3 className="center">Responses</h3>
			<table>
					<thead>
						<tr>
							<th>
								Name
							</th>
							{props.options.map((option, i) => {
								return <th key={`option-label-${i}`}>
									{option.label}
								</th>
							})}
						</tr>
					</thead>
					<tbody>
						{props.responses.map((response: IResponse, i) => {
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
			</div>
	);
}