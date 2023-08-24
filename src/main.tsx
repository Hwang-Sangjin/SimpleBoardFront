import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/Login.tsx";
import Home from "./components/Home.tsx";
import KakaoCallback from "./components/KakaoCallback.tsx";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import Chat from "./components/Chat.tsx";
import Auth from "./Autho.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>,
  },
  {
    path: "/kakao-login",
    element: <Auth></Auth>,
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "/chat",
    element: <Chat></Chat>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RecoilRoot>
    <RouterProvider router={router} />
  </RecoilRoot>
);
