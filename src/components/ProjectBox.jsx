import React from "react";

const ProjectBox = ({ project }) => {
	return (
		<div className="bg-gradient-to-t to-customeLight-500 dark:to-customeDark-500 from-customeLight-600 dark:from-customeDark-600 p-3 h-60 sm:h-64 md:h-72 rounded-3xl border dark:border-white/40 border-black/40 cursor-pointer">
			<h2 className="text-center text-xl sm:text-2xl font-bold">
				{project.name}
			</h2>
			<p className="line-clamp-2">{project.description}</p>
			<p className="line-clamp-2">
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
		</div>
	);
};

export default ProjectBox;
