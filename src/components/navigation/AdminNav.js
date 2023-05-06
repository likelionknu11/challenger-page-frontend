// 관리자 네비게이션바
import React from "react";
import { AdNav, Logo, Nav } from "./Nav";
import { Link } from "react-router-dom";

const AdminNav = () => {
  return (
    <Nav>
      <Link to="/admin/main">
        <Logo>로고</Logo>
      </Link>
    </Nav>
  );
};

export default AdminNav;
