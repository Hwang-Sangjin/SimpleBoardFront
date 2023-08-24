import { useState } from "react";
import Contents from "./Contents";
import mobiltech_logo from "../assets/mobiltech_logo.png";
import home_icon from "../assets/home.png";
import chat_icon from "../assets/envelope.png";
import LeftHeader from "./Leftheader";
import ChatContents from "./ChatContents";
import ContentsHeader from "./ContentsHeader";

function Chat() {
  return (
    <div className="Main-main-container">
      <LeftHeader />
      <div className="contents-container">
        <ContentsHeader title="Chat" />
        <ChatContents />
      </div>
    </div>
  );
}

export default Chat;
