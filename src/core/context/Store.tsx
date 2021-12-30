import React, { createContext, useState } from "react";
import { iLanguage } from "../interface/lang";

export const LangConext = createContext({
	lang: "ko",
	toggleLang: (inputLang: iLanguage) => {},
});

interface IStoreProps {
	children: React.ReactNode;
}

const Store = ({ children }: IStoreProps) => {
	const [lang, setLang] = useState("ko");

	const toggleLang = (inputLang: iLanguage) => {
		setLang(lang === "ko" ? "en" : "ko");
	};

	return (
		<LangConext.Provider value={{ lang, toggleLang }}>
			{children}
		</LangConext.Provider>
	);
};

export default Store;
