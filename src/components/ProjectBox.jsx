import React from "react";
import { FaGithub, FaLinkedinIn, FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProjectBox = ({ project }) => {
	return (
		<div className="relative group flex flex-col gap-2 overflow-hidden bg-gradient-to-t to-customeLight-500 dark:to-customeDark-500 from-customeLight-600 dark:from-customeDark-600 px-3 py-5 min-h-60 sm:min-h-64 md:min-h-72 rounded-3xl border dark:border-white/40 border-black/40">
			<h2 className="text-center text-xl sm:text-2xl font-bold">
				{project.name}
			</h2>
			<div className="h-20 w-20 blur-3xl z-0  absolute top-0 right-0 bg-gradient-to-t to-customeGreen-500 from-customeGreen-600"></div>
			<div className="h-20 w-20 blur-3xl z-0  absolute bottom-0 left-0 bg-gradient-to-t to-customeGreen-500 from-customeGreen-600"></div>
			<div className="w-full z-10">
				<img
					src={"../../public/projects/" + project.image}
					alt={project.name}
					className="h-full w-full"
				/>
			</div>
			<p className="opacity-70 text-lg">{project.project}</p>
			<p className="line-clamp-2">{project.description}</p>
			<p className="line-clamp-4 z-10">
				{project.technology.map((tech, idx) => {
					return (
						<span
							key={"tech" + idx}
							className="text-gray-900 border dark:border-white/40 border-black/40 px-2.5 py-0.5 m-0.5 rounded-3xl bg-gradient-to-l to-customeGreen-500 from-customeGreen-600"
						>
							{tech}
						</span>
					);
				})}
			</p>
			<div className="backdrop-blur-sm z-10 h-full w-full absolute top-0 left-0 flex transition-all duration-700 items-center group-hover:opacity-100 opacity-0">
				<div className="p-2 flex justify-center gap-4 w-full">
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
				</div>
			</div>
		</div>
	);
};

export default ProjectBox;
