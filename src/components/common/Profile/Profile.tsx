import React from "react";
import * as P from "./Profile.style";

import Kang from "../../../assets/image/Profile/Kang.jpeg";
import Search from "../../../assets/image/Profile/Search.png";

const Profile = () => {
  return (
    <P.Profile>
      <P.ProfileIntroduceContainer>
        <img src={Kang} />
        <div>
          <h2>강성훈</h2>
          <h4>저는 강성훈이며 김세랑, 한별, 지수, 소연 등을 좋아합니다</h4>
        </div>
      </P.ProfileIntroduceContainer>

      <P.SearchContainer>
        <img src={Search} />
        <input></input>
      </P.SearchContainer>
    </P.Profile>
  );
};

export default Profile;
