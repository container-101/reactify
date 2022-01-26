import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import HeaderPopup from "@components/popup/HeaderPopup";
import SideMenu from "./SideMenu/SideMenu";
import styles from "./Header.module.scss";
import { getImageURL } from "@utils/urls";

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
						<Link to="/">
							<img
								className={styles.logo_img}
								src={getImageURL("/logo64.png")}
								alt="logo"
							/>
						</Link>
					</div>
				</div>
				<div className={classNames(styles.content, styles.popup)}>
					<div className={styles.item} onClick={toggleOpen}>
						{t("popup")}
					</div>
				</div>
				{isOpen && <HeaderPopup onClose={() => setIsOpen(false)} />}
			</header>
			<SideMenu onClose={() => setIsOpen(false)} />
		</>
	);
};

export default Header;
