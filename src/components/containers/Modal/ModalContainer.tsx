import React, { FC } from "react";
import ModalPortal from "./ModalPortal";
import ModalBase from "./ModalBase";
import { SignInModal } from "components/containers";
import { ModalShape } from "core/interface/modal-type";
import { useCloseModal, useModalInfo } from "core/context/ModalContext";

const ModalContainer: FC = () => {
	const modalInfo = useModalInfo();
	const closeModal = useCloseModal();

	const SelectRenderingModal: { [keys in ModalShape]: JSX.Element } = {
		SIGNIN: <SignInModal />,
		SIGNUP: <div>{"not defined"}</div>,
	};

	return (
		<ModalPortal>
			<ModalBase onClose={closeModal} show={modalInfo ? true : false}>
				{modalInfo ? SelectRenderingModal[modalInfo] : null}
			</ModalBase>
		</ModalPortal>
	);
};

export default ModalContainer;
