/** @format */

import Button from "../component/Button/Button";
import ChatBubble from "../component/ChatBubble/ChatBubble";
import Form from "../component/Form/Form";
import TaskContent from "../component/TaskContent/TaskContent";
import { useChat, ChatProvider } from "../context/ChatContext";

const testTitle = "ryg fsdfsdif sfhsdfj usihfosdij";
const testDescr = `Trong Tailwind CSS, để tạo border bên trái (left border), bạn sử
            dụng lớp border-l. Ngoài ra, bạn có thể kết hợp với các tiện ích
            khác để tùy chỉnh độ dày, màu sắc hoặc kiểu viền. Các lớp liên quan
            đến left border: Độ dày viền bên trái: border-l – Viền bên trái với
            độ dày mặc định (1px). border-l-0 – Không có viền bên trái.
            border-l-2, border-l-4, border-l-8 – Viền bên trái với độ dày cụ
            thể. Màu sắc viền bên trái: Sử dụng lớp border-l-color. Ví dụ:
            border-l-gray-500 border-l-red-600 border-l-green-400 Kiểu viền bên
            trái: border-l-solid, border-l-dashed, border-l-dotted,
            border-l-double, border-l-none.`;

function Homepage() {
  const { chatContent } = useChat();
  console.log(chatContent);

  return (
    <>
      <div className="flex mt-6 ml-6">
        <div className="grow-1 w-1/2 border-r-2 pr-10">
          {/* DASHBOARD BTN */}
          <Button type={"secondaryBtn"} className="mb-8">
            <span className="material-symbols-outlined">tune</span> Daskboard
          </Button>

          {/* FORM */}
          <Form></Form>
        </div>

        {/* ANSWEAR */}
        <div className="w-1/2 relative pl-10 flex flex-col h-svh overflow-y-scroll">
          {chatContent.length !== 0 ? (
            chatContent.map((chat, i) => (
              <ChatBubble sender={chat.sender} key={i}>
                <TaskContent
                  title={chat.title}
                  decsription={chat.description}
                />
              </ChatBubble>
            ))
          ) : (
            <p className="text-4xl text-center text-slate-400 absolute top-1/3 left-1/2 -translate-x-1/2">
              Your generated tasks will appear here
            </p>
          )}
        </div>
      </div>
    </>
  );
}

export default Homepage;
