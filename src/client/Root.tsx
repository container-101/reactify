import React, { useCallback, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import App from "@src/shared/App";
import Store from "@src/core/context/Store";
import { ModalPortals } from "@components/portals";
import { ModalLayout } from "@src/components/layout";

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

			<ModalPortals>
				<ModalLayout
					show={modal}
					handleModalShow={handleModalShow}
				></ModalLayout>
			</ModalPortals>
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
