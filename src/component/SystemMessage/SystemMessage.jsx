/** @format */

import { useEffect, useState } from "react";
import { useChat } from "../../context/ChatContext";

function SystemMessage() {
  const [hidden, setHidden] = useState(false);
  const { systemMessage, setSystemMessage } = useChat();

  useEffect(() => {
    if (systemMessage) {
      setHidden(false); // Show message

      const timer = setTimeout(() => {
        setHidden(true); // Hide after 5 seconds
        setSystemMessage(null);
      }, 5000);

      return () => {
        clearTimeout(timer); // Cleanup on unmount
        setSystemMessage(null); // Ensure message is cleared when unmounting
      };
    }
  }, [systemMessage]);

  if (hidden || !systemMessage) return null; // Don't render if hidden

  const style = {
    transform: "translate(-50%, 1.5rem)",
  };

  return (
    <div
      style={style}
      className={`${
        systemMessage?.type === "error" ? "bg-red-300" : "bg-green-300"
      } fixed top-0 left-1/2 py-3 px-6 text-xl rounded-2xl flex items-center gap-5`}>
      <p>{systemMessage?.message}</p>
      <span
        className="material-symbols-outlined h-fit cursor-pointer"
        onClick={() => setHidden(true)}>
        close
      </span>
    </div>
  );
}

export default SystemMessage;
