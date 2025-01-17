/** @format */

import { Link } from "react-router-dom";
import Button from "../component/Button/Button";
import Form from "../component/Form/Form";
import SystemMessage from "../component/SystemMessage/SystemMessage";
import { useChat } from "../context/ChatContext";
import ChatBox from "../component/ChatBox/ChatBox";

function Homepage() {
  const { systemMessage } = useChat();

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
      <ChatBox></ChatBox>

      {/* SYSTEM MESSAGE */}
      <SystemMessage></SystemMessage>
    </div>
  );
}

export default Homepage;
