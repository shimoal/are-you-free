import * as React from "react";

interface IProps {
	errorMessage: string;
}
export default (props: IProps) => {
	return (
		<div className="container center">
			<h1 className="red-text">Error</h1>
			<p>{props.errorMessage}</p>
		</div>
	);
};
