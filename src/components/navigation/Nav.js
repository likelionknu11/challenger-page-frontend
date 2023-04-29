/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

export const Nav = ({ children }) => {
  return (
    <div
      css={css`
        width: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        position: fixed;
        background-color: hsla(0, 0%, 9%, 9);
        z-index: 100;
        backdrop-filter: blur(20px);
        @media (min-width: 766px) and (max-width: 1919px) {
          height: 48px;
          padding: 12px 48px;
          justify-content: space-between;
        }
      `}
    >
      <div
        css={css`
          max-width: 1280px;
          width: 90%;
          display: flex;
          justify-content: space-between;
          background-color: transparent;
          // Chrome,Safari, and Opera에서 박스 정렬 auto
          -webkit-box-pack: justify;
        `}
      >
        {children}
      </div>
    </div>
  );
};

export const AdNav = ({ children }) => {
  return (
    <div
      css={css`
        width: 100%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        background-color: hsla(0, 0%, 9%, 9);
        z-index: 100;
        backdrop-filter: blur(20px);
        @media (min-width: 766px) and (max-width: 1919px) {
          height: 48px;
          padding: 12px 0;
        }
      `}
    >
      <div
        css={css`
          margin: auto;
          background-color: transparent;
        `}
      >
        {children}
      </div>
    </div>
  );
};

export const Logo = ({ children }) => {
  return (
    <div
      css={css`
        border: solid #7f7f7f;
        color: #7f7f7f;
        cursor: pointer;
      `}
    >
      {children}
    </div>
  );
};

export const MenuWrapper = ({ children }) => {
  return (
    <div
      css={css`
        height: 100%;
        -webkit-box-pack: center;
        display: flex;
        align-items: center;
      `}
    >
      {children}
    </div>
  );
};

export const Menu = ({ children }) => {
  return (
    <div
      css={css`
        color: #7f7f7f;
        font-size: 18px;
        font-weight: 500;
        cursor: pointer;
        padding-left: 36px;
        /* line-height: 36px; */
      `}
    >
      {children}
    </div>
  );
};
