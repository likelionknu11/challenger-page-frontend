/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

export const MainTitle = ({ children }) => {
  return (
    <div
      css={css`
          background: #181818;
          margin-left: 10.42vw;
          margin-right: 10.42vw;
          padding-top : 9.46vw;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          font-size : 35px;
          font-weight : bolder;
          font-family: "Roboto";
          color : #222222;
      `}
    >
        {children}
    </div>
  );
};


export const Mainpage = ({ children }) => {
  return (
    <div
      css={css`
        background: #181818;
        margin-left: 13.42vw;
        margin-right: 13.42vw;
        padding-top: 5.91vw;
        margin-bottom: 0px;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start; /* 좌측 정렬로 변경 */
        align-items: center;
      `}
    >

        {children}
    </div>
  );
};
export const MainLink = ({ children,to }) => {
  return (
    <Link
      css={css`
        background: #181818;
        display: inline-block;
        &:visited {
          color: inherit;
      `}
      to = {to}
    >
        {children}
    </Link>
  );
};


   