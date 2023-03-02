import styled from "styled-components";

export const PostContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: "Arial";
  font-style: normal;
`;

export const Post = styled.div`
  width: 80%;

  h1 {
    margin: 130px 0px 0px 0px;
    font-weight: 700;
    font-size: 80px;
    line-height: 92px;
    color: #000000;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const CategoriesContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-top: 50px;
`;

export const CategoriesBox = styled.div`
  display: flex;
  flex-direction: row;

  /* width: 155px; */
  /* width: calc(auto + 20px); */
  min-width: 155px;
  height: 57px;

  background: #dfdfdf;
  border-radius: 15px;

  justify-content: center;
  align-items: center;

  margin-right: 20px;

  font-weight: 700;
  font-size: 25px;
  line-height: 29px;

  color: #5077de;

  /* cursor: pointer; */
`;

export const LoveContainer = styled.div`
  margin-top: 50px;
  display: flex;

  font-weight: 400;
  font-size: 30px;

  color: #000000;

  img {
    height: 40px;
    width: 40px;
    margin-right: 20px;
  }
`;

export const MarkdownContainer = styled.div`
  margin-top: 70px;
`;

export const WriterInfo = styled.div`
  width: auto;
  /* height: 315px; */
  margin-top: 100px;
  margin-bottom: 30px;

  display: flex;
  flex-direction: column;

  div {
    display: flex;
    /* align-items: center; */

    img {
      height: 165px;
      width: 165px;
      border-radius: 100%;
    }

    div {
      display: flex;
      justify-content: center;
      flex-direction: column;

      margin-left: 20px;
      h3 {
        margin: 0;
      }

      p {
      }
    }
  }

  hr {
  }
`;

export const ConnectIconContaier = styled.div`
  display: flex;
  margin-top: 10px;
  img {
    width: 50px;
    height: 50px;
  }

  img[id="gitIcon"] {
    cursor: pointer;
  }
`;
