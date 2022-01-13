import React, { useCallback, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "@src/shared/App";
import Store from "@src/core/context/Store";
import { ModalPortal } from "@components/portals";
import { ModalLayout } from "@src/components/layout";
import { SigninModal } from "@src/components/modal";

const Root = () => {
	const [modal, setModal] = useState(false);

	const handleModalShow = useCallback((status) => {
		setModal(status);
	}, []);

	return (
		<Store>
			<Router basename={process.env.PUBLIC_URL}>
				<App />
			</Router>

			<ModalPortal>
				<SigninModal
					show={modal}
					handleModalShow={handleModalShow}
				></SigninModal>
			</ModalPortal>
			<div>
				<button
					type="button"
					onClick={() => {
						handleModalShow(true);
					}}
				>
					모달 버튼
				</button>
			</div>
		</Store>
	);
};

export default Root;
