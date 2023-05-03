/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import React, { useState } from 'react';
import Modal from '../Modal/Modal';


export const ThumPage = ({ children }) => {
  return (
    <div
      css={css`
        margin: 0px;
        padding: 0px;
        background-color: hsla(0, 0%, 9%, 9);
        color: aliceblue;
        height: 1000px;
      `}
    >
      <div
        css={css`
            padding-top: 100px;
            margin-left: 400px;
            margin-right: 400px;
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
        margin: 0px;
        font-weight: 700;
        font-size: 40px;
        line-height: 28px;
        margin-bottom: 50px;
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
        font-size: 20px;
        line-height: 28px;
        margin-bottom: 10px;
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
        margin-top: 20px;
        height: 500px;
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
            padding: 180px;
            font-size: 40px;
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
            margin: 30px;
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
              onClick={openModal}
              >
                  {children}
          </button>
          <Modal open={modalOpen} close={closeModal} header="Modal heading" />
      </>
  );
};