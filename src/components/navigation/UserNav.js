// 사용자 네비게이션바
import React from "react";
import { Logo, Menu, MenuWrapper, Nav } from "./Nav";
import { Link } from "react-router-dom";

const UserNav = () => {
  return (
    <Nav>
      <Link to="/">
        <Logo>로고</Logo>
      </Link>
      <MenuWrapper>
        <Menu>프로젝트등록</Menu>
        <Menu>동아리소개</Menu>
        <Link to="https://knu-likelion.org/" target="_blank">
          <Menu>리크루팅</Menu>
        </Link>
      </MenuWrapper>
    </Nav>
  );
};

export default UserNav;
