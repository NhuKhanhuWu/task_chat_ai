/** @format */
import styles from "./Loadder.module.css";

function Loadder() {
  return (
    <div className={`absolute left-1/2 bottom-2/3 ${styles.loader}`}></div>
  );
}

export default Loadder;
