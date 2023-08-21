import { useEffect, useState } from "react";
import axios from "axios";
import kakao from "../kakao/kakaoAuth";

const KakaoCallback = () => {
  const [profileImage, setProfileImage] = useState();

  useEffect(() => {
    const params = new URL(document.location.toString()).searchParams;
    const code = params.get("code");
    const grantType = "authorization_code";
    const REST_API_KEY = kakao.rest;
    const REDIRECT_URI = kakao.redirectURI;

    axios
      .post(
        `https://kauth.kakao.com/oauth/token?grant_type=${grantType}&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`,
        {},
        {
          headers: {
            "Content-type": "application/x-www-form-urlencoded;charset=utf-8",
          },
        }
      )
      .then((res: any) => {
        console.log(res);

        const { access_token } = res.data;

        axios
          .post(
            `https://kapi.kakao.com/v2/user/me`,
            {},
            {
              headers: {
                Authorization: `Bearer ${access_token}`,
                "Content-type":
                  "application/x-www-form-urlencoded;charset=utf-8",
              },
            }
          )
          .then((res: any) => {
            console.log(res);
            setProfileImage(res.data.kakao_account.profile.profile_image_url);
          });
      });
  }, []);

  return (
    <>
      <img className="profile-image" src={profileImage}></img>
    </>
  );
};
export default KakaoCallback;
