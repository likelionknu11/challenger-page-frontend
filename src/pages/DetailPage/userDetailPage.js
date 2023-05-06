import React from 'react';
import Button from "../../components/common/Button";
import { ThumPage, ThumTitle,ThumText,ThumImg,ThumP,ThumSpan,ThumFoot,MadalButton } from '../../components/DetailPage/DetailPageCss';
import { Link ,useParams} from 'react-router-dom';
import Admin from '../MainPage/AdminMainPage'
const UserDetailpage = ({project}) => {
  const { id } = useParams();
  const any = () => {
    console.log('함수 만들면 대체할 공간')
  }

  return (
    <ThumPage>
      <ThumTitle>{project.ProjectTitle}</ThumTitle>
        <ThumText>팀명 : {project.TeamTitle}</ThumText>
        <ThumText>팀원 : {project.TeamMember}</ThumText>
        <ThumText>Git 주소 : {project.Git}</ThumText>
      <ThumImg>

          <ThumP><ThumSpan>썸</ThumSpan>
          <ThumSpan>네</ThumSpan> <ThumSpan>일</ThumSpan></ThumP>

      </ThumImg>

      <ThumText>프로젝트 설명</ThumText>
      <ThumText>{project.TeamIntro}</ThumText>
      <ThumFoot>
        <Link to="/">
            <Button btnColor="gray" onClick={any}>뒤로가기</Button>
        </Link>
            <Button btnColor="blue" onClick={any}>승인</Button>
          <MadalButton backcolor='#4F85EB' color ='white'>거절</MadalButton>
      </ThumFoot>
    </ThumPage>

  );
};
export default UserDetailpage