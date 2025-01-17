/** @format */
import styles from "./Button.module.css";

function Button({
  isSubmitBtn = false,
  type = "",
  children,
  className = "",
  disabled = false,
}) {
  return (
    <button
      disabled={disabled}
      type={isSubmitBtn && "submit"}
      className={`btn ${styles[type]} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
