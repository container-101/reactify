import { LangConext } from "@src/core/context/Store";
import i18n from "@src/utils/i18n";
import React, { useCallback, useContext } from "react";
import styles from "./Footer.module.scss";

interface Props {}

const Footer = (props: Props) => {
	const { lang, toggleLang } = useContext(LangConext);

	const handleLanguageChange = useCallback(() => {
		const nextLang = lang === "en" ? "ko" : "en";
		i18n.changeLanguage(nextLang);
		toggleLang(nextLang);
	}, [lang, toggleLang]);

	return (
		<footer className={styles.container}>
			<div className={styles.content}>
				<button onClick={handleLanguageChange}>Change Language</button>
			</div>
		</footer>
	);
};

export default Footer;
