import * as React from "react";

interface IProps {
	eventDescription: {
		title: string;
		createdBy: string;
		description: string;
	};
	handleTextFieldChange: (field: string, value: string) => void;
}

const FIELDS = [
	{
		label: "Title",
		name: "title",
		placeholder: "Book Club"
	},
	{
		label: "Creator (Example: Your name)",
		name: "createdBy",
		placeholder: "John Smith"
	},
	{
		label: "Event Description",
		name: "description",
		placeholder:
			"Our next gathering (at my house) for our monthly book club meetings"
	}
];

export default (props: IProps) => {
	const { eventDescription, handleTextFieldChange } = props;
	return (
		<div>
			{FIELDS.map(({ label, name, placeholder }) => {
				return (
					<div key={name} className="row">
						<div className="input-field col s12">
							<input
								id={name}
								onChange={event =>
									handleTextFieldChange(name, event.target.value)
								}
								placeholder={placeholder}
								type="text"
								value={eventDescription[name]}
							/>
							<label className="active" htmlFor={name}>
								{label}
							</label>
						</div>
					</div>
				);
			})}
		</div>
	);
};
