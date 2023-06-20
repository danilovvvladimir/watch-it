"use client";

// ==> Libs imports <===
import { ButtonHTMLAttributes, FC } from "react";
// ==> Components imports <===

// ==> Other imports <===
import "./Button.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: FC<ButtonProps> = ({ className, children, ...props }) => {
  const classNames = className ? `button ${className}` : "button";
  return (
    <button {...props} className={classNames}>
      {children}
    </button>
  );
};

export default Button;
