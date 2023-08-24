import { useState } from "react";
import Kakao from "../assets/kakao_login_large_narrow.png";
import kakao from "../kakao/kakaoAuth";

const REST_API_KEY = kakao.rest;
const REDIRECT_URI = kakao.redirectURI;
const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

function Login() {
  const onClickKakaoBtn = () => {
    window.location.href = KAKAO_AUTH_URL;
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
