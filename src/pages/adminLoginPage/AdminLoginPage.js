/**
 * 관리자 로그인 페이지
 * + 관리자 페이지 들어오면 인증 관리 테스트하기
 */
import React, { useState } from "react";
import LoginBox, { InputBox, LoginBtn, Logo } from "./LoginStyles";
import { useNavigate } from "react-router-dom";
import { auth } from "../../components/store";

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const { id, setId, pw, setPw, realId, realPw, loginState } = auth();

  const handleChange = e => {
    if (e.target.name === "id") {
      setId(e.target.value);
    }
    if (e.target.name === "pw") {
      setPw(e.target.value);
    }
  };

  const handleClick = () => {
    if (id === realId && pw === realPw) {
      navigate("/admin/main");
      loginState();
    } else {
      alert("잘못된 접근입니다!");
    }
  };
  return (
    <LoginBox>
      <Logo />
      <InputBox type="id" onchange={handleChange} />
      <InputBox type="pw" onchange={handleChange} />
      <LoginBtn onClick={handleClick}>강남멋사 관리자 로그인</LoginBtn>
    </LoginBox>
  );
};

export default AdminLoginPage;
