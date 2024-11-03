import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { Link } from "react-router-dom";

const PageNotFound = () => {
	return (
		<div className="w-full h-[calc(100vh-60px)] flex flex-col gap-2 items-center justify-center">
			<h1 className="text-xl sm:text-2xl font-bold -mt-32">
				Page Not Found
			</h1>
			<h1 className="text-lg sm:text-3xl font-bold">404 | Bad request</h1>
			<p className="leading-7 opacity-90">Go back to Home Page</p>
			<Link
				to={"/"}
				className="group shadow-lg hover:shadow-xl bg-gradient-to-l hover:bg-gradient-to-r to-customeGreen-500 from-customeGreen-600 text-black h-10 w-fit py-2 px-6 rounded-lg flex items-center justify-cente gap-3 text-sm sm:text-base"
			>
				<BsArrowLeft className="group-hover:-translate-x-2/3 transition-all " />
				<span>Back to Home</span>
			</Link>
		</div>
	);
};

export default PageNotFound;
