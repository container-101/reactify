import i18n from "@src/utils/i18n";
import React, { useCallback } from "react";
import styles from "./Footer.module.scss";

interface Props {}

const Footer = (props: Props) => {
	const handleLanguageChange = useCallback(() => {
		i18n.changeLanguage("en");
	}, []);

	return (
		<footer className={styles.container}>
			<div className={styles.content}>
				<button onClick={handleLanguageChange}>Change Language</button>
			</div>
		</footer>
	);
};

export default Footer;
