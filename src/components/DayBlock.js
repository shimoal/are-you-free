import React from 'react';

import '../styles/DayBlock.css';

export default function(props) {
	return <React.Fragment>
		<h3>{props.name}</h3>
		<div className="day" />
	</React.Fragment>;
}