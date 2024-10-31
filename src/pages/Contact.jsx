import React from "react";
import Heading from "../components/Heading";
import ContactBox from "../components/ContactBox";

function Contact() {
	return (
		<div className="py-4 sm:py-5 md:py-6 px-6 sm:px-9 md:px-12">
			<Heading text={"Reach out to us for your queries."} />
			<ContactBox />
		</div>
	);
}

export default Contact;
