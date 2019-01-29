import * as React from 'react';

import IEvent from '../../interfaces/IEvent';

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
	event: IEvent;
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
					</tbody>
				</table>
				<div className="row center">
					<a
						href={`/events/responses/${props.event.linkID}/new`}
						className="btn-large amber darken-2"
					>
					Add a Response
				</a>
			</div>
			</div>
	);
}