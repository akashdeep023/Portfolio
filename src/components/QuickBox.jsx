import React from "react";
import { Link } from "react-router-dom";

const QuickBox = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4 w-full sm:w-5/6 py-4 sm:py-5 md:py-6 px-6 sm:px-9 md:px-12 m-auto">
			<Link
				to={"/about"}
				className="relative overflow-hidden w-full min-h-36 sm:min-h-44 p-4 sm:p-6 rounded-3xl border dark:border-white/40 border-black/40 shadow-md shadow-black/50 bg-gradient-to-t to-customeLight-500 dark:to-customeDark-500 from-customeLight-600 dark:from-customeDark-600  flex items-center text-center justify-center gap-2 flex-col"
			>
				<div
					id="animation-box1"
					className="h-20 w-20 blur-3xl z-0 absolute right-0 bottom-0 bg-gradient-to-t to-customeGreen-500 from-customeGreen-600"
				></div>
				<div
					id="animation-box2"
					className="h-20 w-20 blur-3xl z-0 absolute left-0 top-0 bg-gradient-to-t to-customeGreen-500 from-customeGreen-600"
				></div>
				<h2 className="font-bold text-lg sm:text-3xl uppercase flex items-center">
					A little on Me
				</h2>
				<h2 className="font-bold text-2xl sm:text-5xl uppercase heading-color flex items-center">
					Bio
				</h2>
			</Link>
			<Link
				to={"/project"}
				className="relative overflow-hidden w-full min-h-36 sm:min-h-44 p-4 sm:p-6 rounded-3xl border dark:border-white/40 border-black/40 shadow-md shadow-black/50 bg-gradient-to-t to-customeLight-500 dark:to-customeDark-500 from-customeLight-600 dark:from-customeDark-600  flex items-center text-center justify-center gap-2 flex-col"
			>
				<div
					id="animation-box1"
					className="h-20 w-20 blur-3xl z-0 absolute right-0 bottom-0 bg-gradient-to-t to-customeGreen-500 from-customeGreen-600"
				></div>
				<div
					id="animation-box2"
					className="h-20 w-20 blur-3xl z-0 absolute left-0 top-0 bg-gradient-to-t to-customeGreen-500 from-customeGreen-600"
				></div>
				<h2 className="font-bold text-lg sm:text-3xl uppercase flex items-center">
					See my Project
				</h2>
				<h2 className="font-bold text-2xl sm:text-5xl uppercase heading-color flex items-center">
					Hire me
				</h2>
			</Link>
		</div>
	);
};

export default QuickBox;
