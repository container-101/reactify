import { BrowserRouter as Router } from "react-router-dom";
import App from "shared/App";

import "utils/i18n";

import "normalize.css";
import "styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

import { ToastContainer } from "react-toastify";
import LocaleStore from "core/context/LocaleStore";
import { ModalProvider } from "core/context/ModalContext";
import { ModalContainer } from "components/containers";

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;

const Root = () => {
	return (
		<LocaleStore>
			<ModalProvider>
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
				<ModalContainer />
			</ModalProvider>
		</LocaleStore>
	);
};

export default Root;
