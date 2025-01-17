/** @format */

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import { ChatProvider } from "./context/ChatContext";

import "./App.css";
import { LoadProvider } from "./context/LoadContext.jsx";
import Dashboard from "./pages/Dashboard.jsx";

function App() {
  return (
    <LoadProvider>
      <ChatProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage></Homepage>}></Route>
            <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
          </Routes>
        </BrowserRouter>
      </ChatProvider>
    </LoadProvider>
  );
}

export default App;
