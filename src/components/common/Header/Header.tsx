import React, { useEffect, useState } from "react";
import * as H from "./Header.style";

import Plus from "../../../assets/image/Header/Plus.png";
import Sun from "../../../assets/image/Header/Sun.png";
import Kang from "../../../assets/image/Header/Kang.jpeg";
import Logout from "../../../assets/image/Header/Logout.png";
import Profile from "../../../assets/image/Header/Profile.png";
import Time from "../../../assets/image/Header/Time.png";
import Write from "../../../assets/image/Header/Write.png";
import WhiteTraingle from "../../../assets/image/Header/WhiteTraingle.png";

import { Link } from "react-router-dom";

const Header = () => {
  let [clickCnt, setClickCnt] = useState(true);

  const popup = () => {
    setClickCnt(!clickCnt);
  };

  return (
    <H.Header>
      <div>
        <a href="/">KeLog</a>
      </div>

      <H.InfoContainer>
        <H.Btn src={Sun}></H.Btn>
        <H.Btn src={Plus}></H.Btn>

        <Link to="/write">
          <H.Write>글쓰기</H.Write>
        </Link>

        <H.Profile src={Kang}></H.Profile>

        <H.Triangle onClick={popup} className="popup">
          {clickCnt == true ? (
            <H.PopUpContainer>
              <H.PopUpTraingle src={WhiteTraingle}></H.PopUpTraingle>

              <H.PopUpButtonContainer>
                <img src={Write} />
                <h4>나의 글</h4>
              </H.PopUpButtonContainer>

              <H.PopUpButtonContainer>
                <img src={Time} />
                <h4>임시 글</h4>
              </H.PopUpButtonContainer>

              <H.PopUpButtonContainer>
                <img src={Profile} />
                <h4>내 정보</h4>
              </H.PopUpButtonContainer>

              <H.PopUpButtonContainer>
                <img src={Logout} />
                <h4 style={{ marginLeft: "20px" }}>로그아웃</h4>
              </H.PopUpButtonContainer>
            </H.PopUpContainer>
          ) : null}
        </H.Triangle>
      </H.InfoContainer>
    </H.Header>
  );
};

export default Header;
