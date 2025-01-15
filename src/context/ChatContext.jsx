/** @format */

import axios from "axios";
import { useContext, useState } from "react";
import { createContext } from "react";

const ChatContext = createContext();

function ChatProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [chatContent, setChatContent] = useState([]);

  //   send task to AI
  async function generateDraft(title, decsr) {
    setIsLoading(true);

    try {
      const data = (await axios.get("hhjsdfd")).data;
      addChat(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

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
        isLoading,
        error,
        chatContent,
        addChat,
        generateDraft,
        saveDraft,
      }}>
      {children}
    </ChatContext.Provider>
  );
}

function useChat() {
  const context = useContext(ChatContext);
  if (!context) {
    throw new Error("ChatContext was used outside of the ChatProvder");
  }

  return context;
}

export { ChatProvider, useChat };
