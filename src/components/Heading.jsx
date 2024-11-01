import React from "react";

const Heading = ({ text }) => {
	return (
		<div className="w-full text-center">
			<h1 className="text-3xl sm:text-5xl my-4 font-bold heading-color border-b border-black dark:border-white px-2">
				{text}
			</h1>
		</div>
	);
};

export default Heading;
