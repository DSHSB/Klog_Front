import styled from "styled-components";

export const Profile = styled.div`
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
  width: 100%;
  height: 1080px;

  display: flex;
  flex-direction: column;

  img {
    width: 100%;
    height: 582px;

    overflow: hidden;
  }
`;

export const CategoriesList = styled.div`
  display: flex;

  div {
  }
`;

export const InfoContainer = styled.div``;
