import React from "react";
import classNames from "classnames";
import styles from "./ModalLayout.module.scss";

interface Props {
	show: boolean;
	handleModalShow: (status: boolean) => void;
	children?: React.ReactNode;
}

export default function Modal({ show, handleModalShow, children }: Props) {
	return (
		<div className={classNames(styles.modal_wrap, { [styles.active]: show })}>
			<div
				className={styles.overlay}
				onClick={() => {
					handleModalShow(false);
				}}
			/>
			<div className={styles.modal_con}>
				<div className={styles.contents}>모달이 열렸다!</div>
				<div className={styles.bottom}>
					<button
						type="button"
						onClick={() => {
							handleModalShow(false);
						}}
					>
						모달 닫기
					</button>
				</div>
			</div>
		</div>
	);
}
