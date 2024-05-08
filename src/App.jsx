import { useState } from "react";
import Header, { SubHeader } from "./components/Header";

function App() {
	const [headerShow, setHeaderShow] = useState(false);
	return (
		<>
			<SubHeader setHeaderShow={setHeaderShow} />
			{headerShow && <Header setHeaderShow={setHeaderShow} />}
		</>
	);
}

export default App;
