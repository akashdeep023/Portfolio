import React from "react";
import LoaderName from "./LoaderName";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="w-full min-h-fit h-1/2 px-3 sm:px-5 py-8 flex flex-col gap-3 justify-evenly relative z-40 dark-green">
			<div className="absolute top-0 right-0 hidden sm:flex size-32 m-3 justify-center items-center overflow-hidden">
				<LoaderName />
			</div>
			<h1 className="font-bold text-2xl whitespace-nowrap mr-3 border-b pb-4 sm:pb-7 mb-4 sm:mb-6 border-white/15">
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
									className="hover:text-green-700 hover:underline"
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
									className="hover:text-green-700 hover:underline"
									to={"/"}
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									className="hover:text-green-700 hover:underline"
									to={"/about"}
								>
									About
								</Link>
							</li>
							<li>
								<Link
									className="hover:text-green-700 hover:underline"
									to={"/project"}
								>
									Project
								</Link>
							</li>
							<li>
								<Link
									className="hover:text-green-700 hover:underline"
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
									className="hover:text-green-700 hover:underline"
									href="https://www.linkedin.com/in/akashdeep023/"
									target="_blank"
									rel="noreferrer"
								>
									LinkedIn
								</a>
							</li>
							<li>
								<a
									className="hover:text-green-700 hover:underline"
									href="https://github.com/akashdeep023/"
									target="_blank"
									rel="noreferrer"
								>
									Github
								</a>
							</li>
							<li>
								<a
									className="hover:text-green-700 hover:underline"
									href="https://instagram.com/akashdeep023_/"
									target="_blank"
									rel="noreferrer"
								>
									Instagram
								</a>
							</li>
							<li>
								<a
									className="hover:text-green-700 hover:underline"
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