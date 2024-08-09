import { BallTriangle } from "react-loader-spinner";
import css from "./Loader.module.css";

export const Loader = () => (
  <div className={css.loader}>
    <BallTriangle
      height={100}
      width={100}
      radius={5}
      color="#0000FF"
      ariaLabel="ball-triangle-loading"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
    />
  </div>
);
