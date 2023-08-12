import { FC } from "react";
import "./SkeletonLoader.scss";
import "react-loading-skeleton/dist/skeleton.css";
import Skeleton, { SkeletonProps } from "react-loading-skeleton";

const SkeletonLoader: FC<SkeletonProps> = (props) => {
  return (
    <Skeleton
      className={props.className ? props.className + " skeleton" : "skeleton"}
      {...props}
      baseColor="#0e0e10"
      highlightColor="#ea2845"
    />
  );
};

export default SkeletonLoader;
