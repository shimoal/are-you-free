import React from 'react';

import '../styles/DayBlock.css';

export default function(props) {
	return <div>
		<h3>{props.name}</h3>
		<div className="day" />
	</div>;
}