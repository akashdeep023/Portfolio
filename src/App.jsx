import React, { Suspense, useEffect, useRef, useState } from "react";
import Header, { SubHeader } from "./components/Header";
import LocomotiveScroll from "locomotive-scroll";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
const Home = React.lazy(() => import("./components/Home"));
const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));
const Project = React.lazy(() => import("./components/Project"));
import FrontPage from "./components/FrontPage";
import Links from "./components/Links";
import Footer from "./components/Footer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

	return (
		<div
			data-scroll-container
			id="scroll"
			className="sticky"
			ref={scrollBox}
		>
			<div
				data-scroll
				data-scroll-sticky
				data-scroll-target="#scroll"
				className="relative z-50"
			>
				<SubHeader setHeaderShow={setHeaderShow} />
				{headerShow && <Header setHeaderShow={setHeaderShow} />}
			</div>
			<div className="app-layout-content mt-14 sm:mt-16 md:mt-20 w-full min-h-[60vh] light-green overflow-hidden">
				<Outlet />
			</div>
			<div className="fixed bottom-0 z-30 w-full">{/* <Links /> */}</div>
			<Footer />
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
				element: (
					<Suspense fallback={<FrontPage />}>
						<Home />
						{/* <FrontPage /> */}
					</Suspense>
				),
			},
			{
				path: "/about",
				element: (
					<Suspense fallback={<FrontPage />}>
						<About />
					</Suspense>
				),
			},
			{
				path: "/contact",
				element: (
					<Suspense fallback={<FrontPage />}>
						<Contact />
					</Suspense>
				),
			},
			{
				path: "/Project",
				element: (
					<Suspense fallback={<FrontPage />}>
						<Project />
					</Suspense>
				),
			},
			{
				path: "*",
				element: (
					<Suspense fallback={<FrontPage />}>
						<Home />
					</Suspense>
				),
			},
		],
		// errorElement: (
		// 	<Suspense fallback={<FrontPage />}>
		// 		<div>Something went wrong</div>
		// 	</Suspense>
		// ),
	},
]);
function App() {
	return <RouterProvider router={appRouter}></RouterProvider>;
}

export default App;
