import React, { ChangeEvent, ChangeEventHandler, useState } from "react";
import { ModalLayout } from "@components/layout";
import { Button, InputBox } from "@src/components/common";
import styles from "./SigninModal.module.scss";

interface IProps {
	show: boolean;
	handleModalShow: (status: boolean) => void;
}

interface IInputs {
	email: string;
	pwd: string;
}

const SigninModal = ({ show, handleModalShow }: IProps) => {
	const [Inputs, setInputs] = useState<IInputs>({
		email: "",
		pwd: "",
	});

	const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		console.log(name, value);
	};

	return (
		<ModalLayout show={show} handleModalShow={handleModalShow}>
			<div className={styles.cnt}>
				<InputBox
					value={Inputs?.email}
					name="email"
					contentName="E-mail"
					onChange={handleOnChange}
				/>
				<Button fullWidth btnStyles="secondary">
					로그인
				</Button>
			</div>
		</ModalLayout>
	);
};

export default SigninModal;
