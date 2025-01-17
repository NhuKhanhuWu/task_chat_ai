/** @format */

import fakeApiPost from "../../api/postApi";
import { useChat } from "../../context/ChatContext";
import styles from "./ChatBubble.module.css";

function getSaveDtae() {
  const now = new Date();

  const day = String(now.getDate()).padStart(2, "0"); // Get day and pad with 0 if needed
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const year = now.getFullYear();

  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");

  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

function SaveDraftBtn({ children, index }) {
  const { chatContent, setSystemMessage } = useChat();

  async function handleSveDraft() {
    const id = localStorage.getItem("savedDraft")
      ? JSON.parse(localStorage.getItem("savedDraft")).length + 1
      : 1;
    const draft = { ...chatContent[index], id: id, saveDate: getSaveDtae() };

    try {
      const response = await fakeApiPost("savedDraft", draft);
      setSystemMessage(response);
    } catch (err) {
      setSystemMessage(err);
    }
  }

  return (
    <button className={styles.submitTaskBtn} onClick={() => handleSveDraft()}>
      {children}
    </button>
  );
}

function ChatBubble({ children, sender, index = null }) {
  return (
    <div
      className={`${styles.chatBubble} ${
        sender === "ai" ? styles.ai : styles.user
      }`}>
      <div>{children}</div>

      {sender === "ai" && (
        <SaveDraftBtn index={index}>Submit Task Draft</SaveDraftBtn>
      )}
    </div>
  );
}

export default ChatBubble;
