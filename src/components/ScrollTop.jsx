import React from "react";
import { handleScrollTop } from "../utils";
import { FaArrowAltCircleUp } from "react-icons/fa";

const ScrollTop = () => {
	return (
		<div className="absolute right-6 bottom-16 sm:bottom-5 cursor-pointer">
			<FaArrowAltCircleUp fontSize={"40px"} onClick={handleScrollTop} />
		</div>
	);
};

export default ScrollTop;
