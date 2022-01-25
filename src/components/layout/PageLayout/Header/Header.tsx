import React, { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@components/common";
import { PopupLayout } from "@src/components/layout";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import SideMenu from "./SideMenu/SideMenu";
import styles from "./Header.module.scss";

interface IPopperProps {
	onClose: () => void;
}

const Popper = ({ onClose }: IPopperProps) => {
	return <PopupLayout onClose={onClose}>abc</PopupLayout>;
};

const Header = () => {
	const { t } = useTranslation("header");
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const toggleOpen = useCallback(() => {
		setIsOpen((prev) => {
			return !prev;
		});
	}, []);

	return (
		<>
			<header className={styles.container}>
				<div className={(styles.content, styles.logo)}>
					<div className={styles.item}>
						<img className={styles.logo_img} src="/logo192.png" alt="logo" />
					</div>
				</div>
				<div className={classNames(styles.content, styles.popup)}>
					<div className={styles.item} onClick={toggleOpen}>
						{t("popup")}
					</div>
				</div>
				{isOpen && <Popper onClose={() => setIsOpen(false)} />}
			</header>
			<SideMenu onClose={() => setIsOpen(false)} />
		</>
	);
};

export default Header;
