import { useEffect, useState } from "react";

import { profileUrlState } from "../state/atom";
import { useRecoilState } from "recoil";

function MyPost() {
  const [user_id, setUserId] = useState();
  const [nickName, setNickName] = useState();
  const [profileImage, setProfileImage] = useState();
  const getProfile = async () => {
    try {
      // Kakao SDK API를 이용해 사용자 정보 획득
      let data = await window.Kakao.API.request({
        url: "/v2/user/me",
      });
      // 사용자 정보 변수에 저장
      setUserId(data.id);
      setNickName(data.properties.nickname);
      setProfileImage(data.properties.profile_image);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="my-post-container">
      <h2 className="my-post-name">{nickName}</h2>
      <img className="my-post-profile-image" src={profileImage}></img>
    </div>
  );
}

export default MyPost;
