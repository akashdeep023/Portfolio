import { useGSAP } from "@gsap/react";
import React, { useRef } from "react";
import { gsap } from "gsap";
import JackImg from "../assets/img-1.png";
import resume from "../assets/AKASHDEEP-RESUME.pdf";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactBox from "../components/ContactBox";
import Heading from "../components/Heading";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
	useGSAP(() => {
		const lEase = gsap.parseEase("linear");
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
			stagger: 0.03,
			animation: "easeOutQuad",
		});
		gsap.to("#text-scroll span", {
			x: "-80%",
			duration: 65,
			ease: lEase,
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
		gsap.to("#load-img", {
			duration: 5,
			rotate: 360,
			repeat: -1,
			ease: lEase,
		});
	});
	return (
		<div id="home" className="relative h-full w-full">
			<a
				target="_blank"
				download={resume}
				href={resume}
				className="bg-gradient-to-l hover:bg-gradient-to-r to-customeGreen-500 from-customeGreen-600 text-black h-10 w-fit fixed left-4 origin-left rotate-90 bottom-56 z-40 py-2 px-4 rounded-lg flex items-center justify-cente text-sm sm:text-base"
			>
				Download Resume
			</a>
			<div id="home1" className=" min-h-dvl pt-4 sm:pt-8">
				<div className="home1-scroll flex flex-col md:flex-row justify-evenly items-center w-full min-h-fit gap-7 py-4 sm:py-5 md:py-6 px-6 sm:px-9 md:px-12">
					<div className="font-bold">
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
						<h1 className="text-base font-normal opacity-60">
							Forging digital bridges, one line of code at a time,
							to empower all in the online realm.{" "}
						</h1>
					</div>
					<div
						id="logo-box"
						className="min-w-72 rounded-full overflow-hidden border-t-2 border-l-2 border-r-2 border-black  dark:border-white  sm:min-w-80 md:min-w-96 size-72 sm:size-80 md:size-96 object-contain flex items-end relative "
					>
						<div
							id="load-img"
							className="size-64 sm:size-72 md:size-80 border-2 border-y-transparent dark:border-x-white border-x-black rounded-full flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
						></div>
						<img
							src={JackImg}
							alt="Jack"
							className=" size-72 sm:size-80 md:size-96 absolute object-cover object-top"
						/>
						<div
							id="img-box"
							className="flex flex-wrap absolute h-full w-full top-0 left-0 overflow-hidden"
						>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
							<div className="bg-customeDark-600 border h-8 sm:min-h-10 md:h-12 min-w-8 sm:min-w-10 md:min-w-12 flex-grow"></div>
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
			<div id="home2" className="w-full">
				<div className="home2-fam w-full h-fit flex flex-wrap justify-evenly py-4 sm:py-5 md:py-6 px-6 sm:px-9 md:px-12">
					<div className="size-36 sm:size-44 md:size-52 lg:size-60 m-2 sm:m-4 p-2  border-2 dark:border-white/30 shadow-md shadow-black/50 bg-gradient-to-t to-customeLight-500 dark:to-customeDark-500 from-customeLight-600 dark:from-customeDark-600  flex items-center text-center justify-center flex-col">
						<div className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
							<b>22</b>
							<span>+</span>
						</div>
						<h1 className="uppercase text-base sm:text-lg md:text-xl">
							Successfully completed project
						</h1>
					</div>
					<div className="size-36 sm:size-44 md:size-52 lg:size-60 m-2 sm:m-4 p-2  border-2 dark:border-white/30 shadow-md shadow-black/50 bg-gradient-to-t to-customeLight-500 dark:to-customeDark-500 from-customeLight-600 dark:from-customeDark-600  flex items-center text-center justify-center flex-col">
						<div className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
							<b>15</b>
							<span>+</span>
						</div>
						<h1 className="uppercase text-base sm:text-lg md:text-xl">
							Technologies
						</h1>
					</div>
					<div className="size-36 sm:size-44 md:size-52 lg:size-60 m-2 sm:m-4 p-2  border-2 dark:border-white/30 shadow-md shadow-black/50 bg-gradient-to-t to-customeLight-500 dark:to-customeDark-500 from-customeLight-600 dark:from-customeDark-600  flex items-center text-center justify-center flex-col">
						<div className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
							<b>2.2</b>
							<span>K+</span>
						</div>
						<h1 className="uppercase text-base sm:text-lg md:text-xl">
							LinkedIn Family
						</h1>
					</div>
					<div className="size-36 sm:size-44 md:size-52 lg:size-60 m-2 sm:m-4 p-2  border-2 dark:border-white/30 shadow-md shadow-black/50 bg-gradient-to-t to-customeLight-500 dark:to-customeDark-500 from-customeLight-600 dark:from-customeDark-600  flex items-center text-center justify-center flex-col">
						<div className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
							<b>1.0</b>
							<span>+</span>
						</div>
						<h1 className="uppercase text-base sm:text-lg md:text-xl">
							Year of Experience
						</h1>
					</div>
				</div>
			</div>
			<div className="py-4 sm:py-5 md:py-6 px-6 sm:px-9 md:px-12">
				<Heading text={"Contact Us"} />
				<ContactBox />
			</div>
		</div>
	);
};

export default Home;
