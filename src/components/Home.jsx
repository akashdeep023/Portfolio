import { useGSAP } from "@gsap/react";
import React from "react";
import { gsap } from "gsap";
import JackImg from "../assets/Layer 1 copy-black-white.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
	useGSAP(() => {
		// let tl = gsap.timeline();
		gsap.from("#home h1", {
			duration: 1,
			opacity: 0,
			y: 100,
			stagger: 0.1,
			animation: "easeOutQuad",
		});
		gsap.from("#logo-box", {
			duration: 1.5,
			opacity: 0,
			// rotate: 90,
			// y: "-100%",
			scale: 0,
			animation: "easeOutQuad",
		});
		gsap.to("#text-scroll span", {
			x: "-100%",
			duration: 65,
			ease: "none",
			repeat: -1,
		});
		gsap.to("#home1 .home1-scroll", {
			y: (index) => (index === 0 ? -150 : 0),
			x: (index) => (index === 1 ? "-50%" : 0),

			stagger: 0.7,
			opacity: 0,
			scale: (index) => (index === 0 ? 0.7 : 1),
			scrollTrigger: {
				trigger: "#home1",
				scroller: "body",
				start: "top 7.5%",
				// start: "top 3%",
				end: "top -50%",
				scrub: 1,
				// pin: true,
			},
		});
	});
	return (
		<div id="home" className="h-full w-full">
			<div
				id="home1"
				className="bg-green-gradient min-h-dvl pt-4 sm:pt-16"
			>
				<div className="home1-scroll flex flex-col md:flex-row justify-evenly items-center w-full min-h-fit h-[60vh] sm:h-[65vh] md:h-[50vh]">
					<div className="font-bold p-3 ">
						<h1 className="text-2xl sm:text-3xl">
							Hello I'm{" "}
							<span className="heading-color">Akash Deep</span>
						</h1>
						<h1 className="text-3xl sm:text-5xl">
							Full Stack Developer
						</h1>
						<h1 className="text-3xl sm:text-5xl">Web Developer</h1>
						<h1 className="text-3xl sm:text-5xl">
							DSA with Java & C++
						</h1>
						<h1 className="text-base font-normal">
							Forging digital bridges, one line of code at a time,
							to empower all in the online realm.{" "}
						</h1>
					</div>
					<div
						id="logo-box"
						className="size-72 sm:size-80 md:size-96 object-contain flex items-end rotate-6"
					>
						<img
							src={JackImg}
							alt="Jack"
							className="object-cover rounded-b-2xl"
						/>
					</div>
				</div>
				<div
					id="text-scroll"
					className="home1-scroll w-full flex py-20 px-2 items-end text-[16vw] sm:text-[12vw] md:text-[9vw] font-bold whitespace-nowrap"
				>
					<span>
						Full Stack Developer | MERN Stack Specialist | Java |
						C++ | DSA | Full Stack Developer | MERN Stack Specialist
						| Java | C++ | DSA | Full Stack Developer | MERN Stack
						Specialist | Java | C++ | DSA
					</span>
				</div>
			</div>
			<div id="home2" className="w-full h-dvh light-green">
				<div></div>
			</div>
		</div>
	);
};

export default Home;
