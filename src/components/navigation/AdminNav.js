// 관리자 네비게이션바
import React, { useEffect } from "react";
import { AdNav, Logo } from "./NavStyle";
import { Link } from "react-router-dom";
import { auth } from "../store";

const AdminNav = () => {
  const { isAuth } = auth();
  localStorage.setItem("isAuthStorage", isAuth ? isAuth : undefined);
  console.log(localStorage.getItem("isAuthStorage"));

  useEffect = () => {};

  return (
    <AdNav>
      <Link to="/admin/main">
        <Logo>로고</Logo>
      </Link>
    </AdNav>
  );
};

export default AdminNav;
