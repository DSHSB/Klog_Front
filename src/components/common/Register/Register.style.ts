import styled from "styled-components";

export const Register = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;

  background-color: white;
`;

export const Img = styled.img`
  height: 100%;
  width: 720px;
`;

export const RegisterContainer = styled.form`
  width: 720px;

  h2 {
    font-weight: 700;
    font-size: 40px;
    line-height: 46px;

    margin-top: 52px;
  }

  h4 {
    font-weight: 400;
    font-size: 30px;
    line-height: 34px;

    margin-top: 26px;
    margin-bottom: 19px;
  }

  a {
    width: 104px;
    height: 18px;

    display: flex;

    margin-left: 455px;
    margin-top: 10px;

    font-size: 16px;
    line-height: 18px;

    color: #0c38d5;

    text-decoration: none;

    cursor: pointer;

    :hover {
      color: skyblue;
      transition: 0.5s;
    }
  }
`;

export const Input = styled.input`
  width: 552px;
  height: 69px;

  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  border: none;
  outline: none;

  font-size: 35px;

  padding-left: 20px;
`;

export const MailContainer = styled.div`
  width: 554px;
  height: 69px;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;

  input {
    width: 438px;
    height: 69px;

    font-size: 35px;

    padding-left: 20px;

    border-radius: 10px;

    border: none;
    outline: none;
  }

  button {
    width: 116px;
    height: 52px;

    background-color: #379fff;
    border-radius: 15px;
    border: none;

    color: white;

    margin-right: 10px;
    margin-left: 10px;

    font-weight: 400;
    font-size: 20px;
    line-height: 23px;

    cursor: pointer;
    :hover {
      background-color: skyblue;
      transition: 0.5s;
    }
  }
`;

export const RegisterButton = styled.button`
  width: 554px;
  height: 69px;

  background: #5077de;
  box-shadow: 4px 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  border: none;

  margin-top: 75px;

  font-weight: 400;
  font-size: 25px;
  line-height: 29px;

  color: white;

  cursor: pointer;
  :hover {
    background-color: skyblue;
    transition: 0.5s;
  }
`;
