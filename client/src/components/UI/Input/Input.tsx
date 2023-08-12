"use client";

import { InputHTMLAttributes, FC, useState } from "react";
import "./Input.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

const Input: FC<InputProps> = ({ className, children, ...props }) => {
  // const [value, setValue] = useState<string>("");
  const classNames = className ? `input ${className}` : "input";

  return (
    <input
      {...props}
      // value={value}
      // onChange={(event) => setValue(event.target.value)}
      className={classNames}
    />
  );
};

export default Input;
