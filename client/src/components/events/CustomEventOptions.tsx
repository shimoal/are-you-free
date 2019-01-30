import * as React from 'react';

interface IProps {
	handleOptionsChange: (optionIndex: number, event: any) => void;
	options: Array<string>;
	removeOption: (optionIndex: number, event: any) => void;
}

export default (props: IProps) => {
	const {handleOptionsChange, options, removeOption} = props;

	return <div> 
		{props.options.map((option, optionIndex) => {
			return (
				<div key={"options-"+optionIndex} className="row">
					<div className="input-field col s12">
						<div className="right" onClick={(event) => {removeOption(optionIndex, event);}}>
						  <a className="btn red">
								<i className="large material-icons">cancel</i>
							</a>
						</div>
						<input 
							id={`options-${optionIndex}`}
							onChange={event => {
								handleOptionsChange(optionIndex, event);
							}}
							type="text"
							value={options[optionIndex]}
						/>
						<label className="active" htmlFor={`options-${optionIndex}`}>
							Option {optionIndex + 1}
						</label>
					</div>
				</div>
			);
		})}
	</div>;
}