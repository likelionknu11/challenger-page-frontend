import React from 'react';
import Button from "../../components/common/Button";
import { ThumPage, ThumTitle,ThumText,ThumImg,ThumP,ThumSpan,ThumFoot } from '../../components/DetailPage/DetailPageCss';
import { Link ,useParams} from 'react-router-dom';
const AdminDetailPage = ({project}) => {
  const { id } = useParams();
  const any = () => {
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
        <Link to="/admin">
              <Button btnColor="gray" onClick={any}>뒤로가기</Button>
          </Link>
      </ThumFoot>
    </ThumPage>

  );
};
export default AdminDetailPage