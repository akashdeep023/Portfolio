import React, { Suspense, useEffect, useRef, useState } from "react";
import Header, { SubHeader } from "./components/Header";
import LocomotiveScroll from "locomotive-scroll";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import {
	createBrowserRouter,
	Outlet,
	RouterProvider,
	useLocation,
} from "react-router-dom";
import JackImg from "./assets/Layer 1 copy-black-white.png";
const Home = React.lazy(() => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(import("./components/Home"));
		}, 2500);
	});
});
const About = React.lazy(() => import("./components/About"));
const Contact = React.lazy(() => import("./components/Contact"));
const Project = React.lazy(() => import("./components/Project"));
import FrontPage from "./components/FrontPage";
import Links from "./components/Links";
import Footer from "./components/Footer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollTop from "./components/ScrollTop";
import { handleScrollTop } from "./utils";
gsap.registerPlugin(ScrollTrigger);

const AppLayout = () => {
	const [headerShow, setHeaderShow] = useState(false);
	const { pathname } = useLocation();
	// Use LOCOMotiveScroll -----------------------------
	// const scrollBox = useRef("");
	// useEffect(() => {
	// 	const scroll = new LocomotiveScroll({
	// 		el: document.querySelector(".scrollPage"),
	// 		smooth: true,
	// 	});
	// }, [scrollBox.current, scroll]);
	// Scroll to top of page --------------------------------
	useEffect(() => {
		handleScrollTop();
	}, [pathname]);
	// Theme changes --------------------------------
	const [theme, setTheme] = useState("dark");
	const handleTheme = () => {
		if (theme === "dark") {
			setTheme("light");
		} else {
			setTheme("dark");
		}
	};
	return (
		<div
			id={theme}
			// data-scroll-container
			// className="sticky scrollPage"
			// ref={scrollBox}
		>
			<div
				// data-scroll
				// data-scroll-sticky
				// data-scroll-target=".scrollPage"
				className="relative z-50"
			>
				<SubHeader setHeaderShow={setHeaderShow} />
				{headerShow && <Header setHeaderShow={setHeaderShow} />}
			</div>
			<div className="app-layout-content mt-14 sm:mt-16 md:mt-20 w-full min-h-[60vh] light-green overflow-hidden">
				<Outlet />
			</div>
			<div className="fixed bottom-0 z-30 w-full">
				<Links />
			</div>
			<Footer />
			<div className="fixed bottom-0 z-40 w-full">
				<ScrollTop />
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
				element: (
					<Suspense fallback={<FrontPage />}>
						<Home />
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
		errorElement: (
			<Suspense fallback={<FrontPage />}>
				<div>
					<h1>Something went wrong</h1>
					<h1>404 | Bad request</h1>
				</div>
			</Suspense>
		),
	},
]);
function App() {
	return <RouterProvider router={appRouter}></RouterProvider>;
}

export default App;
