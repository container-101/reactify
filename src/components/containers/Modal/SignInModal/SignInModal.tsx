import React, { useCallback, useState } from "react";
import styles from "./SignInModal.module.scss";
import { SignInInputShape } from "core/interface/modal-input-shape";
import { Button, InputBox } from "components/common";

const SignInModal = () => {
	const [Inputs, setInputs] = useState<SignInInputShape>({
		email: "",
		password: "",
	});

	const handleOnChange = useCallback((e) => {
		const { name, value } = e.target;
		setInputs((prev) => ({
			...prev,
			[name]: value,
		}));
	}, []);

	const handleSubmit = useCallback(() => {
		// do something
	}, []);

	return (
		<div className={styles.cnt}>
			<InputBox
				type="email"
				name="email"
				label="Email"
				placeholder="이메일"
				value={Inputs.email}
				onChange={handleOnChange}
			/>
			<InputBox
				type="email"
				name="password"
				label="Password"
				placeholder="패스워드"
				value={Inputs.password}
				onChange={handleOnChange}
			/>
			<Button
				fullWidth
				btnStyles="primary"
				type="submit"
				onClick={handleSubmit}
			>
				Sign In
			</Button>
		</div>
	);
};

export default SignInModal;
