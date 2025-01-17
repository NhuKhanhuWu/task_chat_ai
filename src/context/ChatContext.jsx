/** @format */

import { useContext, useState } from "react";
import { createContext } from "react";

const ChatContext = createContext();

function ChatProvider({ children }) {
  const [chatContent, setChatContent] = useState([]);
  const [systemMessage, setSystemMessage] = useState(null);

  //   add new chat to chat box (by AI, user, system)
  function addChat(message) {
    setChatContent((chatContent) => [...chatContent, message]);
  }

  //   save to localStorage
  function saveDraft(draft) {
    if (draft) {
      localStorage.setItem("draft", JSON.stringify(draft));
      addChat("Task saved successfully!");
    }
  }

  return (
    <ChatContext.Provider
      value={{
        chatContent,
        addChat,
        saveDraft,
        systemMessage,
        setSystemMessage,
      }}>
      {children}
    </ChatContext.Provider>
  );
}

function useChat() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("ChatContext was used outside of the ChatProvider");
  }

  return context;
}

export { ChatProvider, useChat };
