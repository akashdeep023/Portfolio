import React, { Suspense, useEffect, useState } from "react";
import Header, { SubHeader } from "./components/Header";
import { gsap } from "gsap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const Home = React.lazy(() => {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve(import("./pages/Home"));
		}, 2500);
	});
});
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Project = React.lazy(() => import("./pages/Project"));
import PageNotFound from "./pages/PageNotFound";
import Links from "./components/Links";
import Footer from "./components/Footer";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollTop from "./components/ScrollTop";
import Loading from "./components/Loading";
gsap.registerPlugin(ScrollTrigger);

function App() {
	const [headerShow, setHeaderShow] = useState(false);
	const [scrollShow, setScrollShow] = useState(true);

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
	const [darkMode, setDarkMode] = useState(false);
	useEffect(() => {
		let savedMode = localStorage.getItem("displayMode");
		if (!savedMode) {
			savedMode = "dark";
			setDarkMode(true);
			localStorage.setItem("displayMode", savedMode);
		}
		setDarkMode(savedMode === "dark" ? true : false);
	}, []);
	return (
		<BrowserRouter>
			<div className={`${darkMode ? "dark" : ""}`}>
				<div className="relative text-black dark:text-white bg-gradient-to-l to-customeLight-500 dark:to-customeDark-500 from-customeLight-600 dark:from-customeDark-600">
					<div className="relative z-50">
						<SubHeader setHeaderShow={setHeaderShow} />
						{headerShow && <Header setHeaderShow={setHeaderShow} />}
					</div>
					<div className="h-14 sm:h-16 md:h-20 w-full"></div>
					<div className="app-layout-content w-full min-h-[90vh]  overflow-hidden">
						<Suspense fallback={<Loading />}>
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
							<Links
								darkMode={darkMode}
								setDarkMode={setDarkMode}
							/>
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
