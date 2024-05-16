import React from "react";

const Heading = ({ text }) => {
	return (
		<div className="w-full text-center">
			<h1 className="text-2xl sm:text-4xl my-4 font-bold heading-color">
				{text}
			</h1>
		</div>
	);
};

export default Heading;
