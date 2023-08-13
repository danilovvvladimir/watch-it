import { FC } from "react";
import "./Loader.scss";
import loaderSVG from "../../../assets/loader.svg";
import Image from "next/image";

const Loader: FC = () => {
  return <Image src={loaderSVG} alt="loading spinner" className="loader" />;
};

export default Loader;
