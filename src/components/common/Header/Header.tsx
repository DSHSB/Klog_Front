import React from "react";
import * as H from "./Header.style";

import Plus from "../../../assets/image/Header/Plus.png";
import Sun from "../../../assets/image/Header/Sun.png";
import Triangle from "../../../assets/image/Header/Triangle.png";

import Kang from "../../../assets/image/Header/Kang.jpeg";

const Header = () => {
  return (
    <H.Header>
      <div>
        <a href="/">KeLog</a>
      </div>

      <H.InfoContainer>
        <H.Btn src={Sun}></H.Btn>
        <H.Btn src={Plus}></H.Btn>

        <H.Write>글쓰기</H.Write>

        <H.Profile src={Kang}></H.Profile>
        {/* <div className="rel">
          <H.Triangle src={Triangle}></H.Triangle>
          <H.PopUp></H.PopUp>
        </div> */}

        <H.Triangle src={Triangle}></H.Triangle>
      </H.InfoContainer>
    </H.Header>
  );
};

export default Header;
