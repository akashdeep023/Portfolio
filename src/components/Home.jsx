import { useGSAP } from "@gsap/react";
import React from "react";
import { gsap } from "gsap";
import JackImg from "../assets/AKASH DEEP1.jpg";

const Home = () => {
	useGSAP(() => {
		gsap.from("#home h1", {
			duration: 1,
			opacity: 0,
			y: -50,
			stagger: 0.05,
			animation: "easeOutQuad",
		});
		gsap.to("#text-scroll span", {
			x: "-100%",
			duration: 55,
			ease: "none",
			repeat: -1,
		});
	});
	return (
		<div id="home" className="h-full w-full p-2 sm:p-4">
			<div className="flex flex-col md:flex-row justify-evenly items-center w-full h-[50vh] rounded-b-full overflow-hidden light-green">
				<h1 className="text-2xl sm:text-3xl">
					Hello I'm <span className="text-[#43BF1C]">Akash Deep</span>
				</h1>
				<div className="h-60 w-60 rotate-45 overflow-hidden rounded-b-full">
					<img
						src={JackImg}
						alt="Jack"
						className="-rotate-45 object-contain"
					/>
				</div>
			</div>
			<div
				id="text-scroll"
				className="w-full flex py-20 px-2 items-end text-[16vw] sm:text-[12vw] md:text-[9vw] font-bold whitespace-nowrap"
			>
				<span>
					Full Stack Developer | MERN Stack Specialist | Java | C++ |
					DSA | Full Stack Developer | MERN Stack Specialist | Java |
					C++ | DSA | Full Stack Developer | MERN Stack Specialist |
					Java | C++ | DSA
				</span>
			</div>
		</div>
	);
};

export default Home;
