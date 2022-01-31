import { useCallback, useContext } from "react";
import i18n from "utils/i18n";
import { PopupLayout } from "components/layout";
import { LangConext } from "core/context/LocaleStore";
import styles from "./HeaderPopup.module.scss";

interface IPopperProps {
	onClose: () => void;
}

const HeaderPopup = ({ onClose }: IPopperProps) => {
	const { lang, toggleLang } = useContext(LangConext);

	const handleLanguageChange = useCallback(() => {
		const nextLang = lang === "en" ? "ko" : "en";
		i18n.changeLanguage(nextLang);
		toggleLang(nextLang);
	}, [lang, toggleLang]);

	return (
		<PopupLayout onClose={onClose}>
			<div className={styles.container}>
				<button onClick={handleLanguageChange}>Change Language</button>
			</div>
		</PopupLayout>
	);
};

export default HeaderPopup;
