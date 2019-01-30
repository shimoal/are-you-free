import * as React from 'react';

import IEvent from '../../interfaces/IEvent';

interface IResponse_Options {
	label: string;
	response_option: {
		choice: string
	}
}

interface IResponse {
	name: string,
	options: Array<IResponse_Options>
}

interface IProps {
	event: IEvent;
	responses: Array<IResponse>
}

export default (props: IProps) => {
	const responseTotals = {};
	props.event.options.forEach(option => {
		if (!responseTotals[option.label]) {
			responseTotals[option.label] = 0;
		}
	});
	props.responses.forEach(response => {
		response.options.forEach(option => {
			if (option.response_option.choice === 'Yes') {
				responseTotals[option.label]++;
			}
		})
	});
	
	return (
		<div>
			<h3 className="center">Responses</h3>
			<table>
					<thead>
						<tr>
							<th>
								Name
							</th>
							{props.event.options.map((option, i) => {
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
						<tr>
							<td>Total</td>
							{props.event.options.map((option, i) => {
								return <td key={`option-total=${i}`}>
									{responseTotals[option.label]}
								</td>
							})}
						</tr>
					</tbody>
				</table>
			</div>
	);
}