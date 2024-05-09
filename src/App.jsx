import { useEffect, useRef, useState } from "react";
import Header, { SubHeader } from "./components/Header";
import LocomotiveScroll from "locomotive-scroll";

function App() {
	const [headerShow, setHeaderShow] = useState(false);
	const scrollBox = useRef("");
	// Use LOCOMotiveScroll
	// useEffect(() => {
	// 	const scroll = new LocomotiveScroll({
	// 		el: document.querySelector(".scroll"),
	// 		smooth: true,
	// 	});
	// }, [scrollBox.current, scroll]);
	return (
		<div className="scroll" ref={scrollBox}>
			<SubHeader setHeaderShow={setHeaderShow} />
			{headerShow && <Header setHeaderShow={setHeaderShow} />}
			<div
				data-scroll
				// data-scroll-speed="2"
				className="bg-green-900 h-screen w-full flex items-center justify-center"
			>
				Hello Jack
			</div>
			<div className="bg-green-950 h-screen w-full"></div>
		</div>
	);
}

export default App;
