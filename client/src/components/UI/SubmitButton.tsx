	import * as React from "react";

	interface IProps {
		value: string
	}

	export default (props: IProps) => {
		return 	<input
			className="btn-large amber darken-2"
			type="submit"
			value={props.value}
		/>;
	}

