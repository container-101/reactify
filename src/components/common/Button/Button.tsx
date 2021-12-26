import React, { ForwardedRef, forwardRef } from "react";
import classNames from "classnames";
import "./Button.scss";

interface IButtonProps {
	color?: string;
	primary?: boolean;
	children: React.ReactNode;
}

const Button = (
	{ color, primary = false, children }: IButtonProps,
	ref: ForwardedRef<HTMLButtonElement>,
) => {
	return (
		<button
			ref={ref}
			style={{ color }}
			className={classNames("Button", { primary })}
			type="button"
		>
			{children}
		</button>
	);
};

export default forwardRef(Button);
