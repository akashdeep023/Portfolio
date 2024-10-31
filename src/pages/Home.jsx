import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { gsap } from "gsap";
import JackImg from "../assets/Layer 1 copy-black-white.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
	useGSAP(() => {
		gsap.from(".home1-scroll > div > h1", {
			duration: 1,
			opacity: 0,
			y: 100,
			stagger: 0.1,
			animation: "easeOutQuad",
		});
		gsap.to("#img-box > div", {
			duration: 1,
			opacity: 0,
			stagger: 0.06,
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
			},
		});

		gsap.from(".home2-fam > div ", {
			duration: 5,
			opacity: 0,
			y: 100,
			stagger: 0.8,
			animation: "easeOutQuad",
			scrollTrigger: {
				trigger: ".home2-fam",
				scroller: "body",
				start: "top 80%",
				end: "top 20%",
				scrub: 2,
			},
		});
		gsap.from(".home2-fam > div b ", {
			duration: 1,
			animation: "easeOutQuad",
			innerText: "0",
			snap: {
				innerText: 0.1,
			},
			scrollTrigger: {
				trigger: ".home2-fam >div",
				scroller: "body",
				start: "top 80%",
				end: "top 70%",
				scrub: 5,
			},
		});
	});
	return (
		<div id="home" className="h-full w-full">
			<div id="home1" className=" min-h-dvl pt-4 sm:pt-16">
				<div className="home1-scroll flex flex-col md:flex-row justify-evenly items-center w-full min-h-fit gap-7 ">
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
						className="min-w-72 sm:min-w-80 md:min-w-96 size-72 sm:size-80 md:size-96 object-contain flex items-end relative "
					>
						<img
							src={JackImg}
							alt="Jack"
							className=" size-72 sm:size-80 md:size-96 absolute object-cover rounded-b-2xl"
						/>
						<div
							id="img-box"
							className="flex flex-wrap absolute h-full w-full top-0 left-0 overflow-hidden"
						>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
							<div className=" border h-10 sm:min-h-14 md:h-16 min-w-10 sm:min-w-14 md:min-w-16 flex-grow"></div>
						</div>
					</div>
				</div>
				<div
					id="text-scroll"
					className="home1-scroll w-full flex py-3 px-2 items-end text-[16vw] sm:text-[12vw] md:text-[9vw] font-bold whitespace-nowrap"
				>
					<span>
						Full Stack Developer | MERN Stack Specialist | Java |
						C++ | DSA | Full Stack Developer | MERN Stack Specialist
						| Java | C++ | DSA | Full Stack Developer | MERN Stack
						Specialist | Java | C++ | DSA
					</span>
				</div>
			</div>
			<div id="home2" className="w-full h-dvh ">
				<div className="home2-fam w-full h-fit flex flex-wrap justify-evenly p-3 sm:p-5 md:p-10">
					<div className="h-32 sm:h-44 md:h-52 lg:h-60 w-32 sm:w-44 md:w-52 lg:w-60 m-1 shadow-md shadow-white border-2 rounded-2xl  flex items-center text-center justify-center flex-col">
						<div className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
							<b>20</b>
							<span>+</span>
						</div>
						<h1 className="text-base sm:text-lg md:text-xl">
							Project Completed
						</h1>
					</div>
					<div className="h-32 sm:h-44 md:h-52 lg:h-60 w-32 sm:w-44 md:w-52 lg:w-60 m-1 shadow-md shadow-white border-2 rounded-2xl  flex items-center text-center justify-center flex-col">
						<div className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
							<b>1</b>
							<span>K+</span>
						</div>
						<h1 className="text-base sm:text-lg md:text-xl">
							Solving Errors
						</h1>
					</div>
					<div className="h-32 sm:h-44 md:h-52 lg:h-60 w-32 sm:w-44 md:w-52 lg:w-60 m-1 shadow-md shadow-white border-2 rounded-2xl  flex items-center text-center justify-center flex-col">
						<div className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
							<b>1.7</b>
							<span>K+</span>
						</div>
						<h1 className="text-base sm:text-lg md:text-xl">
							LinkedIn Family
						</h1>
					</div>
					<div className="h-32 sm:h-44 md:h-52 lg:h-60 w-32 sm:w-44 md:w-52 lg:w-60 m-1 shadow-md shadow-white border-2 rounded-2xl  flex items-center text-center justify-center flex-col">
						<div className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
							<b>1</b>
							<span>+</span>
						</div>
						<h1 className="text-base sm:text-lg md:text-xl">
							Year of Experience
						</h1>
					</div>
				</div>
			</div>
			<div id="home3" className="w-full h-dvh "></div>
		</div>
	);
};

export default Home;
