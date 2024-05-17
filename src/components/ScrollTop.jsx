import React from "react";
import { handleScrollTop } from "../utils";
import { FaArrowAltCircleUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const ScrollTop = () => {
	return (
		<Link
			dataname="ScrollTop"
			to={"#top"}
			className="absolute right-3 sm:right-6 bottom-16 sm:bottom-5 cursor-pointer"
		>
			<FaArrowAltCircleUp fontSize={"40px"} onClick={handleScrollTop} />
		</Link>
	);
};

export default ScrollTop;
