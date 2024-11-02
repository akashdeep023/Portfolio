import React from "react";
import JackImg from "../assets/img.png";
import Heading from "../components/Heading";

const About = () => {
	return (
		<div className="w-full h-fit flex flex-wrap justify-evenly mb-4 sm:mb-8">
			<Heading text={"About"} />
			<div className="py-4 sm:py-5 md:py-6 px-6 sm:px-9 md:px-12 w-full flex justify-center">
				<div className="w-full sm:w-5/6 px-4 py-5 relative group flex flex-col gap-2 overflow-hidden bg-gradient-to-t to-customeLight-500 dark:to-customeDark-500 from-customeLight-600 dark:from-customeDark-600 min-h-72 rounded-3xl border dark:border-white/40 border-black/40 shadow-md shadow-black/50">
					<div className="h-20 w-20 blur-3xl z-0  absolute top-0 right-0 bg-gradient-to-t to-customeGreen-500 from-customeGreen-600"></div>
					<div className="h-20 w-20 blur-3xl z-0  absolute bottom-0 left-0 bg-gradient-to-t to-customeGreen-500 from-customeGreen-600"></div>
					<h2 className="font-bold text-2xl sm:text-3xl">
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
							className="h-36 sm:h-40 w-36 sm:w-40 self-center sm:self-start rounded-2xl border mt-4 dark:border-white/50 border-black/50"
						/>
					</div>

					<h2 className="font-bold text-2xl mt-4">What i'm doing</h2>
					<div className="relative overflow-hidden w-full sm:w-72 md:w-80 lg:w-96 sm:m-4 p-4 rounded-3xl border dark:border-white/40 border-black/40 shadow-md shadow-black/50 bg-gradient-to-t to-customeLight-500 dark:to-customeDark-500 from-customeLight-600 dark:from-customeDark-600  flex items-center text-center justify-center flex-col">
						<div className="font-bold text-lg sm:text-xl">
							Full Stack Web development
						</div>
						<h1 className="text-base">
							Experienced in full-stack web development,
							delivering high-quality projects.
						</h1>
					</div>
					<h2 className="font-bold text-2xl mt-4">Top skills</h2>
					<div>
						<span className="text-gray-900 border dark:border-white/40 border-black/40 px-2.5 py-0.5 m-0.5 rounded-3xl bg-gradient-to-l to-customeGreen-500 from-customeGreen-600">
							Javascript
						</span>
						<span className="text-gray-900 border dark:border-white/40 border-black/40 px-2.5 py-0.5 m-0.5 rounded-3xl bg-gradient-to-l to-customeGreen-500 from-customeGreen-600">
							JAVA
						</span>
						<span className="text-gray-900 border dark:border-white/40 border-black/40 px-2.5 py-0.5 m-0.5 rounded-3xl bg-gradient-to-l to-customeGreen-500 from-customeGreen-600">
							React.js
						</span>
						<span className="text-gray-900 border dark:border-white/40 border-black/40 px-2.5 py-0.5 m-0.5 rounded-3xl bg-gradient-to-l to-customeGreen-500 from-customeGreen-600">
							Node.js
						</span>
						<span className="text-gray-900 border dark:border-white/40 border-black/40 px-2.5 py-0.5 m-0.5 rounded-3xl bg-gradient-to-l to-customeGreen-500 from-customeGreen-600">
							Express.js
						</span>
						<span className="text-gray-900 border dark:border-white/40 border-black/40 px-2.5 py-0.5 m-0.5 rounded-3xl bg-gradient-to-l to-customeGreen-500 from-customeGreen-600">
							MongoDB
						</span>
						<span className="text-gray-900 border dark:border-white/40 border-black/40 px-2.5 py-0.5 m-0.5 rounded-3xl bg-gradient-to-l to-customeGreen-500 from-customeGreen-600">
							TailwindCSS
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
