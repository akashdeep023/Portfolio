import React, { useRef } from "react";
import Heading from "./Heading";

const Contact = () => {
	const name = useRef("");
	const email = useRef("");
	const message = useRef("");
	const handleContact = (e) => {
		e.preventDefault();
		console.log(
			name.current.value,
			email.current.value,
			message.current.value
		);
	};
	return (
		<div className="w-full min-full mb-4 sm:mb-8">
			<Heading text={"Reach out to us for your queries."} />
			<div className="flex items-center justify-center w-full h-full">
				<form
					className="w-[85%] sm:w-[60%] min-w-72 flex flex-col gap-3"
					action="#"
					method="get"
					onSubmit={(e) => handleContact(e)}
				>
					<label htmlFor="fullname">
						<b>Enter Full Name</b>
					</label>
					<input
						className="p-2 sm:p-3 rounded-sm border-none outline-1 outline-green-800 text-black/80"
						type="text"
						ref={name}
						placeholder="Enter Full Name"
						required
						id="fullname"
					/>
					<label htmlFor="email">
						<b>Enter Email Address</b>
					</label>
					<input
						className="p-2 sm:p-3 rounded-sm border-none outline-1 outline-green-800 text-black/80"
						type="email"
						ref={email}
						placeholder="Enter Email"
						required
						id="email"
					/>
					<label htmlFor="message">
						<b>Enter Message</b>
					</label>
					<textarea
						className="p-2 sm:p-3 rounded-sm border-none outline-1 outline-green-800 text-black/80"
						ref={message}
						required
						placeholder="Enter Message"
						rows="5"
						id="message"
					></textarea>
					<button
						className="mt-2 p-2 sm:p-3 rounded-sm border-none outline-1 btn-style  outline-green-800 text-black/80"
						type="submit"
					>
						<b>Submit</b>
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
