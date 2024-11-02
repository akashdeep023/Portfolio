import React, { useRef } from "react";
import Heading from "../components/Heading";
import { projectDetails } from "../utils/constant";
import ProjectBox from "../components/ProjectBox";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);

const Project = () => {
	const projectBox = useRef();
	useGSAP(() => {
		gsap.from("#projectBox div ", {
			duration: 5,
			opacity: 0,
			y: 50,
			stagger: 0.9,
			animation: "easeOutQuad",
			scrollTrigger: {
				trigger: "#projectBox",
				scroller: "body",
				start: "top 130%",
				end: "top -150%",
				scrub: 3,
			},
		});
	});
	return (
		<div className="w-full min-full mb-4 sm:mb-8">
			<Heading text={"Project"} />
			<div
				ref={projectBox}
				id="projectBox"
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
