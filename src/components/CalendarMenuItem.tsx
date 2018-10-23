import * as React from "react";

export default function(props: {
	selectedView: string;
	setView: (x: string) => void;
	view: string;
}) {
	const { selectedView, setView, view } = props;

	const viewName = view.charAt(0).toUpperCase() + view.slice(1);
	const className = selectedView === view ? "selected" : "default";

	const click: () => void = () => setView(view);
	return (
		<div className={className} onClick={click}>
			{viewName} View
		</div>
	);
}
