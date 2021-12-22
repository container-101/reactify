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
  ref: ForwardedRef<HTMLButtonElement>
) => {
  return (
    <button
      ref={ref}
      style={{ color: color }}
      className={classNames("Button", { primary: primary })}
      type="button"
    >
      {children}
    </button>
  );
};

export default forwardRef(Button);
