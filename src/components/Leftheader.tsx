import { useState } from "react";
import Contents from "./Contents";
import mobiltech_logo from "../assets/mobiltech_logo.png";
import home_icon from "../assets/home.png";
import chat_icon from "../assets/envelope.png";

function LeftHeader() {
  const RouteToHome = () => {
    window.location.href = "/home";
  };
  const RouteToChat = () => {
    window.location.href = "/chat";
  };
  return (
    <div className="left-header">
      <img className="header-icon" src={mobiltech_logo} />
      <img className="home-icon" src={home_icon} onClick={RouteToHome} />
      <img className="chat-icon" src={chat_icon} onClick={RouteToChat} />
    </div>
  );
}

export default LeftHeader;
