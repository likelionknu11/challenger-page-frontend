// 관리자 네비게이션바
import React from "react";
import { AdNav, Logo } from "./Nav";
import { Link } from "react-router-dom";

const AdminNav = () => {
  return (
    <AdNav>
      <Link to="/admin/main">
        <Logo>로고</Logo>
      </Link>
    </AdNav>
  );
};

export default AdminNav;
