import * as React from 'react';

interface IProps {
	onClick: () => void
}

export default (props: IProps) => {
	return <button className="btn-large blue-grey lighten-2" onClick={props.onClick}>Cancel</button>
}