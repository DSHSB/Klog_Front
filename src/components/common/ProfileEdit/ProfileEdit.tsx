import React, { useCallback, useEffect, useRef, useState } from "react";
import * as P from "./ProfileEdit.style";
import Interest from "./fieldOfInterest/Interest";

import Kang from "../../../assets/image/Header/Kang.jpeg";

const ProfileEdit = () => {
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

        <Interest />
      </P.TextContainer>

      <div className="right">
        <P.EditButton>수정</P.EditButton>
      </div>
    </P.ProfielEdit>
  );
};

export default ProfileEdit;
