import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import Heading from "../components/Heading";
import { Link } from "react-router-dom";

function Contact() {
	const [state, handleSubmit] = useForm("xnqerran");
	if (state.succeeded) {
		return (
			<div className="w-full min-full mb-4 sm:mb-8">
				<Heading text={"Reach out to us for your queries."} />
				<div className="flex items-center justify-center w-full h-full">
					<div className="w-[85%] sm:w-[60%] mt-16 min-w-72 flex flex-col justify-center items-center gap-3">
						<h1 className="font-bold text-xl">
							Thank you for reaching out to us 😊.
						</h1>
						<p className="">
							We will get back to you as soon as possible.
						</p>
						<Link to={"/"}>
							<button className="mt-2 py-2 sm:py-3 px-4 sm:px-6  rounded-xl border outline-1 btn-style  outline-green-800 text-black/80">
								Home
							</button>
						</Link>
					</div>
				</div>
			</div>
		);
	}
	return (
		<div className="w-full min-full mb-4 sm:mb-8">
			<Heading text={"Reach out to us for your queries."} />
			<div className="flex items-center justify-center w-full h-full">
				<form
					onSubmit={handleSubmit}
					className="w-[85%] sm:w-[60%] min-w-72 flex flex-col gap-3"
				>
					<label htmlFor="nameBox">
						<b>Enter Full Name</b>
					</label>
					<input
						id="nameBox"
						type="name"
						name="name"
						placeholder="Enter Full Name"
						required
						className="p-2 sm:p-3 rounded-sm border-none outline-1 outline-green-800 text-black/80"
					/>
					<ValidationError
						prefix="Full Name"
						field="name"
						errors={state.errors}
						className="text-red-800 font-bold"
					/>
					<label htmlFor="email">
						<b>Enter Email Address</b>
					</label>
					<input
						id="email"
						type="email"
						name="email"
						placeholder="Enter Email"
						required
						className="p-2 sm:p-3 rounded-sm border-none outline-1 outline-green-800 text-black/80"
					/>
					<ValidationError
						prefix="Email"
						field="email"
						errors={state.errors}
						className="text-red-800 font-bold"
					/>
					<label htmlFor="message">
						<b>Enter Message</b>
					</label>
					<textarea
						id="message"
						name="message"
						placeholder="Enter Message"
						required
						rows="5"
						className="p-2 sm:p-3 rounded-sm border-none outline-1 outline-green-800 text-black/80"
					/>
					<ValidationError
						prefix="Message"
						field="message"
						errors={state.errors}
						className="text-red-800 font-bold"
					/>
					<button
						type="submit"
						disabled={state.submitting}
						className="mt-2 p-2 sm:p-3 rounded-sm border-none outline-1 btn-style  outline-green-800 text-black/80"
					>
						{state.submitting ? "Loading..." : "Submit"}
					</button>
				</form>
			</div>
		</div>
	);
}

export default Contact;
