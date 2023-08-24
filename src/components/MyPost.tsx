import { useEffect, useState } from "react";

import { profileUrlState } from "../state/profileUrlState";
import { useRecoilState } from "recoil";
import { profileNameState } from "../state/profileNameState";

function MyPost() {
  const [user_id, setUserId] = useState();
  const [nickName, setNickName] = useRecoilState(profileNameState);
  const [profileImage, setProfileImage] = useRecoilState(profileUrlState);

  console.log(nickName, profileImage);

  return (
    <div className="my-post-container">
      <h2 className="my-post-name">{nickName}</h2>
      <img className="my-post-profile-image" src={profileImage}></img>
    </div>
  );
}

export default MyPost;
