import React, { useState } from 'react';
import { Button } from '../../components/common/Button';
import { ThumPage, ThumTitle,ThumText,ThumImg,ThumP,ThumSpan,ThumFoot,MadalButton } from '../../components/DetailPage/DetailPageCss';

const Testpage = () => {

  const any = () => {
    alert('함수 만들면 대체할 공간')
  }

  return (
    <ThumPage>
      <ThumTitle>새내기 미션북</ThumTitle>
        <ThumText>팀명 : 동물농장</ThumText>
        <ThumText>팀원 : 송조은,천승현,최지은</ThumText>
        <ThumText>Git 주소 : https://github.com/likelionknu</ThumText>
      <ThumImg>
        
          <ThumP><ThumSpan>썸</ThumSpan>
          <ThumSpan>네</ThumSpan> <ThumSpan>일</ThumSpan></ThumP>

      </ThumImg>

      <ThumText>프로젝트 설명</ThumText>
      <ThumFoot>
          <Button backcolor='#D9D9D9' color ='#2B2B2B' onClick={any}>뒤로가기</Button>
      </ThumFoot>
    </ThumPage>
    
  );
};
export default Testpage