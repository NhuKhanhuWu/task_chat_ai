/** @format */

import styles from "./ChatBubble.module.css";

const ChatBubble = ({ children, sender, onSubmit }) => {
  console.log(sender);
  return (
    <div
      className={`${styles.chatBubble} ${
        sender === "ai" ? styles.ai : styles.user
      }`}>
      <div>{children}</div>

      {sender === "ai" && (
        <button className={styles.submitTaskBtn} onClick={onSubmit}>
          Submit Task Draft
        </button>
      )}
    </div>
  );
};

export default ChatBubble;
