import React from "react";
import * as R from "./Register.style";
import StarImg from "../../../assets/image/LoginAndRegister/LeeOneStar.png";

const Register = () => {
  return (
    <R.Register>
      <R.Img src={StarImg}></R.Img>

      <R.RegisterContainer>
        <h3>KeLog</h3>

        <p>User Name</p>
        <R.Input></R.Input>

        <p>eamil</p>
        <R.CertifiedBtn>인증</R.CertifiedBtn>

        <p>passwoard</p>
        <R.Input type="password"></R.Input>

        <p>passwoard 확인</p>
        <R.Input type="password"></R.Input>

        <R.Btn>회원가입</R.Btn>
      </R.RegisterContainer>
    </R.Register>
  );
};

export default Register;
