import React from "react";
import resume from "../assets/AKASHDEEP-RESUME.pdf";
import Hero from "../components/Hero";
import ScoreFam from "../components/ScoreFam";
import SkillsBar from "../components/SkillsBar";
import Contact from "./Contact";

const Home = () => {
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
			<ScoreFam />
			<SkillsBar />
			<Contact />
		</div>
	);
};

export default Home;
