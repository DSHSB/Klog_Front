import React from "react";
import * as P from "./WriteList.style";

import Kang from "../../../assets/image/Profile/Kang.jpeg";
import Search from "../../../assets/image/Profile/Search.png";
import IMG from "../../../assets/image/LoginAndRegister/LeeOneStar.png";
import LOVE from "../../../assets/image/WriteList/Vector.png";

let writelst = [
  {
    img: "../../../assets/image/LoginAndRegister/LeeOneStar.png",
    title: "강성훈이 이한별을 좋아하는 이유",
    content: "강성훈이 이한별과 함께 하는 행동들을 알아보아요",
    categories: ["frontend", "backend"],
    date: "2021-05-31",
    love: "123",
  },
];

const WriteList = () => {
  const makeList = writelst.map((i, idx) => {
    return (
      <P.Write key={idx}>
        <img src={IMG} />
        <h2>{i.title}</h2>
        <p>{i.content}</p>
        <P.CategoriesList>
          {i.categories.map((i, idx) => {
            return <P.CategoriesBox key={idx}>{i}</P.CategoriesBox>;
          })}
        </P.CategoriesList>
        <P.InfoContainer>
          {i.date} <img src={LOVE} /> {i.love}
        </P.InfoContainer>
      </P.Write>
    );
  });

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
        <input placeholder="검색어를 입력하세요"></input>
      </P.SearchContainer>

      <P.PostList>{makeList}</P.PostList>
    </P.Profile>
  );
};

export default WriteList;
