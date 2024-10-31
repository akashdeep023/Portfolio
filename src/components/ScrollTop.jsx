import React from "react";
import { handleScrollTop } from "../utils";
import { FaArrowAltCircleUp } from "react-icons/fa";

const ScrollTop = ({ scrollShow }) => {
	return (
		<div
			className={`text-black dark:text-white h-16 w-16 fixed flex items-center justify-center ${
				scrollShow ? "bottom-full opacity-0" : "bottom-3 opacity-100"
			} right-0 sm:right-1 z-40 transition-all duration-700 animate-bounce cursor-pointer`}
		>
			<FaArrowAltCircleUp fontSize={"40px"} onClick={handleScrollTop} />
		</div>
	);
};

export default ScrollTop;
