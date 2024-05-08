import React from "react";

export const SubHeader = () => {
	return (
		<div className="flex justify-between flex-nowrap items-center p-3">
			<div id="name" className="text-2xl p-2">
				Akash Deep
			</div>
			<div className="flex flex-col gap-3 m-3 p-2">
				<div className="bg-white h-0.5 w-8"></div>
				<div className="bg-white h-0.5 w-8"></div>
			</div>
		</div>
	);
};

const Header = () => {
	return (
		<>
			<div className="lightest-green text-green-950  flex flex-col justify-end items-center h-[90vh] min-h-fit w-full absolute top-0 p-3">
				<div>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit.
					Veritatis, tempore quis praesentium sint iste non
					reprehenderit minima nesciunt sunt deleniti excepturi
					exercitationem, ratione minus deserunt. Distinctio corporis
					rem aperiam suscipit?
				</div>
			</div>
			<div className="lighter-green text-green-950 text-7xl flex justify-between items-center h-[80vh] min-h-fit w-full absolute top-0 p-5">
				<div className="flex flex-col gap-3 m-3 p-2 absolute top-5 right-5">
					<div className="bg-green-950 h-0.5 w-8 origin-left translate-y-1/2"></div>
					<div className="bg-green-950 h-0.5 w-8 origin-left translate-y-1/2"></div>
				</div>
				<p id="name-big">Akash deep</p>
				<div className="flex flex-col items-start">
					<p>Home</p>
					<p>About</p>
					<p>Project</p>
					<p>Contact</p>
				</div>
			</div>
		</>
	);
};

export default Header;
