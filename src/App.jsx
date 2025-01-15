/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import { ChatProvider } from "./context/ChatContext";

import "./App.css";

function App() {
  return (
    <ChatProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage></Homepage>}></Route>
        </Routes>
      </BrowserRouter>
    </ChatProvider>
  );
}

export default App;
