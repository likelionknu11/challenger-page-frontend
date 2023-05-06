/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import React, { useState } from 'react';
import Modal from '../common/Modal/Modal';


export const ThumPage = ({ children }) => {
  return (
    <div
      css={css`
        margin: 0.00vw;
        padding: 0.00vw;
        background-color: hsla(0, 0%, 9%, 9);
        color: aliceblue;
        height: 69.44vw;
      `}
    >
      <div
        css={css`
          padding-top: 6.94vw;
          margin-left: 20.83vw;
          margin-right: 20.83vw;
        `}
      >
        {children}
      </div>
    </div>
  );
};


export const ThumTitle = ({ children }) => {
  return (
    <div
      css={css`
        margin: 0.00vw;
        font-weight: 700;
        font-size: 2.78vw;
        line-height: 1.94vw;
        margin-bottom: 3.47vw;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: bold;
      `}
    >
        {children}
    </div>
  );
};

export const ThumText = ({ children }) => {
  return (
    <div
      css={css`
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 1.39vw;
        line-height: 1.94vw;
        margin-bottom: 0.69vw;
        display: flex;
        color: #FFFFFF;
      `}
    >
      {children}
    </div>
  );
};

export const ThumImg = ({ children }) => {
  return (
    <div
      css={css`
        background-color: #BDBDBD;
        margin-top: 1.39vw;
        height: 34.72vw;
        text-align: center;
      `}
    >
    {children}
    </div>
  );
};

export const ThumP = ({ children }) => {
  return (
        <p
        css={css`
            display: inline-block;
            padding: 12.50vw;
            font-size: 2.78vw;
            background-color: #BDBDBD;
        `}
        >
        {children}
    </p>
  );
};
export const ThumSpan = ({ children }) => {
    return (
          <span
          css={css`
            color: gray;
            margin: 2.08vw;
            background-color: #BDBDBD;
          `}
          >
          {children}
      </span>
    );
  };
  export const ThumFoot = ({ children }) => {
    return (
          <div
          css={css`
            text-align: center;
            display: flex;
            justify-content: center;
            flex-direction: row;
            margin: 2.08vw;
          `}
          >
            {children}
      </div>
    );
  };

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
                  border: 0.00vw;
                  width: 5.90vw;
                  height: 2.43vw;
                  padding: 0.42vw 0.83vw;
                  margin-right: 1.04vw;
                  border-radius: 0.35vw;
                  font-size: 1.04vw;
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
  export const MadalButton = ({ children, backcolor, color }) => {
    // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
      setModalOpen(true);
  };
  const closeModal = () => {
      setModalOpen(false);
  };
  return (
      <>
          <button
              css={css`
              background-color: ${backcolor};
              color: ${color};
              width: 5em;
              height: 2.5em;
              font-style: normal;
              font-weight: 700;
              font-size: 1.25em;
              text-align: center;
              border-radius: 0.69vw;
              &:hover {
                background-color: black;
                color : white;
              }
              `}
              onClick={openModal}
              >
                  {children}
          </button>
          <Modal open={modalOpen} close={closeModal} header="Modal heading" />
      </>
  );
};