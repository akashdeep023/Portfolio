import React from "react";

export const SubHeader = ({ setHeaderShow }) => {
	return (
		<div className="flex justify-between flex-nowrap items-center p-3">
			<div id="name" className="text-2xl p-2">
				Akash Deep
			</div>
			<div
				onClick={() => setHeaderShow(true)}
				className="flex flex-col gap-3 m-8  cursor-pointer"
			>
				<div className="bg-white h-0.5 w-8"></div>
				<div className="bg-white h-0.5 w-8"></div>
			</div>
		</div>
	);
};

const Header = ({ setHeaderShow }) => {
	return (
		<div id="header">
			<div className="lightest-green text-green-950  flex flex-col justify-end items-center h-[90vh] min-h-fit w-full absolute top-0 p-3 z-50">
				<div>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Veritatis, tempore quis praesentium sint iste non
					reprehenderit minima nesciunt sunt deleniti excepturi
					exercitationem, ratione minus deserunt. Distinctio corporis
					rem aperiam suscipit?
				</div>
			</div>
			<div className="lighter-green text-green-950 text-5xl sm:text-6xl md:text-7xl flex justify-evenly gap-y-5 sm:justify-between flex-col sm:flex-row items-center h-[80vh] min-h-fit w-full absolute top-0 p-5 z-50">
				<div
					onClick={() => setHeaderShow(false)}
					className="flex flex-col gap-3 m-3 p-2 absolute top-5 right-5 cursor-pointer"
				>
					<div className="bg-green-950 h-0.5 w-8 origin-left rotate-45"></div>
					<div className="bg-green-950 h-0.5 w-8 origin-left -rotate-45"></div>
				</div>
				<p id="name-big" className="sm:text-7xl md:text-8xl text-6xl">
					Akash deep
				</p>
				<div className="flex flex-col items-start">
					<p>Home</p>
					<p>About</p>
					<p>Project</p>
					<p>Contact</p>
				</div>
			</div>
		</div>
	);
};

export default Header;
