import styled from "styled-components";

export const Profile = styled.div`
  height: 10000px;

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ProfileIntroduceContainer = styled.div`
  width: 85%;

  display: flex;
  justify-content: center;

  width: 100%;

  margin-top: 176px;

  img {
    width: 300px;
    height: 300px;

    border-radius: 100%;
  }

  div {
    margin-left: 60px;
    h2 {
      height: 69px;

      margin-bottom: 0px;

      font-weight: 400;
      font-size: 60px;
      line-height: 69px;
    }

    h4 {
      font-weight: 400;
      font-size: 30px;
      line-height: 34px;

      margin-top: 24px;
    }
  }
`;

export const SearchContainer = styled.div`
  height: 69px;
  width: 80%;
  display: flex;
  align-items: center;

  margin-top: 90px;

  background: #ffffff;
  border: 1px solid #5077de;
  border-radius: 15px;

  input {
    font-weight: 400;
    font-size: 30px;
    line-height: 34px;
    color: #000000;

    height: 100%;
    width: 95%;
    border-radius: 15px;

    border: none;
    outline: none;
  }

  img {
    margin-left: 10px;
    margin-right: 10px;
    width: 45px;
    height: 45px;

    cursor: pointer;
  }
`;

export const PostList = styled.div`
  width: 80%;
  height: auto;

  margin-top: 80px;
`;

export const Write = styled.div`
  font-family: "Arial";
  font-style: normal;

  background-color: beige;
  border-radius: 20px;

  width: 100%;
  height: 900px;

  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 582px;

    overflow: hidden;
  }

  h2 {
    margin-top: 30px;
    margin-bottom: 0px;
    width: 100%;
    overflow-x: hidden;
    font-weight: 700;
    font-size: 50px;
    line-height: 57px;

    color: #000000;
  }

  p {
    margin-top: 15px;
    margin-bottom: 0px;
    width: 100%;
    overflow-x: hidden;
    font-family: "K2D";
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 39px;
    /* identical to box height */

    color: #000000;
  }
`;

export const CategoriesList = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 0px;
  div {
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;

  font-weight: 400;
  font-size: 25px;
  color: black;

  height: 40px;
  margin-top: 30px;
  margin-bottom: 0px;
  img {
    margin-right: 20px;
    margin-left: 50px;
    height: 40px;
    width: 40px;
  }
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
