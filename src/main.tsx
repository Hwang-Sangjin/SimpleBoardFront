import React from "react";
import ReactDOM from "react-dom/client";

import { RecoilRoot } from "recoil";

import { BrowserRouter } from "react-router-dom";
import RoutePage from "./Routes";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

//React-router를 사용하기 위해서 RecoilRoot와 Route Page의 최상단에 BrowserRouter를 사용
root.render(
  <BrowserRouter>
    <RecoilRoot>
      <RoutePage />
    </RecoilRoot>
  </BrowserRouter>
);
