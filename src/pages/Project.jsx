import React, { useRef } from "react";
import Heading from "../components/Heading";
import { projectDetails } from "../utils/constant";
import ProjectBox from "../components/ProjectBox";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);

const Project = () => {
	useGSAP(() => {
		gsap.from("#projectCont div", {
			duration: 3,
			opacity: 0,
			y: 80,
			stagger: 0.8,
			animation: "easeOutQuad",
			scrollTrigger: {
				trigger: "#projectCont",
				scroller: "body",
				start: "top 125%",
				end: "bottom 125%",
				scrub: 1,
			},
		});
	});
	return (
		<div className="w-full min-full mb-4 sm:mb-8">
			<Heading text={"Project"} />
			<div
				id="projectCont"
				className="grid grid-flow-row sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full py-4 sm:py-5 md:py-6 px-6 sm:px-9 md:px-12"
			>
				{projectDetails.map((project) => {
					return <ProjectBox project={project} key={project.name} />;
				})}
			</div>
		</div>
	);
};

export default Project;
