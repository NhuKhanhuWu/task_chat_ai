/** @format */
import styles from "./Button.module.css";

function Button({ isSubmitBtn = false, type = "", children, className = "" }) {
  return (
    <button
      type={isSubmitBtn && "submit"}
      className={`btn ${styles[type]} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
