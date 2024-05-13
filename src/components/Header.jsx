import React, { useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

export const SubHeader = ({ setHeaderShow }) => {
	useGSAP(() => {
		gsap.from("#name span", {
			duration: 0.3,
			opacity: 0,
			y: -50,
			stagger: 0.05,
			animation: "easeOutQuad",
		});
		gsap.from("#menu div", {
			duration: 0.3,
			opacity: 0,
			x: 80,
			stagger: 0.08,
			animation: "easeOutQuad",
		});
	});

	useEffect(() => {
		document.querySelector("#scroll", () => {
			console.log("scroll");
		});
	}, []);

	return (
		<div className="flex justify-between flex-nowrap items-center px-4 sm:px-6 md:px-8 h-14 sm:h-16 md:h-20 fixed w-full top-0 dark-green transition-all">
			<Link to={"/"}>
				<div id="name" className="text-2xl p-2">
					<span>A</span>
					<span>k</span>
					<span>a</span>
					<span>s</span>
					<span>h</span>
					<span>&nbsp;</span>
					<span>d</span>
					<span>e</span>
					<span>e</span>
					<span>p</span>
				</div>
			</Link>
			<div
				id="menu"
				onClick={() => setHeaderShow(true)}
				className="flex flex-col gap-2 my-5 sm:my-6 md:my-7 items-end cursor-pointer transition-all"
			>
				<div className="bg-white h-0.5 w-10"></div>
				<div className="bg-white h-0.5 w-4"></div>
				<div className="bg-white h-0.5 w-8"></div>
			</div>
		</div>
	);
};

const Header = ({ setHeaderShow }) => {
	let closeHeaderAnimation;
	let hoverHeaderAnimation;
	let hoverOutHeaderAnimation;
	useGSAP(() => {
		let tl = gsap.timeline();
		tl.from("#header>div", {
			duration: 0.3,
			opacity: 0,
			y: "-100%",
			stagger: 0.3,
			animation: "easeOutQuad",
		});
		tl.from("#name-big", {
			duration: 0.2,
			opacity: 0,
			y: "50%",
			animation: "easeOutQuad",
		});

		tl.from("#nav-link p", {
			duration: 0.3,
			opacity: 0,
			x: "100%",
			stagger: 0.15,
			animation: "easeOutQuad",
		});
		closeHeaderAnimation = () => {
			tl.to("#header>div", {
				duration: 0.3,
				opacity: 0,
				y: "-100%",
				stagger: 0.3,
				reversed: true,
				animation: "easeOutQuad",
			});
		};
		hoverHeaderAnimation = (e) => {
			gsap.to("." + e.className, {
				duration: 0.2,
				opacity: 1,
				color: "#fff",
				stagger: 0.05,
				animation: "easeOutQuad",
			});
		};
		hoverOutHeaderAnimation = (e) => {
			gsap.to("." + e.className, {
				duration: 0.2,
				opacity: 1,
				color: "#052210",
				stagger: 0.05,
				animation: "easeOutQuad",
			});
		};
	});
	useGSAP(() => {
		const tt = gsap.timeline({ repeat: -1 });
		tt.to("#name-big span", {
			duration: 0.7,
			stagger: 0.1,
			color: "white",
			animation: "easeOutQuad",
		});
		tt.to("#name-big span", {
			duration: 0.7,
			stagger: 0.1,
			color: "#052210",
			animation: "easeOutQuad",
		});
	});
	const closeHeader = () => {
		closeHeaderAnimation();
		setTimeout(() => {
			setHeaderShow(false);
		}, 1000);
	};
	const hoverHeader = (e) => {
		hoverHeaderAnimation(e);
	};
	const hoverOutHeader = (e) => {
		hoverOutHeaderAnimation(e);
	};
	return (
		<div id="header" className="fixed w-full h-[90vh] top-0">
			<div className="dark-green text-center flex flex-col justify-end items-center h-[90vh] min-h-fit w-full fixed top-0 p-3 z-50">
				<div className="font-semibold text-sm sm:text-base">
					Full Stack Developer | MERN Stack Specialist | Java | C++ |
					DSA
				</div>
				<div className="hidden sm:block text-xs">
					Experienced Full Stack Developer proficient in building
					robust web applications using the MERN (MongoDB, Express.js,
					React, Node.js) stack. Skilled in Java, C++, and
					implementing efficient Data Structures & Algorithms for
					optimized software solutions.
				</div>
				<div className="sm:hidden text-xs">
					Experienced Full Stack Developer proficient in MERN stack
					web development, Java, C++, and implementing efficient Data
					Structures & Algorithms for optimized solutions.
				</div>
			</div>
			<div className="lighter-green dark-green-text text-5xl sm:text-6xl md:text-7xl flex justify-evenly gap-y-5 sm:justify-between flex-col sm:flex-row items-center h-[71vh] sm:h-[75vh] md:h-[77vh] min-h-fit w-full absolute top-0 p-5 z-50">
				<div
					onClick={closeHeader}
					className="flex flex-col gap-3 mx-2 sm:mx-4 md:mx-6 my-6 sm:my-7 md:my-8 absolute top-0 right-0  cursor-pointer"
				>
					<div className="bg-green-950 h-0.5 w-10 origin-left rotate-45"></div>
					<div className="bg-green-950 h-0.5 w-8 origin-left -rotate-45"></div>
				</div>
				<p id="name-big" className="sm:text-7xl md:text-8xl text-6xl">
					<span>A</span>
					<span>k</span>
					<span>a</span>
					<span>s</span>
					<span>h</span>
					<span>&nbsp;</span>
					<span>d</span>
					<span>e</span>
					<span>e</span>
					<span>p</span>
				</p>
				<div
					id="nav-link"
					className="flex flex-col gap-4 items-start font-bold"
				>
					<Link to={"/"}>
						<p
							className="cursor-pointer"
							onMouseLeave={(e) => hoverOutHeader(e.target)}
							onMouseEnter={(e) => hoverHeader(e.target)}
							onClick={closeHeader}
						>
							<span className="home-text">H</span>
							<span className="home-text">o</span>
							<span className="home-text">m</span>
							<span className="home-text">e</span>
						</p>
					</Link>
					<Link to={"/about"}>
						<p
							className="cursor-pointer"
							onMouseLeave={(e) => hoverOutHeader(e.target)}
							onMouseEnter={(e) => hoverHeader(e.target)}
							onClick={closeHeader}
						>
							<span className="about-text">A</span>
							<span className="about-text">b</span>
							<span className="about-text">o</span>
							<span className="about-text">u</span>
							<span className="about-text">t</span>
						</p>
					</Link>
					<Link to={"/project"}>
						<p
							className="cursor-pointer"
							onMouseLeave={(e) => hoverOutHeader(e.target)}
							onMouseEnter={(e) => hoverHeader(e.target)}
							onClick={closeHeader}
						>
							<span className="project-text">P</span>
							<span className="project-text">r</span>
							<span className="project-text">o</span>
							<span className="project-text">j</span>
							<span className="project-text">e</span>
							<span className="project-text">c</span>
							<span className="project-text">t</span>
						</p>
					</Link>
					<Link to={"/contact"}>
						<p
							className="cursor-pointer"
							onMouseLeave={(e) => hoverOutHeader(e.target)}
							onMouseEnter={(e) => hoverHeader(e.target)}
							onClick={closeHeader}
						>
							<span className="contact-text">C</span>
							<span className="contact-text">o</span>
							<span className="contact-text">n</span>
							<span className="contact-text">t</span>
							<span className="contact-text">a</span>
							<span className="contact-text">c</span>
							<span className="contact-text">t</span>
						</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;
