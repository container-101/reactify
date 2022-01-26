import React, { FC } from "react";
import ModalPortal from "./ModalPortal";
import ModalBase from "./ModalBase";
import { useModal } from "@core/context/ModalStore";
import { SignInModal } from "@components/containers";
import { TModal } from "@src/core/interface/modal";

const ModalContainer: FC = () => {
	const { modal, modalOption, closeModal } = useModal();

	const SelectRenderingModal: { [keys in TModal]: JSX.Element } = {
		LOGIN: <SignInModal onClose={closeModal} />,
	};

	return (
		<ModalPortal>
			<ModalBase onClose={closeModal} show={modal ? true : false}>
				{modal ? SelectRenderingModal[modal] : null}
			</ModalBase>
		</ModalPortal>
	);
};

export default ModalContainer;
