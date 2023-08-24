import React from "react";
import { useEffect } from "react";
import axios from "axios";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import kakao from "./kakao/kakaoAuth";
import { profileNameState } from "./state/profileNameState";
import { profileUrlState } from "./state/profileUrlState";
import { useRecoilState } from "recoil";

function Auth() {
  const REST_API_KEY = kakao.rest;
  const REDIRECT_URI = kakao.redirectURI;
  const CLIENT_SECRET = kakao.secret;

  const [nickName, setNickName] = useRecoilState(profileNameState);
  const [profileImage, setProfileImage] = useRecoilState(profileUrlState);

  // calllback으로 받은 인가코드
  const code = new URL(window.location.href).searchParams.get("code");
  const navigate = useNavigate();
  const getToken = async () => {
    const payload = qs.stringify({
      grant_type: "authorization_code",
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
      client_secret: CLIENT_SECRET,
    });
    try {
      // access token 가져오기
      const res = await axios.post(
        "https://kauth.kakao.com/oauth/token",
        payload
      );
      const { data } = res;
      const { access_token } = data;

      if (access_token) {
        console.log(`Bearer ${access_token}`);

        axios
          .post(
            "https://kapi.kakao.com/v2/user/me",
            {},
            {
              headers: {
                Authorization: `Bearer ${access_token}`,
                "Content-Type": "application/x-www-form-urlencoded",
              },
            }
          )
          .then((res) => {
            setNickName(res.data.properties.nickname);
            setProfileImage(res.data.properties.profile_image);
            navigate("/home");
          });
      }

      // Kakao Javascript SDK 초기화
      window.Kakao.init(REST_API_KEY);
      // access token 설정
      window.Kakao.Auth.setAccessToken(res.data.access_token);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getToken();
  }, []);
  return null;
}
export default Auth;
