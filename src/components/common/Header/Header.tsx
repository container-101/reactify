import React, { useCallback, useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@components/common";
import { PopupLayout } from "@src/components/layout";
import { useTranslation } from "react-i18next";
import "./Header.scss";
import { SideMenu } from "../mobile";

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
			<header className="Header_container">
				<div className="Header_content">
					<div className="Header_item">
						<img className="Header_logo" src="/logo192.png" alt="logo" />
					</div>
					{/* <Icon name="notification" /> */}
				</div>
				<div className="Header_content Header_link">
					<div className="Header_item">
						<Button>{t("redirect.map")}</Button>
					</div>
					<div className="Header_item">
						<NavLink to="/">
							<Button>{t("redirect.home")}</Button>
						</NavLink>
					</div>
					<div className="Header_item">
						<NavLink to="/about">
							<Button>{t("redirect.info")}</Button>
						</NavLink>
					</div>
				</div>
				<div className="Header_content Header_popup">
					<div className="Header_item" onClick={toggleOpen}>
						{t("popup")}
					</div>
				</div>
				{/* def popup for desktop & slider for mobile*/}
				{isOpen && <Popper onClose={() => setIsOpen(false)} />}
			</header>
			<SideMenu onClose={() => setIsOpen(false)} />
		</>
	);
};

export default Header;
