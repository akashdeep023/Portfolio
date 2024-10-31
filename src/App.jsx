import React, { Suspense, useEffect, useState } from "react";
import Header, { SubHeader } from "./components/Header";
import LocomotiveScroll from "locomotive-scroll";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import PageNotFound from "./components/PageNotFound";
gsap.registerPlugin(ScrollTrigger);

function App() {
	const [headerShow, setHeaderShow] = useState(false);
	const [scrollShow, setScrollShow] = useState(true);

	// Use LOCOMotiveScroll -----------------------------
	// const scrollBox = useRef("");
	// useEffect(() => {
	// 	const scroll = new LocomotiveScroll({
	// 		el: document.querySelector(".scrollPage"),
	// 		smooth: true,
	// 	});
	// }, [scrollBox.current, scroll]);

	// Scroll btn hide --------------------------------
	useEffect(() => {
		window.addEventListener("scroll", () => {
			var currentScrollPos = window.pageYOffset;
			if (currentScrollPos > 80) {
				setScrollShow(false);
			} else {
				setScrollShow(true);
			}
		});
	}, []);

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
		<BrowserRouter>
			<div
				id={theme}
				// data-scroll-container
				// className="sticky scrollPage"
				// ref={scrollBox}
			>
				<div className="containerBox relative">
					<div
						// data-scroll
						// data-scroll-sticky
						// data-scroll-target=".scrollPage"
						className="relative z-50"
					>
						<SubHeader setHeaderShow={setHeaderShow} />
						{headerShow && <Header setHeaderShow={setHeaderShow} />}
					</div>
					<div className="h-14 sm:h-16 md:h-20 dark-green w-full"></div>
					<div className="app-layout-content w-full min-h-[90vh] light-green overflow-hidden">
						<Suspense fallback={<FrontPage />}>
							<Routes>
								<Route path="/" element={<Home />} />
								<Route path="/about" element={<About />} />
								<Route path="/contact" element={<Contact />} />
								<Route path="/project" element={<Project />} />
								<Route path="/*" element={<PageNotFound />} />
							</Routes>
						</Suspense>
					</div>
					<div className={headerShow ? "hidden" : "block"}>
						<div className="fixed bottom-0 z-30 w-full">
							<Links theme={theme} handleTheme={handleTheme} />
						</div>
					</div>
					<Footer />
					<ScrollTop scrollShow={scrollShow} />
				</div>
			</div>
		</BrowserRouter>
	);
}

export default App;
