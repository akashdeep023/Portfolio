import React from "react";
import { FaGithub, FaLinkedinIn, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { DiJavascript1 } from "react-icons/di";
import { FaJava } from "react-icons/fa6";
import {
	SiBootstrap,
	SiCloudinary,
	SiCss3,
	SiEjs,
	SiExpress,
	SiFirebase,
	SiHtml5,
	SiMapbox,
	SiMongodb,
	SiNodedotjs,
	SiPassport,
	SiReact,
	SiRedux,
	SiTailwindcss,
} from "react-icons/si";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);

const ProjectBox = ({ project, idx }) => {
	useGSAP(() => {
		gsap.from(".projectbox" + idx, {
			duration: 1,
			opacity: 0,
			y: 150,
			animation: "easeOutQuad",
			scrollTrigger: {
				scroller: "body",
				trigger: ".projectbox" + idx,
				start: "top 110%",
				end: "top 70%",
				scrub: 2,
			},
		});
	});
	return (
		<div
			id="projectbox"
			className={`hover:z-30 group relative projectbox${idx}`}
		>
			<span className="z-20 h-full w-full absolute top-0 left-0 flex transition-all duration-700 items-center group-hover:opacity-100 opacity-0">
				<span className="p-2 flex justify-center gap-4 w-full group-hover:translate-y-full transition-all duration-300">
					{project?.live && (
						<Link
							target="_blank"
							to={project.live}
							className="hover:scale-125 transition-all duration-200 p-3.5 bg-gradient-to-r to-customeLight-500 dark:to-customeDark-500 from-customeLight-600 dark:from-customeDark-600 rounded-full border border-black/50 dark:border-white/50 shadow-sm shadow-black dark:shadow-white"
						>
							<FaRegEye />
						</Link>
					)}
					{project?.github && (
						<Link
							target="_blank"
							to={project.github}
							className="hover:scale-125 transition-all duration-200 p-3.5 bg-gradient-to-r to-customeLight-500 dark:to-customeDark-500 from-customeLight-600 dark:from-customeDark-600 rounded-full border border-black/50 dark:border-white/50 shadow-sm shadow-black dark:shadow-white"
						>
							<FaGithub />
						</Link>
					)}
					{project?.linkedin && (
						<Link
							target="_blank"
							to={project.linkedin}
							className="hover:scale-125 transition-all duration-200 p-3.5 bg-gradient-to-r to-customeLight-500 dark:to-customeDark-500 from-customeLight-600 dark:from-customeDark-600 rounded-full border border-black/50 dark:border-white/50 shadow-sm shadow-black dark:shadow-white"
						>
							<FaLinkedinIn />
						</Link>
					)}
				</span>
			</span>
			<span className="w-full z-10 absolute top-10 px-3 py-5 group-hover:opacity-100 translate-y-1/2 group-hover:translate-y-0 opacity-0 transition-all duration-500 ease-in-out">
				<img
					src={"/projects/" + project.image}
					alt={project.name}
					className="w-full"
				/>
			</span>
			<div className="flex flex-col gap-2 overflow-hidden bg-gradient-to-t to-customeLight-500 h-full dark:to-customeDark-500 from-customeLight-600 dark:from-customeDark-600 px-3 py-5  rounded-3xl border dark:border-white/40 border-black/40 shadow-md shadow-black/50">
				<h2 className="text-center text-xl sm:text-2xl font-bold">
					{project.name}
				</h2>
				<div className="h-20 w-20 blur-3xl z-0  absolute top-0 right-0 bg-gradient-to-t to-customeGreen-500 from-customeGreen-600"></div>
				<div className="h-20 w-20 blur-3xl z-0  absolute bottom-0 left-0 bg-gradient-to-t to-customeGreen-500 from-customeGreen-600"></div>
				<div
					className="w-full z-10 transition-all duration-100"
					id="imageP"
				>
					<img
						src={"/projects/" + project.image}
						alt={project.name}
						className="w-full"
					/>
				</div>
				<p className="opacity-70 text-lg">{project.project}</p>
				<p className="line-clamp-2">{project.description}</p>
				<p className="line-clamp-4 z-10 flex flex-wrap min-h-20 justify-start content-start gap-0">
					{project.technology.map((skill, idx) => {
						return (
							<span
								key={skill + "tech" + idx}
								className="flex items-center text-sm gap-1 w-fit text-gray-900 px-3 py-1 h-fit shadow-lg m-0.5 rounded-3xl bg-gradient-to-l to-customeGreen-500 from-customeGreen-600"
							>
								{skill == "Java" && <FaJava />}
								{skill == "JavaScript" && <DiJavascript1 />}
								{skill == "React.js" && <SiReact />}
								{skill == "Node.js" && <SiNodedotjs />}
								{skill == "Express.js" && <SiExpress />}
								{skill == "MongoDB" && <SiMongodb />}
								{skill == "Tailwind CSS" && <SiTailwindcss />}
								{skill == "Bootstrap CSS" && <SiBootstrap />}
								{skill == "Passport.js" && <SiPassport />}
								{skill == "Cloudinary" && <SiCloudinary />}
								{skill == "Firebase" && <SiFirebase />}
								{skill == "MapBox" && <SiMapbox />}
								{skill == "Redux" && <SiRedux />}
								{skill == "HTML" && <SiHtml5 />}
								{skill == "Vanilla CSS" && <SiCss3 />}
								{skill == "EJS" && <SiEjs />}
								<span>{skill}</span>
							</span>
						);
					})}
				</p>
			</div>
		</div>
	);
};

export default ProjectBox;
