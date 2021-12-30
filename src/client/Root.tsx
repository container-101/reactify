import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "@src/shared/App";
import Store from "@src/core/context/Store";

const Root = () => {
	return (
		<Store>
			<Router basename={process.env.PUBLIC_URL}>
				<App />
			</Router>
		</Store>
	);
};

export default Root;
