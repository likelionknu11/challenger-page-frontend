/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import logo from "../../assets/logo.png";

export const Nav = ({ children }) => {
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        background-color: hsla(0, 0%, 9%, 9);
        z-index: 999;
        backdrop-filter: blur(20px);
        column-gap: 30rem;
        padding-top: 1.2rem;
        padding-bottom: 1.2rem;
        @media (min-width: 768px) and (max-width: 2000px) {
          font-size: 18px;
        }
        // 메뉴바 합칠 예정
        @media (max-width: 1099px) {
          display: none;
        }
      `}
    >
      {children}
    </div>
  );
};

export const Logo = () => {
  return (
    <img
      alt="로고"
      src={logo}
      css={css`
        height: auto;
        width: 155px;
        transition: 0.4s all;

        &:hover {
          opacity: 70%;
        }
      `}
    />
  );
};

export const MenuWrapper = ({ children }) => {
  return (
    <div
      css={css`
        height: 100%;
        display: flex;
        column-gap: 2.5em;
        transition: 0.4s all;
      `}
    >
      {children}
    </div>
  );
};

export const Menu = ({ onClick, children }) => {
  return (
    <div
      css={css`
        color: #7f7f7f;
        font-size: 0.875em;
        font-weight: 500;
        letter-spacing: -0.03em;
        cursor: pointer;
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
};
