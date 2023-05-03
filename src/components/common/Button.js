/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const Button = ({ children, backcolor, color,onClick }) => {

  return (
      <>
          <button
              css={css`
                  background-color: ${backcolor};
                  font-family: 'Roboto';
                  font-style: normal;
                  font-weight: 700;
                  color: ${color};
                  border: 0px;
                  width: 85px;
                  height: 35px;
                  padding: 6px 12px;
                  margin-right: 15px;
                  border-radius: 5px;
                  font-size: 15px;
                  &:hover {
                    background-color: black;
                    color : white;
                  }
              `}
              onClick={onClick}
              >
                  {children}
          </button>
      </>
  );
};
