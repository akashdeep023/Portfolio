import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const ScoreFam = () => {
	useGSAP(() => {
		gsap.from(".score-fam > div ", {
			duration: 5,
			opacity: 0,
			y: 100,
			stagger: 0.8,
			animation: "easeOutQuad",
			scrollTrigger: {
				trigger: ".score-fam",
				scroller: "body",
				start: "top 80%",
				end: "top 12%",
				scrub: 2,
			},
		});
		gsap.from(".score-fam > div b ", {
			duration: 1,
			animation: "easeOutQuad",
			innerText: "0",
			snap: {
				innerText: 0.1,
			},
			scrollTrigger: {
				trigger: ".score-fam >div",
				scroller: "body",
				start: "top 80%",
				end: "top 70%",
				scrub: 5,
			},
		});
	});
	return (
		<div className="score-fam w-full h-fit flex flex-wrap justify-evenly py-4 sm:py-5 md:py-6 px-6 sm:px-9 md:px-12">
			<div className="relative overflow-hidden size-36 sm:size-44 md:size-52 lg:size-60 m-2 sm:m-4 p-2  rounded-3xl border dark:border-white/40 border-black/40 shadow-md shadow-black/50 bg-gradient-to-t to-customeLight-500 dark:to-customeDark-500 from-customeLight-600 dark:from-customeDark-600  flex items-center text-center justify-center flex-col">
				<div className="h-12 w-12 blur-2xl z-0  absolute top-0 right-0 bg-gradient-to-t to-customeGreen-500 from-customeGreen-600"></div>
				<div className="h-12 w-12 blur-2xl z-0  absolute bottom-0 left-0 bg-gradient-to-t to-customeGreen-500 from-customeGreen-600"></div>
				<div className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
					<b>22</b>
					<span>+</span>
				</div>
				<h1 className="uppercase text-base sm:text-lg md:text-xl">
					Successfully completed project
				</h1>
			</div>
			<div className="relative overflow-hidden size-36 sm:size-44 md:size-52 lg:size-60 m-2 sm:m-4 p-2  rounded-3xl border dark:border-white/40 border-black/40 shadow-md shadow-black/50 bg-gradient-to-t to-customeLight-500 dark:to-customeDark-500 from-customeLight-600 dark:from-customeDark-600  flex items-center text-center justify-center flex-col">
				<div className="h-12 w-12 blur-2xl z-0  absolute top-0 right-0 bg-gradient-to-t to-customeGreen-500 from-customeGreen-600"></div>
				<div className="h-12 w-12 blur-2xl z-0  absolute bottom-0 left-0 bg-gradient-to-t to-customeGreen-500 from-customeGreen-600"></div>
				<div className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
					<b>15</b>
					<span>+</span>
				</div>
				<h1 className="uppercase text-base sm:text-lg md:text-xl">
					Technologies
				</h1>
			</div>
			<div className="relative overflow-hidden size-36 sm:size-44 md:size-52 lg:size-60 m-2 sm:m-4 p-2  rounded-3xl border dark:border-white/40 border-black/40 shadow-md shadow-black/50 bg-gradient-to-t to-customeLight-500 dark:to-customeDark-500 from-customeLight-600 dark:from-customeDark-600  flex items-center text-center justify-center flex-col">
				<div className="h-12 w-12 blur-2xl z-0  absolute top-0 right-0 bg-gradient-to-t to-customeGreen-500 from-customeGreen-600"></div>
				<div className="h-12 w-12 blur-2xl z-0  absolute bottom-0 left-0 bg-gradient-to-t to-customeGreen-500 from-customeGreen-600"></div>
				<div className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
					<b>2.2</b>
					<span>K+</span>
				</div>
				<h1 className="uppercase text-base sm:text-lg md:text-xl">
					LinkedIn Family
				</h1>
			</div>
			<div className="relative overflow-hidden size-36 sm:size-44 md:size-52 lg:size-60 m-2 sm:m-4 p-2  rounded-3xl border dark:border-white/40 border-black/40 shadow-md shadow-black/50 bg-gradient-to-t to-customeLight-500 dark:to-customeDark-500 from-customeLight-600 dark:from-customeDark-600  flex items-center text-center justify-center flex-col">
				<div className="h-12 w-12 blur-2xl z-0  absolute top-0 right-0 bg-gradient-to-t to-customeGreen-500 from-customeGreen-600"></div>
				<div className="h-12 w-12 blur-2xl z-0  absolute bottom-0 left-0 bg-gradient-to-t to-customeGreen-500 from-customeGreen-600"></div>
				<div className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
					<b>1.0</b>
					<span>+</span>
				</div>
				<h1 className="uppercase text-base sm:text-lg md:text-xl">
					Year of Experience
				</h1>
			</div>
		</div>
	);
};

export default ScoreFam;
