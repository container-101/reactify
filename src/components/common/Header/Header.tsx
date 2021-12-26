import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@components/common";
import "./Header.scss";
import { PopupLayout } from "@src/components/layout";

interface IPopperProps {
	onClose: () => void;
}

const Popper = ({ onClose }: IPopperProps) => {
	return <PopupLayout onClose={onClose}>abc</PopupLayout>;
};

const Header = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<div className="Header_container">
			<div className="Header_content">
				<div className="Header_item">
					<img className="Header_logo" src="/logo192.png" alt="logo" />
				</div>
				{/* <Icon name="notification" /> */}
			</div>
			<div className="Header_content">
				<div className="Header_item">
					<Button>G</Button>
				</div>
				<div className="Header_item">
					<NavLink to="/">
						<Button>Home</Button>
					</NavLink>
				</div>
				<div className="Header_item">
					<NavLink to="/about">
						<Button>Info</Button>
					</NavLink>
				</div>
			</div>
			<div className="Header_content">
				<div
					className="Header_item"
					onClick={() =>
						setIsOpen((prev) => {
							return !prev;
						})
					}
				>
					Something
				</div>
			</div>
			{isOpen && <Popper onClose={() => setIsOpen(false)} />}
		</div>
	);
};

export default Header;
