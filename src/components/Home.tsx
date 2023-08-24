import { useState } from "react";
import Contents from "./Contents";
import mobiltech_logo from "../assets/mobiltech_logo.png";
import home_icon from "../assets/home.png";
import chat_icon from "../assets/envelope.png";
import LeftHeader from "./Leftheader";
import ContentsHeader from "./ContentsHeader";

function Home() {
  return (
    <div className="Main-main-container">
      <LeftHeader />
      <div className="contents-container">
        <ContentsHeader title="Home" />
        <Contents />
      </div>
    </div>
  );
}

export default Home;
