import styled from "styled-components";

export const Profile = styled.div`
  width: 100%;
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

  display: flex;

  background: #ffffff;
  border: 1px solid #5077de;
  border-radius: 15px;

  input {
    height: 69px;
  }

  img {
  }
`;
