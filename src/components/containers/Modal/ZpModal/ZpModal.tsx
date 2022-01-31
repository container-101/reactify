import React, { ChangeEvent, useState } from "react";
import { Button, InputBox } from "components/common";
import styles from "./ZpModal.module.scss";

interface IProps {
	onClose: () => void;
}

interface IInputs {
	email: string;
	pwd: string;
}

const ZpModal = ({ onClose }: IProps) => {
	const [Inputs, setInputs] = useState<IInputs>({
		email: "",
		pwd: "",
	});

	const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		console.log(name, value);
	};

	return (
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
	);
};

export default ZpModal;
