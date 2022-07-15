import styled from "styled-components";

export const Main = styled.div`
  width: 100%;
  height: 100vh;

  /* display: flex; */
  /* justify-content: center; */

  background-color: white;
`;

export const ContentContainer = styled.div`
  width: 1107px;
  height: 1492px;

  display: flex;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;

  /* margin: auto; */
  /* margin-top: 70px; */

  margin: 70px auto 0px auto;
`;

export const ContentBox = styled.div`
  width: 320px;
  height: 349px;

  /* margin: auto; */
  margin-bottom: 32px;
  margin-left: 24.5px;
  margin-right: 24.5px;

  background: #ffffff;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 5px;

  h3 {
    margin-left: 19px;

    width: 280px;
    height: 23px;

    font-family: "K2D";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;

    color: #000000;
  }

  p {
    margin-left: 19px;

    width: 280px;
    height: 55px;

    font-family: "K2D";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;

    color: #000000;
  }

  a {
    margin-left: 19px;

    font-family: "K2D";
    font-style: normal;
    font-weight: 400;
    font-size: 8px;
    line-height: 10px;

    color: #000000;
  }
`;

export const ContentImg = styled.img`
  width: 320px;
  height: 159px;

  border-radius: 5px 5px 0px 0px;
`;

export const ImgContainer = styled.div`
  margin-top: 10px;
  margin-left: 19px;

  height: 15px;
  width: 280px;

  display: flex;
  align-items: center;

  p {
    height: 15px;
    margin-left: 5px;

    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 11px;

    color: #000000;
  }

  img {
    width: 15px;
    height: 10px;
  }
`;
