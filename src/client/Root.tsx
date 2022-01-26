import { BrowserRouter as Router } from "react-router-dom";
import App from "@src/shared/App";

import { ToastContainer } from "react-toastify";
import LocaleStore from "@src/core/context/LocaleStore";
import { ModalProvider } from "@src/core/context/ModalStore";
import { ModalContainer } from "@src/components/containers";

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
