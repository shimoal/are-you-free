import React from 'react';


export default function(props) {
	const  { selectedView, setView, view } = props;
	
	const viewName = view.charAt(0).toUpperCase() + view.slice(1);
	const className = selectedView === view ? 'selected' : 'default';

	return <div 
				className={className}
				onClick={() => setView(view)}>
					{viewName} View
	</div>;
}