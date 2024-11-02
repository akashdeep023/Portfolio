import React from "react";
import { skills } from "../utils/constant";
import Heading from "./Heading";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SkillsBar = () => {
	useGSAP(() => {
		gsap.from(".skills-bar .skill", {
			duration: 7,
			width: "0%",
			stagger: 0.8,
			animation: "easeOutQuad",
			scrollTrigger: {
				trigger: ".skills-bar",
				scroller: "body",
				start: "top 60%",
				end: "top 20%",
				scrub: 4,
			},
		});
		gsap.from(".skills-bar .percentage ", {
			duration: 7,
			animation: "easeOutQuad",
			innerText: "0",
			snap: {
				innerText: 0.1,
			},
			stagger: 0.8,
			scrollTrigger: {
				trigger: ".skills-bar .percentage",
				scroller: "body",
				start: "top 60%",
				end: "top 20%",
				scrub: 4,
			},
		});
	});
	return (
		<div className="skills-bar w-full h-fit flex flex-wrap justify-evenly py-4 sm:py-5 md:py-6 px-6 sm:px-9 md:px-12">
			<Heading text={"My Skills"} />
			<div className="relative w-full sm:w-5/6 px-3 sm:px-5 md:px-7 py-4 pb-7 sm:py-7 flex flex-col gap-5 overflow-hidden bg-gradient-to-t to-customeLight-500 dark:to-customeDark-500 from-customeLight-600 dark:from-customeDark-600 rounded-3xl border dark:border-white/40 border-black/40 shadow-md shadow-black/50">
				<div className="h-20 w-20 blur-3xl z-0  absolute top-0 right-0 bg-gradient-to-t to-customeGreen-500 from-customeGreen-600"></div>
				<div className="h-20 w-20 blur-3xl z-0  absolute bottom-0 left-0 bg-gradient-to-t to-customeGreen-500 from-customeGreen-600"></div>

				{skills.map((skill) => {
					return (
						<div
							key={skill.name}
							className="flex flex-col gap-2 z-10 relative"
						>
							<div className="flex">
								<span>{skill.name}</span>
								<span className="percentage ms-2">
									{skill.percentage.replace("%", "")}
								</span>
								<span>%</span>
							</div>
							<div className="bg-gray-500/30 rounded-xl">
								<div
									className="skill w-full h-1.5 sm:h-2 bg-gradient-to-l to-customeGreen-500 from-customeGreen-600 rounded-xl relative "
									style={{ width: skill.percentage }}
								>
									<div className="h-3 w-3 sm:h-4 sm:w-4 bg-black dark:bg-white rounded-full absolute -top-1/2 -right-2 before:content-[''] before:bg-black/80 dark:before:bg-white/80  before:absolute before:w-full before:h-full before:rounded-full before:animate-ping"></div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default SkillsBar;
