import styled from "styled-components";

export const ProfielEdit = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;

  margin: 70px auto 0px auto;

  .right {
    text-align: right;
  }
`;

export const ImgChangeBox = styled.div`
  width: 100%;

  display: flex;
  justify-content: left;

  img {
    box-sizing: border-box;

    width: 334px;
    height: 334px;

    border: 5px solid #034797;
    border-radius: 200px;
  }

  div {
    position: relative;
    display: flex;
    flex-direction: column;

    justify-content: center;

    margin-left: 50px;

    label {
      width: 281px;
      height: 79px;

      background: #5077de;
      border-radius: 10px;

      font-weight: 400;
      font-size: 40px;
      line-height: 46px;

      color: #ffffff;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    input[type="file"] {
      position: absolute;
      top: 95px;
      left: 0;
      width: 281px;
      height: 79px;
      padding: 0;
      overflow: hidden;
      border: 0;
      opacity: 0;

      cursor: pointer;
    }
  }
`;

export const ChangeBasicImg = styled.button`
  width: 238px;
  height: 34px;

  font-weight: 400;
  font-size: 30px;
  line-height: 34px;
  text-decoration-line: underline;

  margin-top: 30px;

  color: #000000;

  background: none;
  border: none;

  cursor: pointer;
`;

export const TextContainer = styled.div`
  width: 100%;
  height: auto;

  .name,
  .introduce {
    width: 100%;

    font-family: "Arial";
    font-style: normal;
    font-weight: 400;

    background: #ffffff;
    box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);

    border: none;
    border-radius: 6px;

    padding-left: 42px;
    padding-right: 42px;

    color: #000000;

    outline: none;
  }
`;

export const Title = styled.h2`
  font-weight: 400;
  font-size: 35px;
  line-height: 40px;

  margin-bottom: 10px;
  margin-top: 80px;

  color: #000000;
`;

export const UserName = styled.input`
  height: 94px;

  font-size: 35px;
  line-height: 40px;
`;

export const Introduce = styled.textarea`
  height: 327px;

  font-size: 25px;
  line-height: 29px;

  padding-top: 32px;
  resize: none;
`;

export const EditButton = styled.button`
  width: 186px;
  height: 53px;

  background: #5077de;
  border-radius: 10px;

  font-weight: 400;
  font-size: 25px;
  line-height: 29px;

  margin-top: 40px;
  border: none;

  color: #ffffff;

  cursor: pointer;
`;
