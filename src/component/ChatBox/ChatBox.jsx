/** @format */

import { useChat } from "../../context/ChatContext";
import { useLoad } from "../../context/LoadContext";
import TaskContent from "../TaskContent/TaskContent";
import ChatBubble from "../ChatBubble/ChatBubble";
import Loadder from "../Loadder/Loadder";
import { useEffect, useRef } from "react";

function ChatBox() {
  const { chatContent } = useChat();
  const { isLoading } = useLoad();
  const chatBoxRef = useRef();

  useEffect(
    function () {
      if (chatBoxRef.current) {
        chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
      }
    },
    [chatContent]
  );

  return (
    <div
      ref={chatBoxRef}
      className="w-1/2 relative pl-10 flex flex-col h-svh overflow-y-scroll relative">
      {chatContent.length !== 0 ? (
        chatContent.map((chat, i) => (
          <ChatBubble sender={chat?.sender} key={i} index={i}>
            <TaskContent title={chat?.title} decsription={chat?.description} />
          </ChatBubble>
        ))
      ) : (
        <p className="text-4xl text-center text-slate-400 absolute top-1/3 left-1/2 -translate-x-1/2">
          Your chat will appear here
        </p>
      )}

      {isLoading && <Loadder></Loadder>}
    </div>
  );
}

export default ChatBox;
