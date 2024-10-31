import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
	return (
		<div className="w-full h-[calc(100vh-60px)] flex flex-col gap-2 items-center justify-center">
			<h1 className="text-xl sm:text-2xl font-bold">Page Not Found</h1>
			<h1 className="text-lg sm:text-3xl font-bold">404 | Bad request</h1>
			<p className="leading-7 opacity-90">Go back to Home Page</p>
			<Link to={"/"}>Home</Link>
		</div>
	);
};

export default PageNotFound;
