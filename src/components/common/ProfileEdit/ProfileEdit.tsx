import React from "react";
import * as P from "./ProfileEdit.style";

import Kang from "../../../assets/image/Header/Kang.jpeg";

const ProfileEdit = () => {
  return (
    <P.ProfielEdit>
      <P.ImgChangeBox>
        <img src={Kang}></img>

        <div>
          <button>업로드</button>
          <p>기본 이미지로 변경</p>
        </div>
      </P.ImgChangeBox>

      <P.TextContainer>
        <h2>사용자 이름</h2>
        <P.Input></P.Input>

        <h2>소개 글</h2>
        <P.Input></P.Input>
      </P.TextContainer>
    </P.ProfielEdit>
  );
};

export default ProfileEdit;
