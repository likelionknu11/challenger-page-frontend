// 관리자 네비게이션바
import React, { useEffect } from "react";
import { Nav, Logo } from "./NavStyle";
import { Link, useNavigate } from "react-router-dom";
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
    <Nav>
      <Link to="/admin/main">
        <Logo>로고</Logo>
      </Link>
    </Nav>
  );
};

export default AdminNav;
