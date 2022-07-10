import React from "react";

const Main = (props: {
	children:
		| boolean
		| React.ReactChild
		| React.ReactFragment
		| React.ReactPortal
		| null
		| undefined;
}) => {
	return <div className="wrapper">{props.children}</div>;
};

export default Main;
