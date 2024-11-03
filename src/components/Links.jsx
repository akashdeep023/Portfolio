import React from "react";
import {
	FaGithub,
	FaInstagram,
	FaLinkedinIn,
	FaMoon,
	FaSun,
} from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { contactDetails, socialLinks } from "../utils/constant";

const Links = ({ darkMode, setDarkMode }) => {
	return (
		<div className="dark:text-white flex items-center justify-center w-full ">
			<div className="flex items-center justify-center gap-6 sm:gap-10 backdrop-blur-md px-6 sm:px-10 py-3 sm:py-4 rounded-t-3xl border-t-2 dark:border-white border-black">
				<a
					href={socialLinks[0].link}
					target="_blank"
					rel="noreferrer"
					className="border-b-2 border-black/50 dark:border-white/50 p-1"
				>
					<FaLinkedinIn fontSize={"25px"} />
				</a>
				<a
					href={socialLinks[1].link}
					target="_blank"
					rel="noreferrer"
					className="border-b-2 border-black/50 dark:border-white/50 p-1"
				>
					<FaGithub fontSize={"25px"} />
				</a>
				<a
					href={socialLinks[2].link}
					target="_blank"
					rel="noreferrer"
					className="border-b-2 border-black/50 dark:border-white/50 p-1"
				>
					<FaInstagram fontSize={"25px"} />
				</a>
				<a
					href={`mailto:${contactDetails.email}`}
					target="_blank"
					rel="noreferrer"
					className="border-b-2 border-black/50 dark:border-white/50 p-1"
				>
					<GoMail fontSize={"25px"} />
				</a>
				<div
					className="cursor-pointer border-b-2 border-black/50 dark:border-white/50 pt-2 pb-1 px-1 border-spacing-y-2"
					onClick={() => setDarkMode(!darkMode)}
				>
					{darkMode ? (
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
