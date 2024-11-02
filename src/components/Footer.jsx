import React from "react";
import LoaderName from "./LoaderName";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="border-t border-white/20 text-white bg-gradient-to-l to-customeDark-500 from-customeDark-600 w-full min-h-fit h-1/2 py-4 sm:py-5 md:py-6 px-6 sm:px-9 md:px-12 flex flex-col gap-3 justify-evenly relative z-40 ">
			<div className="absolute top-0 right-0 hidden sm:flex size-32 m-3 justify-center items-center overflow-hidden">
				<LoaderName />
			</div>
			<h1 className="font-bold text-2xl whitespace-nowrap border-b pb-4 sm:pb-5 md:pb-6 mb-4 sm:mb-6 border-white/15">
				Akash deep | Portfolio
			</h1>
			<div className="flex w-full justify-start md:justify-evenly text-xs md:text-sm gap-5 sm:gap-10">
				<div className="flex flex-col justify-between lg:flex-row gap-7 w-full">
					<div className="flex lg:justify-center items-start min-w-fit w-fit md:w-60">
						<ul className="w-fit flex flex-col gap-1 items-start">
							<li className="font-bold mb-2 text-sm sm:text-base">
								Contact
							</li>
							<li>Akash Deep</li>
							<li>Patna, Bihar</li>
							<li>Pincode - 801303</li>

							<li>
								<a
									className="relative before:content-[''] before:bg-white before:absolute before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:h-px before:rounded-lg before:transition-all before:duration-300"
									href="mailto:contact.akashdeep023@gmail.com"
									target="_blank"
									rel="noreferrer"
								>
									{" "}
									contact.akashdeep023@gmail.com
								</a>
							</li>
						</ul>
					</div>
					<div className="flex lg:justify-center items-start min-w-fit w-fit md:w-60">
						<ul className="w-fit flex flex-col gap-1 items-start">
							<li className="font-bold mb-2 text-sm sm:text-base">
								Expertise
							</li>
							<li>Frontend Developer</li>
							<li>Backend Developer</li>
							<li>MERN Stack</li>
							<li>Java && C++</li>
							<li>Data Structure & Algorithm</li>
						</ul>
					</div>
				</div>
				<div className="flex flex-col justify-start md:justify-center items-center lg:flex-row gap-7 w-full">
					<div className="flex lg:justify-center items-start min-w-fit w-16 md:w-56">
						<ul className="w-fit flex flex-col gap-1 items-start">
							<li className="font-bold mb-2 text-sm sm:text-base">
								Pages
							</li>
							<li>
								<Link
									className="relative before:content-[''] before:bg-white before:absolute before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:h-px before:rounded-lg before:transition-all before:duration-300"
									to={"/"}
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									className="relative before:content-[''] before:bg-white before:absolute before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:h-px before:rounded-lg before:transition-all before:duration-300"
									to={"/about"}
								>
									About
								</Link>
							</li>
							<li>
								<Link
									className="relative before:content-[''] before:bg-white before:absolute before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:h-px before:rounded-lg before:transition-all before:duration-300"
									to={"/project"}
								>
									Project
								</Link>
							</li>
							<li>
								<Link
									className="relative before:content-[''] before:bg-white before:absolute before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:h-px before:rounded-lg before:transition-all before:duration-300"
									to={"/contact"}
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>
					<div className="flex lg:justify-center items-start min-w-fit w-16 md:w-52">
						<ul className="w-fit flex flex-col gap-1 items-start">
							<li className="font-bold mb-2 text-sm sm:text-base">
								Links
							</li>
							<li>
								<a
									className="relative before:content-[''] before:bg-white before:absolute before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:h-px before:rounded-lg before:transition-all before:duration-300"
									href="https://www.linkedin.com/in/akashdeep023/"
									target="_blank"
									rel="noreferrer"
								>
									LinkedIn
								</a>
							</li>
							<li>
								<a
									className="relative before:content-[''] before:bg-white before:absolute before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:h-px before:rounded-lg before:transition-all before:duration-300"
									href="https://github.com/akashdeep023/"
									target="_blank"
									rel="noreferrer"
								>
									Github
								</a>
							</li>
							<li>
								<a
									className="relative before:content-[''] before:bg-white before:absolute before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:h-px before:rounded-lg before:transition-all before:duration-300"
									href="https://instagram.com/akashdeep023_/"
									target="_blank"
									rel="noreferrer"
								>
									Instagram
								</a>
							</li>
							<li>
								<a
									className="relative before:content-[''] before:bg-white before:absolute before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:h-px before:rounded-lg before:transition-all before:duration-300"
									href="mailto:contact.akashdeep023@gmail.com"
									target="_blank"
									rel="noreferrer"
								>
									E-Mail
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div>
				<p className="text-sm sm:text-base border-t pt-4 sm:pt-7 mt-4 sm:mt-6 border-white/15">
					All rights reserved 2024 © Akash deep | Portfolio.
				</p>
			</div>
		</div>
	);
};

export default Footer;
