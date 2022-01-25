import { BrowserRouter as Router } from "react-router-dom";
import App from "@src/shared/App";

import { ToastContainer } from "react-toastify";
import LocaleStore from "@src/core/context/LocaleStore";
import ModalStore from "@src/core/context/ModalStore";

const Root = () => {
	return (
		<LocaleStore>
			<ModalStore>
				<Router basename={process.env.PUBLIC_URL}>
					<App />
				</Router>
				<ToastContainer
					position="top-center"
					autoClose={5000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					pauseOnFocusLoss
					draggable
					pauseOnHover
				/>
			</ModalStore>
		</LocaleStore>
	);
};

export default Root;
