import React from "react";
import { ModalLayout } from "@components/layout";
import { Button, InputBox } from "@src/components/common";
import styles from "./SigninModal.module.scss";

interface Props {
	show: boolean;
	handleModalShow: (status: boolean) => void;
}

const SigninModal = ({ show, handleModalShow }: Props) => {
	return (
		<ModalLayout show={show} handleModalShow={handleModalShow}>
			<div className={styles.cnt}>
				<InputBox value={""} name={""} contentName="E-mail" />
				<Button fullWidth btnStyles="secondary">
					로그인
				</Button>
			</div>
		</ModalLayout>
	);
};

export default SigninModal;
