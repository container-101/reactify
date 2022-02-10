import React, { forwardRef } from "react";
import classNames from "classnames";
import { btnSizes, btnStyles } from "utils/constants";
import styles from "./Button.module.scss";

interface ButtonShape {
	type?: "button" | "submit" | "reset";
	className?: string;
	btnSize?: btnSizes;
	btnStyles?: btnStyles;
	active?: boolean;
	hover?: boolean;
	focus?: boolean;
	disabled?: boolean;
	social?: "google";
	fullWidth?: boolean;
	children?: React.ReactNode;
	onClick?: () => void;
}

const Button = (
	{
		type = "button",
		className,
		btnSize = "medium",
		btnStyles = "default",
		active = false,
		hover = false,
		focus = false,
		disabled = false,
		social,
		fullWidth,
		children,
		onClick,
	}: ButtonShape,
	ref: React.Ref<HTMLButtonElement>,
) => {
	return (
		<button
			ref={ref}
			type={type}
			onClick={onClick}
			className={classNames(
				className,
				styles.ctn,
				styles[btnStyles],
				styles[btnSize],
				{
					[styles.active]: active,
					[styles.fullWidth]: fullWidth,
					[styles.hover]: hover,
					[styles.focus]: focus,
					[styles.disabled]: disabled,
					[styles.google]: social === "google",
				},
			)}
		>
			{children}
		</button>
	);
};

export default forwardRef(Button);
