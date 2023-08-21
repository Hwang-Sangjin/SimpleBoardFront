import { useState } from "react";
import Kakao from "../assets/kakao_login_large_narrow.png";
import kakao from "../kakao/kakaoAuth";

function Login() {
  const onClickKakaoBtn = () => {
    const url =
      "https://kauth.kakao.com/oauth/authorize?client_id=" +
      kakao.js +
      "&redirect_uri=" +
      kakao.redirectURI +
      "&response_type=code&" +
      "scope=profile_image";

    window.location.href = url;
  };

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
