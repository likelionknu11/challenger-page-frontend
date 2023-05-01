/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";

export const Logo = ({ children }) => {
  return (
    <div
      css={css`
        border: solid white;
        color: white;
      `}
    >
      로고
    </div>
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
        font-size: 11px;
        padding: 1px 2px 1px 1em;
        &::placeholder {
          color: white;
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
        padding: 1px 6px;
        font-size: 12px;
        font-weight: 1000;
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
