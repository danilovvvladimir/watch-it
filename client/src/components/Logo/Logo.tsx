// ==> Libs imports <===
import Image from "next/image";
import { FC } from "react";
// ==> Components imports <===

// ==> Other imports <===
import logoURL from "@/assets/images/logo.svg";

interface LogoProps {
  className?: string;
}

const Logo: FC<LogoProps> = ({ className }) => {
  return (
    <Image className={className ? className : ""} src={logoURL} alt="logo" />
  );
};

export default Logo;
