import { useEffect, useRef, useState } from "react";
import Header, { SubHeader } from "./components/Header";
import LocomotiveScroll from "locomotive-scroll";

function App() {
	const [headerShow, setHeaderShow] = useState(false);
	const scrollBox = useRef("");
	// const cursor = useRef();
	// Use LOCOMotiveScroll -----------------------------
	useEffect(() => {
		const scroll = new LocomotiveScroll({
			el: document.querySelector(".scroll"),
			smooth: true,
		});
	}, [scrollBox.current, scroll]);

	// let cursor = document.querySelector("#curson");
	// useEffect(() => {
	// 	let mousemovefn = () => {
	// 		document.addEventListener("mousemove", (event) => {
	// 			cursor.current.style.left = event.clientX + "px";
	// 			cursor.current.style.top = event.clientY + "px";
	// 			cursor.current.style.display = "block";
	// 			console.log(cursor.current);
	// 		});
	// 	};
	// 	mousemovefn();
	// 	return () => mousemovefn;
	// });

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
			{/* <div
				id="cursor"
				ref={cursor}
				className="h-5 w-5 border rounded-full fixed z-50 bg-black"
			></div> */}
		</div>
	);
}

export default App;
