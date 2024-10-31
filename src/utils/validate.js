export const checkValidContactFrom = (name, email, mobile, message) => {
	// const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
	const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
		email
	);
	// if (!isNameValid) return "Please enter a valid Name";
	if (mobile.length !== 10) return "Mobile No must be 10 digits.";
	if (!isEmailValid) return "Please enter a valid Email";
	if (message.length < 4) return "Message must be at least 4 characters.";
	if (message.length > 1000)
		return "Message must be at most 1000 characters.";
	return null;
};
