import styled from "styled-components";

export const ProfielEdit = styled.div`
  width: 100%;
`;

export const ImgChangeBox = styled.div`
  width: 100%;

  display: flex;

  img {
    box-sizing: border-box;

    width: 334px;
    height: 334px;

    border: 5px solid #034797;
    border-radius: 200px;
  }

  div {
    align-items: center;
    button {
      width: 281px;
      height: 79px;

      background: #5077de;
      border-radius: 10px;

      font-family: "Arial";
      font-style: normal;
      font-weight: 400;
      font-size: 40px;
      line-height: 46px;

      color: #ffffff;

      border: none;

      cursor: pointer;
    }

    p {
      width: 238px;
      height: 34px;

      font-family: "Arial";
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      line-height: 34px;
      text-decoration-line: underline;

      color: #000000;
    }
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 500px;

  h2 {
    font-family: "Arial";
    font-style: normal;
    font-weight: 400;
    font-size: 35px;
    line-height: 40px;

    margin-bottom: 10px;

    color: #000000;
  }
`;

export const Input = styled.input`
  width: 1042px;
  height: 94px;

  background: #ffffff;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);

  border: none;
`;

export const Edit = styled.button``;
