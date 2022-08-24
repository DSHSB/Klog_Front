import React, { useState } from "react";
import * as P from "./ProfileEdit.style";

import Kang from "../../../assets/image/Header/Kang.jpeg";

const ProfileEdit = () => {
  const [categories, setCategories] = useState(["frontend", "backend"]);

  let makeCategories = categories.map((categories, i) => {
    return (
      <P.selectedCategoriesBox key={i}>
        {categories}
        <P.DeleteCategoriesButton>X</P.DeleteCategoriesButton>
      </P.selectedCategoriesBox>
    );
  });

  return (
    <P.ProfielEdit>
      <P.ImgChangeBox>
        <img src={Kang}></img>

        <div>
          <label htmlFor="upload">업로드</label>
          <input className="upload" type="file" />

          <P.ChangeBasicImg>기본 이미지로 변경</P.ChangeBasicImg>
        </div>
      </P.ImgChangeBox>

      <P.TextContainer>
        <P.Title>사용자 이름</P.Title>
        <P.UserName className="name"></P.UserName>

        <P.Title>소개 글</P.Title>
        <P.Introduce className="introduce"></P.Introduce>

        <P.Title>관심 분야</P.Title>
        <P.CategoriesContainer>
          <input placeholder="카테고리"></input>
          <div className="selectedCategoriesContainer">{makeCategories}</div>
        </P.CategoriesContainer>
      </P.TextContainer>

      <div className="right">
        <P.EditButton>수정</P.EditButton>
      </div>
    </P.ProfielEdit>
  );
};

export default ProfileEdit;
