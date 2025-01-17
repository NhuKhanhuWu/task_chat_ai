/** @format */

import { Link } from "react-router-dom";
import Button from "../component/Button/Button";
import ChatBubble from "../component/ChatBubble/ChatBubble";
import Form from "../component/Form/Form";
import SystemMessage from "../component/SystemMessage/SystemMessage";
import TaskContent from "../component/TaskContent/TaskContent";
import { useChat } from "../context/ChatContext";

function Homepage() {
  const { chatContent, systemMessage } = useChat();

  return (
    <div className="flex mt-6 ml-6">
      <div className="grow-1 w-1/2 border-r-2 pr-10">
        {/* DASHBOARD BTN */}
        <Button type="secondaryBtn" className="mb-8">
          <span className="material-symbols-outlined">tune</span>{" "}
          <Link to="/dashboard">Daskboard</Link>
        </Button>

        {/* FORM */}
        <Form></Form>
      </div>

      {/* ANSWEAR */}
      <div className="w-1/2 relative pl-10 flex flex-col h-svh overflow-y-scroll">
        {chatContent.length !== 0 ? (
          chatContent.map((chat, i) => (
            <ChatBubble sender={chat?.sender} key={i} index={i}>
              <TaskContent
                title={chat?.title}
                decsription={chat?.description}
              />
            </ChatBubble>
          ))
        ) : (
          <p className="text-4xl text-center text-slate-400 absolute top-1/3 left-1/2 -translate-x-1/2">
            Your chat will appear here
          </p>
        )}
      </div>

      {/* SYSTEM MESSAGE */}
      {systemMessage && <SystemMessage message={systemMessage}></SystemMessage>}
    </div>
  );
}

export default Homepage;
