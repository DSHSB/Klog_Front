import React from "react";
import * as L from "./Login.style";
import StarImg from "../../../assets/image/LoginAndRegister/LeeOneStar.png";

const Login = () => {
  return (
    <L.Login>
      <L.Img src={StarImg}></L.Img>

      <L.LoginContainer>
        <h3>KeLog</h3>

        <p>email</p>
        <L.Input type="email"></L.Input>

        <p style={{ marginTop: "50px" }}>passwoard</p>
        <L.Input type="password"></L.Input>

        <div className="register">
          <a href="/register">회원가입하기</a>
        </div>

        <L.Btn>로그인</L.Btn>
      </L.LoginContainer>
    </L.Login>
  );
};

export default Login;
