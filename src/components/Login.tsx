import { useState } from "react";
import Kakao from "../assets/kakao_login_large_narrow.png";

function Login() {
  const onClickKakaoBtn = () => {};

  return (
    <div className="Login-main-container">
      <img
        className="kakao-login-btn"
        src={Kakao}
        onClick={onClickKakaoBtn}
      ></img>
    </div>
  );
}

export default Login;
