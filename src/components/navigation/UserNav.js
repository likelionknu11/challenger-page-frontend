// 사용자 네비게이션바
import React, { useState } from "react";
import { Logo, Menu, MenuWrapper, Nav } from "./NavStyle";
import { Link } from "react-router-dom";
import NoticeModal from "../common/Modal/NoticeModal";
const UserNav = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <>
      <Nav>
        <Link to="/">
          <Logo>로고</Logo>
        </Link>
        <MenuWrapper>
          <Link to="/userForm">
            <Menu>프로젝트등록</Menu>
          </Link>
          <Menu onClick={openModal}>동아리소개</Menu>
          {/* <Link to="https://knu-likelion.org/" target="_blank"> */}
          <Menu onClick={openModal}>리크루팅</Menu>
          {/* </Link> */}
        </MenuWrapper>
      </Nav>
      <NoticeModal modalState={modalOpen} close={closeModal} />
    </>
  );
};

export default UserNav;
