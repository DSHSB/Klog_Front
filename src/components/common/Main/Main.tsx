import React from "react";
import * as M from "./Main.style";

import Kang from "../../../assets/image/Main/Fuck.jpeg";
import See from "../../../assets/image/Main/See.png";
import Heart from "../../../assets/image/Main/Heart.png";

const MakeContent = () => {};

const Content = () => {
  return (
    <M.ContentBox>
      <M.ContentImg src={Kang} />
      <h3>
        강성훈이 욕을 하는이유
        {/* asfsdfsadfsakjdfhaksjfhsakdjfhaskjdfhkaljfhadsjhfskajdfhakljdshflskajdfh */}
      </h3>
      <p>강성훈을 놀리기위한 방법 10가지를 알아보아요!</p>

      <a>2022-07-15</a>

      <M.ImgContainer>
        <img src={Heart} />
        <p>3245</p>

        <img src={See} />
        <p>123</p>
      </M.ImgContainer>
    </M.ContentBox>
  );
};

const Main = () => {
  return (
    <M.Main>
      <M.ContentContainer>
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
        <Content />
      </M.ContentContainer>
    </M.Main>
  );
};

export default Main;
