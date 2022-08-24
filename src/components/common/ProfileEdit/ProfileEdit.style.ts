import styled from "styled-components";

export const ProfielEdit = styled.div`
  width: 80%;

  display: flex;
  flex-direction: column;

  margin: 70px auto 0px auto;
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
    display: flex;
    flex-direction: column;

    justify-content: center;

    margin-left: 50px;

    label {
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

      display: flex;
      align-items: center;
      justify-content: center;
    }

    input[type="file"] {
      display: none;
    }
  }
`;

export const ChangeBasicImg = styled.button`
  width: 238px;
  height: 34px;

  font-family: "Arial";
  font-style: normal;
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
  height: 500px;

  input,
  textarea {
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
  font-family: "Arial";
  font-style: normal;
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

export const CategoriesContainer = styled.div`
  width: 100%;
  height: 85px;

  font-family: "Arial";
  font-style: normal;

  color: rgba(0, 0, 0, 0.5);

  input {
    font-weight: 400;
    font-size: 35px;
    line-height: 40px;

    padding-top: 27px;

    color: black;
  }

  #selectedCategoriesContainer {
    background-color: black;

    font-weight: 700;
    font-size: 25px;
    line-height: 29px;

    color: #5077de;
  }
`;

export const selectedCategories = styled.div``;

export const EditButton = styled.button``;
