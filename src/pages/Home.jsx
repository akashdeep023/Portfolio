import React from "react";
import resume from "../assets/AKASHDEEP-RESUME.pdf";
import ContactBox from "../components/ContactBox";
import Heading from "../components/Heading";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "../components/Hero";
gsap.registerPlugin(ScrollTrigger);

const Home = () => {
	useGSAP(() => {
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
		<div id="home" className="relative h-full w-full">
			<a
				target="_blank"
				download={resume}
				href={resume}
				className="bg-gradient-to-l hover:bg-gradient-to-r to-customeGreen-500 from-customeGreen-600 text-black h-10 w-fit fixed left-4 origin-left rotate-90 bottom-56 z-40 py-2 px-4 rounded-lg flex items-center justify-cente text-sm sm:text-base"
			>
				Download Resume
			</a>
			<Hero />
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
