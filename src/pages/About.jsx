import React, { Fragment, useState } from "react";
import JackImg from "../assets/img.png";
import Heading from "../components/Heading";
import Resume from "../assets/AKASHDEEP-RESUME.pdf";
import Graph from "/graph.svg";
import { BiDownload } from "react-icons/bi";
import { GoCopy } from "react-icons/go";
import { contactDetails, skills, socialLinks } from "../utils/constant";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { FaJava } from "react-icons/fa6";
import {
	SiExpress,
	SiMongodb,
	SiNodedotjs,
	SiReact,
	SiTailwindcss,
} from "react-icons/si";

const About = () => {
	const [emailCopy, setEmailCopy] = useState(false);
	return (
		<div className="w-full h-fit flex flex-wrap justify-evenly mb-4 sm:mb-8">
			<Heading text={"About"} />
			<div className="py-4 sm:py-5 md:py-6 px-6 sm:px-9 md:px-12 w-full flex justify-center">
				<div className="w-full sm:w-5/6 px-4 py-5 relative flex flex-col gap-2 overflow-hidden bg-gradient-to-t to-customeLight-500 dark:to-customeDark-500 from-customeLight-600 dark:from-customeDark-600 min-h-72 rounded-3xl border dark:border-white/40 border-black/40 shadow-md shadow-black/50">
					<div className="h-20 w-20 blur-3xl z-0 absolute top-0 right-0 bg-gradient-to-t to-customeGreen-500 from-customeGreen-600"></div>
					<div className="h-20 w-20 blur-3xl z-0 absolute bottom-0 left-0 bg-gradient-to-t to-customeGreen-500 from-customeGreen-600"></div>
					<h2 className="font-bold text-2xl sm:text-3xl uppercase">
						Akash Deep
					</h2>
					<p className="opacity-70 text-lg">
						Full Stack Developer DSA with Java & C++
					</p>
					<div className="flex flex-col-reverse sm:flex-row gap-4">
						<div className="flex flex-col gap-2 w-full sm:w-5/6">
							<p className="mt-4">
								Hi there! I'm a dedicated and innovative web
								developer with a robust foundation in the MERN
								stack (MongoDB, Express.js, React, Node.js). I
								excel at crafting dynamic, user-centric web
								applications that prioritize exceptional user
								experiences and seamless functionality.
							</p>
							<p>
								Driven by a passion for continuous learning, I
								actively engage with the latest industry trends
								and emerging technologies to refine my skills.
								I’m eager to explore new opportunities,
								collaborations, and projects with
								forward-thinking companies that foster
								professional growth, where I can contribute
								meaningfully and help bring innovative ideas to
								life.
							</p>
						</div>
						<img
							src={JackImg}
							alt="Image"
							className="h-36 sm:h-40 w-36 sm:w-40 self-center sm:self-start rounded-2xl shadow-md shadow-black border mt-4 dark:border-white/50 border-black/50"
						/>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
						<div className="relative overflow-hidden w-full min-h-36 sm:min-h-44 p-4 sm:p-6 rounded-3xl border dark:border-white/40 border-black/40 shadow-md shadow-black/50 bg-gradient-to-t to-customeLight-500 dark:to-customeDark-500 from-customeLight-600 dark:from-customeDark-600  flex items-center text-center justify-center gap-4 flex-col">
							<h2 className="font-bold text-lg sm:text-xl uppercase flex items-center">
								Do you want to start a project together?
							</h2>
							<button
								onClick={() => {
									setEmailCopy(true);
									navigator.clipboard.writeText(
										contactDetails.email
									);
								}}
								className="border dark:border-white/40 border-black/40 px-6 py-1.5 flex gap-2 items-center rounded-md"
							>
								<GoCopy />
								<span>
									{emailCopy
										? "Email is copied"
										: "Copy my Email"}
								</span>
							</button>
						</div>
						<a
							href={"#resume"}
							className="row-span-2 relative overflow-hidden w-full min-h-36 sm:min-h-44 p-4 sm:p-6 rounded-3xl border dark:border-white/40 border-black/40 shadow-md shadow-black/50 bg-gradient-to-t to-customeLight-500 dark:to-customeDark-500 from-customeLight-600 dark:from-customeDark-600  flex items-center text-center justify-center gap-3 flex-col"
						>
							<div
								id="animation-box1"
								className="h-20 w-20 blur-3xl z-0 absolute right-0 bottom-0 bg-gradient-to-t to-customeGreen-500 from-customeGreen-600"
							></div>
							<div
								id="animation-box2"
								className="h-20 w-20 blur-3xl z-0 absolute left-0 top-0 bg-gradient-to-t to-customeGreen-500 from-customeGreen-600"
							></div>
							<h2 className="font-bold text-lg sm:text-3xl uppercase flex items-center">
								See my Resume
							</h2>
							<h2 className="font-bold text-2xl sm:text-5xl uppercase heading-color flex items-center">
								Hire me
							</h2>
						</a>
						<div className="relative overflow-hidden w-full min-h-36 sm:min-h-44 p-4 sm:p-6 rounded-3xl border dark:border-white/40 border-black/40 shadow-md shadow-black/50 bg-gradient-to-t to-customeLight-500 dark:to-customeDark-500 from-customeLight-600 dark:from-customeDark-600  flex items-center text-center justify-center gap-4 flex-col">
							<h2 className="font-bold text-lg sm:text-xl uppercase flex items-center">
								Let's connect with me
							</h2>
							<div className="grid grid-cols-3 gap-3">
								{socialLinks.map((social) => {
									return (
										<Link
											to={social.link}
											className="border dark:border-white/40 border-black/40 p-2.5 rounded-md hover:scale-90 transition-all flex gap-2 items-center"
										>
											{social.name == "LinkedIn" && (
												<FaLinkedinIn fontSize={25} />
											)}
											{social.name == "GitHub" && (
												<FaGithub fontSize={25} />
											)}
											{social.name == "Instagram" && (
												<FaInstagram fontSize={25} />
											)}
										</Link>
									);
								})}
							</div>
						</div>
					</div>
					<h2 className="font-bold text-2xl mt-4 uppercase">
						What i'm doing
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
						<div className="relative overflow-hidden w-full min-h-36 sm:min-h-44 p-4 sm:p-6 rounded-3xl border dark:border-white/40 border-black/40 shadow-md shadow-black/50 bg-gradient-to-t to-customeLight-500 dark:to-customeDark-500 from-customeLight-600 dark:from-customeDark-600  flex items-center text-center justify-center gap-2 flex-col">
							<div className="font-bold text-lg sm:text-xl uppercase">
								Full Stack Web development
							</div>
							<h1 className="text-base opacity-70">
								Experienced in full-stack web development,
								delivering high-quality projects.
							</h1>
						</div>
					</div>
					<h2 className="font-bold text-2xl mt-4 uppercase">
						Top skills
					</h2>
					<div className="flex">
						{skills.map((skill, idx) => {
							return (
								<Fragment key={skill.name + "skill" + idx}>
									{skill?.top && (
										<span className="flex items-center text-sm gap-1 w-fit text-gray-900 px-3 py-1 shadow-lg m-0.5 rounded-3xl bg-gradient-to-l to-customeGreen-500 from-customeGreen-600">
											{skill.name == "Java" && <FaJava />}
											{skill.name == "JavaScript" && (
												<DiJavascript1 />
											)}
											{skill.name == "React.js" && (
												<SiReact />
											)}
											{skill.name == "Node.js" && (
												<SiNodedotjs />
											)}
											{skill.name == "Express.js" && (
												<SiExpress />
											)}
											{skill.name == "MongoDB" && (
												<SiMongodb />
											)}
											{skill.name == "Tailwind CSS" && (
												<SiTailwindcss />
											)}
											<span>{skill.name}</span>
										</span>
									)}
								</Fragment>
							);
						})}
					</div>
					<div id="resume" className="mb-4"></div>
					<h2 className="font-bold text-2xl uppercase">Resume</h2>
					<div className="flex flex-col items-center gap-4">
						<iframe
							src={Resume}
							frameborder="0"
							allowFullScreen
							aria-orientation="vertical"
							className="w-full aspect-square"
						>
							Resume
						</iframe>
						<a
							target="_blank"
							download={Resume}
							href={Resume}
							className="group shadow-lg hover:shadow-xl bg-gradient-to-l hover:bg-gradient-to-r to-customeGreen-500 from-customeGreen-600 text-black h-10 w-fit py-2 px-6 rounded-lg flex items-center justify-cente gap-3 text-sm sm:text-base"
						>
							<BiDownload className="group-active:translate-y-full transition-all " />
							<span>Download Resume</span>
						</a>
					</div>
					<h2 className="font-bold text-2xl uppercase mt-6">
						Github Contribution
					</h2>
					<div className="flex flex-col items-center gap-4">
						<img src={Graph} alt="Graph" loading="lazy" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
