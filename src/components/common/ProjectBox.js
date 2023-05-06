/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { AiFillGithub } from "react-icons/ai";

const container = css`
  @media (min-width: 360px) and (max-width: 1919px) {
    width: 296px;
    height: 360px;
  }
  width: 328px;
  height: 402px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #353535;
  border-radius: 10px;
  cursor: pointer;
  box-sizing: border-box;
  margin:10px;
  margin-left: auto;
  
`;

const subContainer1 = css`
  @media (min-width: 360px) and (max-width: 1919px) {
    width: 280px;
    height: 130px;
    padding-bottom: 5px;
  }
  width: 316px;
  height: 176px;
  margin: 5px;
  padding-bottom: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d9;
  border-radius: 5px;
  overflow: hidden;
  font-size: 100%;
`;

const pic = css`
  box-sizing: border-box;
  display: inline-block;
  overflow: hidden;
  width: initial;
  height: initial;
  background: none;
  opacity: 1;
  border: 0px;
  margin: 0px;
  padding: 0px;
  position: relative;
  max-width: 100%;
  font-size: 100%;
  vertical-align: baseline;
`;

const subContainer2 = css`
  width: 90%;
  height: 268px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  font-size: 0;
  vertical-align: baseline;
`;

const tags = css`
  display: flex;
  justify-content: flex-start;
  margin: 13px 0 0 22px;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
`;

const tag = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 20px;
  padding: 10px;
  font-family: "Noto Sans";
  font-weight: 400;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 10px;
  color: #ffffff;
  margin-right: 8px;
`;

const content = css`
  @media (min-width: 360px) and (max-width: 1919px) {
    width: 252px;
    height: 48px;
  }
  width: 285px;
  height: 52px;
  margin: 0 0 0 22px;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
  align-items: left;
  text-align: left;
`;

const title = css`
  @media (min-width: 360px) and (max-width: 1919px) {
    font-size: 16px;
    font-weight: 700;
  }
  font-family: "Noto Sans";
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
  padding: 0;
  border: 0;
  vertical-align: baseline;
`;

const subTitle = css`
  @media (min-width: 360px) and (max-width: 1919px) {
    font-size: 14px;
  }
  font-family: "Noto Sans";
  font-weight: 400px;
  font-size: 14px;
  line-height: 28px;
  color: #ffffff;
  margin: 11px 0 18px 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
`;

const icons = css`
  display: flex;
  flex-direction: row;
  height: 50px;
  margin: 0 0 8px 22px;
  padding: 0;
  border: 0;
  font-size: 100%;
  vertical-align: baseline;
`;

const icon = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background: #d9d9d9;
  border-radius: 5px;
  margin-right: 10px;
`;

const github = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background: #d9d9d9;
  border-radius: 5px;
  
  margin-right: 10px;
  text-align: center;
  text-decoration: none;
`;

const image = css`
  height: 100%;
  width: 100%;
  text-align: center;
  object-fit: cover;
`;

export default function ProjectBox(prop) {
  return (
    <div css={container} onClick={prop.onClick}>
      <div css={subContainer1}>
        <div css={pic}>
          {/* <img src="{project.image}" css={image} alt="썸네일" /> */}
        </div>
      </div>
      <div css={subContainer2}>
        <div css={tags}>
          {/* api 나오면 바꿈 */}
          <div css={tag}>웹{/*{project.tag}*/}</div>
          <div css={tag}>앱</div>
        </div>
        <div css={content}>
        <h5 css={title}>{prop.title}</h5>
          <p css={subTitle}>{prop.explain}</p>
        </div>
        <div css={icons}>
          <div css={icon}>
            <Link to ={prop.Git}>
            <AiFillGithub css={github} />
            </Link>
          </div>
          <div css={icon}>아이콘</div>
        </div>
      </div>
    </div>
    /*</Link>*/
  );
}
