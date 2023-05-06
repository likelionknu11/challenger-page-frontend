// 관리자 네비게이션바
import React, { useEffect } from "react";
import { AdNav, Logo } from "./NavStyle";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { auth } from "../store";

const AdminNav = () => {
  const navigate = useNavigate();

  const { adminState } = auth();

  useEffect(() => {
    if (adminState === false) {
      navigate("/admin");
    }
  }, [adminState]);

  return (
    <AdNav>
      <Link to="/admin/main">
        <Logo>로고</Logo>
      </Link>
    </AdNav>
  );
};

export default AdminNav;
