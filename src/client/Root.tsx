import { BrowserRouter as Router } from "react-router-dom";
import App from "@src/shared/App";
import LocaleStore from "@src/core/context/LocaleStore";
import ModalStore from "@src/core/context/ModalStore";

const Root = () => {
	return (
		<LocaleStore>
			<ModalStore>
				<Router basename={process.env.PUBLIC_URL}>
					<App />
				</Router>
			</ModalStore>
		</LocaleStore>
	);
};

export default Root;
