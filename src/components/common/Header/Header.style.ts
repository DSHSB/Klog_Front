import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 107px;

  display: flex;
  align-items: center;

  background-color: white;

  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);

  z-index: 99;

  div {
    width: 70%;

    padding-left: 10%;

    @media (max-width: 1440px) {
      width: 65%;
    }

    a {
      font-family: "K2D";
      font-style: normal;
      font-weight: 400;
      font-size: 40px;

      color: #000000;

      text-decoration: none;

      :hover {
        cursor: pointer;
      }
    }
  }
`;

export const InfoContainer = styled.div`
  width: 30%;

  display: flex;
  align-items: center;

  position: relative;

  @media (max-width: 1440px) {
    width: 35%;
  }
`;

export const Btn = styled.img`
  width: 45px;
  height: 45px;

  margin-right: 16px;

  :hover {
    cursor: pointer;
  }
`;

export const Profile = styled.img`
  width: 45px;
  height: 45px;

  margin-left: 24px;

  background: #6c7aa0;

  border-radius: 40px;
`;

export const Write = styled.button`
  width: 133px;
  height: 45px;

  background: #5077de;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 15px;

  border: none;

  font-family: "Arial";
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;

  color: #ffffff;

  :hover {
    cursor: pointer;

    transition: 0.5s;
    background-color: skyblue;
  }
`;

export const Triangle = styled.img`
  width: 18px;
  height: 18px;

  margin-left: 14px;

  /* transform: rotate(-180deg); */

  border: none;

  :hover {
    cursor: pointer;
  }
`;

export const PopUp = styled.div`
  position: absolute;
  /* position: relative; */

  width: 100px;
  height: 100px;
  /* border: 1px solid black; */
  ::after {
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    background: black;
    transform: rotate(45deg);
  }
`;

export const PopUpBtn = styled.button``;
