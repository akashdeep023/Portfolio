import React from "react";
import {
	FaGithubAlt,
	FaInstagram,
	FaLinkedinIn,
	FaMoon,
	FaSun,
} from "react-icons/fa";
import { GoMail } from "react-icons/go";

const Links = ({ theme, handleTheme }) => {
	return (
		<div className="flex items-center justify-center w-full ">
			<div className="flex items-center justify-center gap-6 sm:gap-10 backdrop-blur-md px-6 sm:px-10 py-3 sm:py-4 rounded-t-3xl border-t-2">
				<a
					href="https://www.linkedin.com/in/akashdeep023/"
					target="_blank"
					rel="noreferrer"
					className="border-b-2 border-white/50 p-1"
				>
					<FaLinkedinIn fontSize={"25px"} />
				</a>
				<a
					href="https://github.com/akashdeep023/"
					target="_blank"
					rel="noreferrer"
					className="border-b-2 border-white/50 p-1"
				>
					<FaGithubAlt fontSize={"25px"} />
				</a>
				<a
					href="https://instagram.com/akashdeep023_/"
					target="_blank"
					rel="noreferrer"
					className="border-b-2 border-white/50 p-1"
				>
					<FaInstagram fontSize={"25px"} />
				</a>
				<a
					href="mailto:contact.akashdeep023@gmail.com"
					target="_blank"
					rel="noreferrer"
					className="border-b-2 border-white/50 p-1"
				>
					<GoMail fontSize={"25px"} />
				</a>
				<div
					className="cursor-pointer border-b-2 border-white/50 pt-2 pb-1 px-1 border-spacing-y-2"
					onClick={handleTheme}
				>
					{theme === "dark" ? (
						<FaSun fontSize={"24px"} />
					) : (
						<FaMoon fontSize={"24px"} />
					)}
				</div>
			</div>
		</div>
	);
};

export default Links;
