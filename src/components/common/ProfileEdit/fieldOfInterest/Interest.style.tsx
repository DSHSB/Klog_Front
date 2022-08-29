import styled from "styled-components";

export const Title = styled.h2`
  font-weight: 400;
  font-size: 35px;
  line-height: 40px;

  margin-bottom: 10px;
  margin-top: 80px;

  color: #000000;
`;

export const CategoriesContainer = styled.div`
  width: 100%;
  height: 170px;

  color: rgba(0, 0, 0, 0.5);

  background: #ffffff;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);

  input {
    width: 100%;
    height: 85px;

    border: none;
    outline: none;

    padding-left: 42px;
    padding-right: 42px;

    font-weight: 400;
    font-size: 35px;
    line-height: 40px;

    color: black;
  }

  .selectedCategoriesContainer {
    display: flex;
    align-items: center;

    height: 85px;

    font-weight: 700;
    font-size: 25px;
    line-height: 29px;

    color: #5077de;

    padding-left: 27px;

    overflow-x: auto;
  }
`;

export const selectedCategoriesBox = styled.div`
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

  cursor: pointer;
`;
