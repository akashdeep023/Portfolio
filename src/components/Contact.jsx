import React from "react";

const Contact = () => {
	const handleContact = (e) => {
		e.preventDefault();
	};
	return (
		<div className="w-full min-full">
			<div>
				<h1 className="text-4xl my-10">Get In Contact</h1>
			</div>
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
						className="p-2 sm:p-3 rounded-sm border-none outline-1 outline-green-800"
						type="text"
						name="name"
						placeholder="Enter Full Name"
						required
						id="fullname"
					/>
					<label htmlFor="email">
						<b>Enter Email Address</b>
					</label>
					<input
						className="p-2 sm:p-3 rounded-sm border-none outline-1 outline-green-800"
						type="email"
						name="email"
						placeholder="Enter Email"
						required
						id="email"
					/>
					<label htmlFor="message">
						<b>Enter Message</b>
					</label>
					<textarea
						className="p-2 sm:p-3 rounded-sm border-none outline-1 outline-green-800"
						name="message"
						required
						placeholder="Enter Message"
						// cols="20"
						rows="5"
						id="message"
					></textarea>
					<button
						className="p-2 sm:p-3 rounded-sm border-none outline-1 bg-green-600  outline-green-800"
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
