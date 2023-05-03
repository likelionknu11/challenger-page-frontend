/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export default function Button({ btnColor, children, onClick }) {
  const color = { blue: "#ffffff", gray: "#2B2B2B" };
  const backColor = { blue: "#4F85EB", gray: "D9D9D9" };
  const btn = css`
    width: 5em;
    height: 2.5em;
    color: ${color[btnColor]};
    background-color: ${backColor[btnColor]};
    font-family: "Noto Sans";
    font-style: normal;
    font-weight: 700;
    font-size: 1.25em;
    text-align: center;
  `;
  return (
    <div>
      <button css={btn} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}
