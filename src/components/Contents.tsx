import { useState } from "react";
import MyPost from "./MyPost";
import OthersPost from "./OthersPost";

function Contents() {
  return (
    <div className="contents-container">
      <MyPost />
      <OthersPost />
    </div>
  );
}

export default Contents;
