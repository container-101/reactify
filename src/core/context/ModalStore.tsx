import React, { createContext, useState } from "react";
import type { TModal } from "../interface/modal";

export const ModalConext = createContext({
	modal: "",
	handleModal: (modal: TModal) => {},
});

interface IModalStoreProps {
	children: React.ReactNode;
}

const ModalStore = ({ children }: IModalStoreProps) => {
	const [modal, setModal] = useState("");

	const handleModal = (modal: TModal) => {
		setModal(modal);
	};

	return (
		<ModalConext.Provider value={{ modal, handleModal }}>
			{children}
		</ModalConext.Provider>
	);
};

export default ModalStore;
