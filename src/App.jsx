import { useEffect, useRef, useState } from "react";
import Header, { SubHeader } from "./components/Header";
import LocomotiveScroll from "locomotive-scroll";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Project from "./components/Project";
gsap.registerPlugin(ScrollTrigger);

const AppLayout = () => {
	const [headerShow, setHeaderShow] = useState(false);
	const scrollBox = useRef("");
	// Use LOCOMotiveScroll -----------------------------
	// useEffect(() => {
	// 	const scroll = new LocomotiveScroll({
	// 		el: document.querySelector("#scroll"),
	// 		smooth: true,
	// 	});
	// }, [scrollBox.current, scroll]);

	window.addEventListener("onload", () => {
		console.log("onload");
	});
	return (
		<div
			data-scroll-container
			id="scroll"
			className="sticky"
			ref={scrollBox}
		>
			<div data-scroll data-scroll-sticky data-scroll-target="#scroll">
				<SubHeader setHeaderShow={setHeaderShow} />
				{headerShow && <Header setHeaderShow={setHeaderShow} />}
			</div>
			<div className="app-layout-content">
				<Outlet />
			</div>
		</div>
	);
};

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/contact",
				element: <Contact />,
			},
			{
				path: "/Project",
				element: <Project />,
			},
			{
				path: "*",
				element: <Home />,
			},
		],
	},
]);
function App() {
	return <RouterProvider router={appRouter}></RouterProvider>;
}

export default App;
