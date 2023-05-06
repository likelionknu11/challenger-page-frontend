/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import logo from "../../assets/logo.png";

export const Logo = () => {
  return (
    <img
      alt="로고"
      src={logo}
      css={css`
        width: 16em;
        margin-bottom: 1em;
        @media (min-width: 1100px) and (max-width: 2000px) {
          font-size: 18px;
        }
      `}
    />
  );
};

export const InputBox = prop => {
  const typeStyles = {
    id: {
      name: "id",
      type: "text",
      placeholder: "아이디를 입력해주세요",
    },
    pw: {
      name: "pw",
      type: "password",
      placeholder: "비밀번호를 입력해주세요",
    },
  };

  const typeData = prop.type === "id" ? typeStyles.id : typeStyles.pw;

  return (
    <input
      onChange={prop.onchange}
      name={typeData.name}
      type={typeData.type}
      placeholder={typeData.placeholder}
      css={css`
        width: 27em;
        height: 3.8em;
        border-radius: 0.53em;
        border: 0.0714em solid white;
        letter-spacing: -0.03em;
        transition: all 0.4s ease 0s;
        outline-color: #7f7f7f;
        color: white;
        font-size: 0.688rem;
        padding: 0.063rem 0.125rem 0.063rem 1em;
        &::placeholder {
          color: white;
        }
        @media (min-width: 1100px) and (max-width: 2000px) {
          font-size: 14px;
        }
      `}
    />
  );
};

export const LoginBtn = prop => {
  return (
    <button
      onClick={prop.onClick}
      css={css`
        width: 26.3em;
        height: 4em;
        border-radius: 0.53em;
        border: none;
        letter-spacing: -0.03em;
        padding-left: 1em;
        color: white;
        transition: all 0.5s ease 0s;
        cursor: pointer;
        background-color: #7f7f7f;
        display: inline-block;
        text-align: center;
        padding: 0.063rem 0.375rem;
        font-size: 0.75rem;
        font-weight: 1000;
        @media (min-width: 1100px) and (max-width: 2000px) {
          font-size: 15px;
        }
      `}
    >
      {prop.children}
    </button>
  );
};

const LoginBox = ({ children }) => {
  return (
    <div
      css={css`
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        display: flex;
        flex-direction: column;
        -webkit-box-align: center;
        align-items: center;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: column;
          row-gap: 1em;
          -webkit-box-align: center;
          align-items: center;
        `}
      >
        {children}
      </div>
    </div>
  );
};

export default LoginBox;
