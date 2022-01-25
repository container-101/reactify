import React from "react";
import classNames from "classnames";
import styles from "./ModalLayout.module.scss";
import { ModalPortal } from "@src/components/portals";

interface Props {
	show: boolean;
	handleModalShow: (status: boolean) => void;
	children?: React.ReactNode;
}

export default function ModalLayout({
	show,
	handleModalShow,
	children,
}: Props) {
	return (
		<ModalPortal>
			<div className={classNames(styles.modal_wrap, { [styles.active]: show })}>
				<div
					className={styles.overlay}
					onClick={() => {
						handleModalShow(false);
					}}
				/>
				<div className={styles.modal_con}>
					<div className={styles.contents}>{children}</div>
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
		</ModalPortal>
	);
}
