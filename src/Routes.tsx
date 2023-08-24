import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Auth from "./Auth";
import Home from "./components/Home";
import Chat from "./components/Chat";

const RoutePage = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/kakao-login" element={<Auth />} />
      <Route path="/home" element={<Home />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
};

export default RoutePage;
