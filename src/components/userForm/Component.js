/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { forwardRef } from "react";

//전체 배치 잡아줌
export const Section = ({ children }) => {
  return (
    <section
      css={css`
        padding-top: 100px;
        padding-bottom: 100px;
        background: #181818;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        @media screen and (max-width: 1000px) {
          padding-left: 10px;
          padding-right: 10px;
        }
      `}
    >
      {children}
    </section>
  );
};

export const FormCaption = ({ children }) => {
  return (
    <div
      css={css`
        font-size: 24px;
        @media screen and (max-width: 1000px) {
          font-size: 20px;
        }
        color: white;
        margin: 0.5em;
      `}
    >
      {children}
    </div>
  );
};

//입력받을 사항의 text
export const InputTitle = ({ children }) => {
  return (
    <p
      css={css`
        display: inline;
        font-family: "Roboto";
        letter-spacing: -0.03em;
        font-size: 16px;
        color: white;
        align-items: center;
        @media screen and (max-width: 1000px) {
          font-size: 16px;
        }
      `}
    >
      {children}
    </p>
  );
};

//input component
export const InputBox = forwardRef(
  (
    {
      placeholder,
      name,
      value,
      onChange,
      max,
      readonly,
      type,
      key,
      accept,
      display,
      width,
    },
    ref
  ) => {
    return (
      <input
        css={css`
          font-family: "Roboto";
          width: ${width};
          background: #262626;
          line-height: 1.5em;

          padding: 0;
          padding-left: 1em;
          padding-bottom: 1em;
          padding-right: 1em;
          padding-top: 1em;
          font-size: 20px;
          font-weight: bold;
          border: 0.2em solid black;
          border-radius: 1em;
          box-sizing: border-box;
          margin-top: 10px;
          margin-bottom: 10px;
          margin-right: 5px;
          margin-left: 5px;
          color: white;
          display: ${display};

          &::placeholder {
            color: white;
            margin-left: 0.4em;
            font-weight: normal;
          }
          &:focus {
            border-color: white;
            outline-color: white;
          }
        `}
        ref={ref}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        maxLength={max}
        readOnly={readonly}
        type={type}
        key={key}
        accept={accept}
      />
    );
  }
);

// textarea를 입력했을 때, 사용자가 몇자를 입력했는지 나타내주는 컴포넌트
export const WordLength = ({ children }) => {
  return (
    <div
      css={css`
        width: 6em;
        position: relative;
        text-align: center;
        font-family: "Pretendard-Medium";
        letter-spacing: -0.03em;

        @media all and (min-width: 768px) and (max-width: 1099px) {
          font-size: 13px;
        }
        @media all and (min-width: 1100px) and (max-width: 2000px) {
          font-size: 13px;
        }
        background-color: #262626;
        color: white;
        margin-left: auto;
        margin-right: 2em;
        margin-top: -3em;
        margin-bottom: 0.5em;

        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <div
        css={css`
          width: 1.69vw;
          background-color: #262626;
          margin-right: 0.7em;
        `}
      >
        {children}
      </div>
      <span
        css={css`
          margin-right: 0.5em;
          background-color: #262626;
        `}
      >
        /
      </span>
      <span
        css={css`
          background-color: #262626;
          @media all and (min-width: 768px) and (max-width: 1099px) {
            font-size: 13px;
          }
          @media all and (min-width: 1100px) and (max-width: 2000px) {
            font-size: 13px;
          }
        `}
      >
        1000
      </span>
    </div>
  );
};

//textarea component
export const TextAreaBox = ({ placeholder, name, onChange, value }) => {
  return (
    <textarea
      css={css`
        font-family: "Roboto";
        width: 46.88vw;
        background: #262626;
        line-height: 1.5em;
        padding: 1em;
        font-size: 20px;
        font-weight: bold;
        border: 0.2em solid black;
        border-radius: 1em;
        box-sizing: border-box;
        margin: 5px;
        margin-bottom: 10px;
        margin-top: 10px;
        resize: none;
        color: white;

        &:focus {
          border-color: white;
          outline-color: white;
        }

        &::placeholder {
          color: white;
          margin-left: 0.4em;
          font-weight: normal;
        }

        /* &::-webkit-scrollbar {
          display: none;
        } */
      `}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
      maxLength={1000}
    />
  );
};
