import React, {
	createContext,
	FC,
	useCallback,
	useContext,
	useState,
} from "react";
import type { TModal } from "../interface/modal";

interface IModalContext {
	modal: TModal | null;
	modalOption: any;
	openLoginModal: () => void;
	closeModal: () => void;
}

export const ModalContext = createContext<IModalContext>({
	modal: null,
	modalOption: null,
	openLoginModal: () => {},
	closeModal: () => {},
});

export const useModal = (): IModalContext => useContext(ModalContext);

export const ModalProvider: FC = ({ children }) => {
	const [modal, setModal] = useState<TModal | null>(null);
	const [modalOption, setModalOption] = useState<any>();

	const openModal = useCallback((modal: TModal, modalOption?: any) => {
		setModal(modal);
		setModalOption(modalOption);
	}, []);

	const closeModal = useCallback(() => {
		setModal(null);
		setModalOption(null);
	}, []);

	const openLoginModal = useCallback(() => {
		openModal("LOGIN", {});
	}, [openModal]);

	return (
		<ModalContext.Provider
			value={{ modal, modalOption, openLoginModal, closeModal }}
		>
			{children}
		</ModalContext.Provider>
	);
};
