import React from "react";
import * as P from "./ProfileEdit.style";

import Kang from "../../../assets/image/Header/Kang.jpeg";

const ProfileEdit = () => {
  return (
    <P.ProfielEdit>
      <P.ImgChangeBox>
        <img src={Kang}></img>

        <div>
          <label htmlFor="upload">업로드</label>
          <input id="upload" type="file" />

          <P.ChangeBasicImg>기본 이미지로 변경</P.ChangeBasicImg>
        </div>
      </P.ImgChangeBox>

      <P.TextContainer>
        <P.Title>사용자 이름</P.Title>
        <P.UserName id="name"></P.UserName>

        <P.Title>소개 글</P.Title>
        <P.Introduce id="introduce"></P.Introduce>

        <P.Title>관심 분야</P.Title>
        <P.CategoriesContainer>
          <input placeholder="카테고리"></input>
          <div id="selectedCategoriesContainer"></div>
        </P.CategoriesContainer>
      </P.TextContainer>
    </P.ProfielEdit>
  );
};

export default ProfileEdit;
