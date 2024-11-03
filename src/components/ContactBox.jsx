import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiMobile3 } from "react-icons/ci";
import { checkValidContactFrom } from "../utils/validate";
import { contactDetails } from "../utils/constant";

const ContactBox = () => {
	const [errorMsg, setErrorMsg] = useState(null);
	const [name, setName] = useState("");
	const email = useRef("");
	const mobile = useRef("");
	const message = useRef("");
	const [success, setSuccess] = useState(false);
	const [successMsg, setSuccessMsg] = useState(false);
	const [loading, setLoading] = useState(false);
	const handleSubmitForm = (e) => {
		e.preventDefault();
		// Handle form submission
		setErrorMsg(
			checkValidContactFrom(
				name,
				email?.current?.value,
				mobile?.current?.value,
				message?.current?.value
			)
		);
		if (
			name &&
			email?.current?.value &&
			mobile?.current?.value &&
			message?.current?.value
		) {
			// Send mail
			const formData = new FormData(e.target);
			formData.append(
				"access_key",
				"e2aba0ae-ac33-44aa-b9e7-eca2f3a766f5"
			);
			setLoading(true);
			e.target[4].disabled = true;

			fetch("https://api.web3forms.com/submit", {
				method: "POST",
				body: formData,
			})
				.then((response) => response.json())
				.then((data) => {
					setSuccess(true);
					setSuccessMsg(data.success);
					if (data.success) {
						e.target.reset();
						setName("");
					} else {
						console.log("Error", data);
					}
					e.target[4].disabled = false;
					setLoading(false);
				})
				.catch((error) => {
					console.error("Error:", error);
					setLoading(false);
					e.target[4].disabled = false;
				});
		}
	};
	const handleName = (name) => {
		name = name.charAt(0).toUpperCase() + name.slice(1);
		setName(name);
	};
	return (
		<div className="text-black dark:text-white flex items-start justify-center gap-6 md:gap-10 flex-col md:flex-row mt-4 sm:mt-6 md:mt-8">
			<div className="flex gap-3 flex-col w-full md:w-2/5 px-0">
				<h3 className="font-bold text-xl uppercase md:text-2xl">
					Get in Touch
				</h3>
				<p className="mb-2 opacity-60">
					We'd love to hear from you - whether it's a question,
					feedback, or just to say hello, feel free to reach out!
				</p>
				<div className="flex flex-col gap-2 items-start h-full">
					<div className="flex flex-col gap-4 decoration-1 underline-offset-2 *:w-fit mr-2 max-w-64">
						<span className="flex justify-start items-center gap-2 sm:gap-4">
							<span className="mt-1 rounded-full shadow-xl shadow-black/25 dark:shadow-black p-2 dark:bg-white bg-black items-center text-white dark:text-black justify-center flex relative before:content-[''] before:bg-black/80 dark:before:bg-white/80  before:absolute before:w-3/4 before:h-3/4 before:rounded-full before:animate-ping">
								<CiLocationOn fontSize={28} />
							</span>
							<span className="leading-tight text-wrap">
								{contactDetails.address}
							</span>
						</span>
						<span className="flex justify-start items-center gap-2 sm:gap-4">
							<span className="mt-1 rounded-full shadow-xl shadow-black/25 dark:shadow-black p-2 dark:bg-white bg-black items-center text-white dark:text-black justify-center flex relative before:content-[''] before:bg-black/80 dark:before:bg-white/80  before:absolute before:w-3/4 before:h-3/4 before:rounded-full before:animate-ping">
								<CiMail fontSize={25} />
							</span>
							<Link
								to={`mailto:${contactDetails.email}`}
								className="relative before:content-[''] before:bg-black dark:before:bg-white before:absolute before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:h-px before:rounded-lg before:transition-all before:duration-300"
							>
								{contactDetails.email}
							</Link>
						</span>
						{contactDetails?.phone && (
							<span className="flex justify-start items-center gap-2 sm:gap-4">
								<span className="mt-1 rounded-full shadow-xl shadow-black/25 dark:shadow-black p-2 dark:bg-white bg-black items-center text-white dark:text-black justify-center flex relative before:content-[''] before:bg-black/80 dark:before:bg-white/80  before:absolute before:w-3/4 before:h-3/4 before:rounded-full before:animate-ping">
									<CiMobile3 fontSize={26} />
								</span>
								<Link
									to={`tel:${contactDetails.phone}`}
									className="relative before:content-[''] before:bg-black dark:before:bg-white before:absolute before:bottom-0 before:left-0 before:w-0 hover:before:w-full before:h-px before:rounded-lg before:transition-all before:duration-300"
								>
									{contactDetails.phone.replace(
										"75245",
										"XXXXX"
									)}
								</Link>
							</span>
						)}
					</div>
				</div>
			</div>
			<form
				onSubmit={handleSubmitForm}
				className="flex gap-4 flex-col w-full md:w-3/5 p-4 md:p-6 bg-gradient-to-r to-customeLight-500 dark:to-customeDark-500 from-customeLight-600 dark:from-customeDark-600 rounded-3xl border dark:border-white/40 border-black/40 transition-all shadow-md shadow-black/50"
			>
				<div className="flex gap-2 w-full">
					<input
						name="name"
						type="text"
						placeholder="Name"
						className="rounded-lg bg-transparent py-2.5 px-3 shadow-md shadow-black/20 border border-white/40 focus:shadow-inner dark:focus:bg-customeDark-500/60 focus:bg-customeLight-500/60 focus:shadow-black/60 outline-none w-full"
						value={name}
						onChange={(e) => handleName(e.target.value)}
					/>
					<input
						ref={mobile}
						name="mobile"
						type="number"
						placeholder="Mobile"
						className="no-spinner rounded-lg bg-transparent py-2.5 px-3 shadow-md shadow-black/20 border border-white/40 focus:shadow-inner dark:focus:bg-customeDark-500/60 focus:bg-customeLight-500/60 focus:shadow-black/60 outline-none w-full"
					/>
				</div>
				<input
					ref={email}
					name="email"
					type="email"
					placeholder="Email"
					className="rounded-lg bg-transparent py-2.5 px-3 shadow-md shadow-black/20 border border-white/40 focus:shadow-inner dark:focus:bg-customeDark-500/60 focus:bg-customeLight-500/60 focus:shadow-black/60 outline-none w-full"
				/>
				<textarea
					ref={message}
					name="message"
					placeholder="Message"
					rows="4"
					className="rounded-lg bg-transparent py-2.5 px-3 shadow-md shadow-black/20 border border-white/40 focus:shadow-inner dark:focus:bg-customeDark-500/60 focus:bg-customeLight-500/60 focus:shadow-black/60 outline-none w-full"
				></textarea>
				{errorMsg && (
					<div className="text-red-500 text-sm text-center">
						{errorMsg}
					</div>
				)}
				<button
					type="submit"
					className={`py-2.5 px-3 w-full bg-gradient-to-l to-customeGreen-500 from-customeGreen-600 hover:bg-gradient-to-r disabled:bg-black disabled:cursor-not-allowed text-black font-semibold shadow-md shadow-black/30 active:shadow-inner active:shadow-black rounded-3xl`}
				>
					{loading ? "Loading..." : "SEND"}
				</button>
			</form>
			{success && (
				<div className="text-black border-black/20 border flex flex-col gap-1 justify-center items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-4 sm:py-5 md:py-6 px-6 sm:px-9 md:px-12 bg-gradient-to-r to-customeLight-500 dark:to-customeDark-500 from-customeLight-600 dark:from-customeDark-600 dark:border-white dark:text-white rounded-lg w-10/12 sm:w-8/12 md:w-fit">
					<h2 className="font-bold text-2xl text-center">
						{successMsg
							? "Form submitted successfully!"
							: "Something went wrong."}
					</h2>
					<p className="text-center">
						{successMsg
							? "Thank you! The form has been submitted successfully."
							: "Sorry, This message has been marked as spam by our server. Contact support if the issue persist."}
					</p>
					{successMsg && (
						<p className="text-center">
							We will reply to you soon!
						</p>
					)}
					<button
						onClick={() => setSuccess(false)}
						className="mt-2 bg-gradient-to-l to-customeGreen-500 from-customeGreen-600 hover:bg-gradient-to-r py-2 px-3 w-20 hover:text-white font-semibold rounded-3xl"
					>
						OK
					</button>
				</div>
			)}
		</div>
	);
};

export default ContactBox;
