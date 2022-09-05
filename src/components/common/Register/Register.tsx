import React from "react";
import * as R from "./Register.style";
import StarImg from "../../../assets/image/LoginAndRegister/LeeOneStar.png";

const Register = () => {
  return (
    <R.Register>
      <R.Img src={StarImg}></R.Img>

      <R.RegisterContainer>
        <h2>Kelog</h2>

        <h4>user name</h4>
        <R.Input type="id" />

        <h4>email</h4>
        <R.MailContainer>
          <input type="email" />
          <button>인증</button>
        </R.MailContainer>

        <h4>password</h4>
        <R.Input type="password" />

        <h4>password 확인</h4>
        <R.Input type="password" />

        <R.RegisterButton>회원가입</R.RegisterButton>
        <a href="/login">로그인하러가기</a>
      </R.RegisterContainer>
    </R.Register>
  );
};

export default Register;
