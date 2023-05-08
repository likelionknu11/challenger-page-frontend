import React, { useRef, useState } from "react";
import {
  FormCaption,
  InputBox,
  InputTitle,
  Section,
  TextAreaBox,
  WordLength,
} from "../../components/userForm/Component";
import Button from "../../components/common/Button";

export const UserFormPage = () => {
  const [projectExplain, setprojectExplain] = useState("");
  const [projectTitle, setprojectTitle] = useState("");
  const [teamTitle, setTeamTitle] = useState("");
  const [teamBoss, setTeamBoss] = useState("");
  const [teamBossNum, setTeamBossNum] = useState("");
  const [gitHubLink, setGitHubLink] = useState("");
  const [inputs, setInputs] = useState([{ id: 1, value: "", num: "" }]);

  const ImgRef = useRef(null);
  const ImgRefName = useRef(null);

  //선택한 이미지 파일 처리
  const handleFileInputChange = (event) => {
    let selectedFile = event.target.files[0];
    if (selectedFile !== undefined) {
      ImgRefName.current.value = selectedFile.name;
    } else return;
  };

  //이미지 업로드 버튼 클릭 함수
  const onClickImgBtn = () => {
    if (ImgRef !== null) ImgRef.current.click();
    else return;
  };

  //팀원 state 설정
  const handleInputChange = (id, value) => {
    const newInputs = inputs.map((input) => {
      if (input.id === id) {
        return { ...input, value };
      }
      return input;
    });
    setInputs(newInputs);
  };

  //팀원 학번 state 설정
  const handleInputNumChange = (id, num) => {
    num = num.replace(/[^0-9]/g, "");
    const newInputs = inputs.map((input) => {
      if (input.id === id) {
        return { ...input, num };
      }
      return input;
    });
    setInputs(newInputs);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "설명":
        setprojectExplain(value);
        break;
      case "프젝명":
        setprojectTitle(value);
        break;
      case "팀명":
        setTeamTitle(value);
        break;
      case "팀장":
        setTeamBoss(value);
        break;
      case "팀장학번":
        const teamBossId = e.target.value.replace(/[^0-9]/g, "");
        setTeamBossNum(teamBossId);
        break;
      case "깃허브":
        setGitHubLink(value);
        break;
      default:
        break;
    }
  };

  //팀원 input의 추가 버튼을 클릭시 배열에 새로운 input 요소 추가
  const handleAddButtonClick = () => {
    if (inputs.length < 10) {
      const newInput = { id: inputs.length + 1, value: "" };
      setInputs([...inputs, newInput]);
    }
  };

  //취소 버튼 누를시 배열의 마지막 input 요소 제거
  const handleCancelButtonClick = () => {
    const newInputs = inputs.filter((input) => input.id !== inputs.length);
    setInputs(newInputs);
  };

  return (
    <Section>
      <FormCaption>
        강남대 멋사에서 개발된 훌륭한 프로젝트를 올려주세요!
      </FormCaption>
      <InputTitle>관리자가 승낙 시 메인 페이지에 개설됩니다. </InputTitle>
      <table>
        <tbody>
          <tr>
            <td>
              <InputTitle>프로젝트 명</InputTitle>
            </td>
            <td>
              <InputBox
                placeholder="프로젝트명을 입력해주세요"
                name="프젝명"
                onChange={handleChange}
                value={projectTitle}
                max={30}
                width="46.99vw"
              />
            </td>
          </tr>
          <tr>
            <td>
              <InputTitle>팀명</InputTitle>
            </td>
            <td>
              <InputBox
                placeholder="팀명을 입력해주세요"
                name="팀명"
                onChange={handleChange}
                value={teamTitle}
                max={30}
                width="46.99vw"
              />
            </td>
          </tr>
          <tr>
            <td>
              <InputTitle>팀장</InputTitle>
            </td>
            <td>
              <InputBox
                placeholder="성함을 적어주세요"
                name="팀장"
                onChange={handleChange}
                value={teamBoss}
                max={10}
                width="23.1vw"
              />
              <InputBox
                placeholder="학번을 적어주세요"
                name="팀장학번"
                onChange={handleChange}
                value={teamBossNum}
                max={9}
                width="23.1vw"
              />
            </td>
          </tr>
          {inputs.map((input) => (
            <tr>
              <td>
                <InputTitle>팀원{input.id}</InputTitle>
              </td>
              <td>
                <div key={input.id}>
                  <InputBox
                    placeholder={`팀원${input.id} 성함`}
                    name={`팀원${input.id}`}
                    value={input.value}
                    onChange={(e) =>
                      handleInputChange(input.id, e.target.value)
                    }
                    max={10}
                    width="23.1vw"
                  />
                  <InputBox
                    placeholder={`팀원${input.id} 학번`}
                    name={`팀원${input.id}학번`}
                    value={input.num}
                    onChange={(e) =>
                      handleInputNumChange(input.id, e.target.value)
                    }
                    max={9}
                    width="23.1vw"
                  />
                </div>
              </td>
              <td>
                {input.id === 1 && (
                  <Button btnColor="gray" onClick={handleAddButtonClick}>
                    추가
                  </Button>
                )}
                {input.id !== 1 && input.id === inputs.length && (
                  <Button btnColor="gray" onClick={handleCancelButtonClick}>
                    삭제
                  </Button>
                )}
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <InputTitle>Github 주소</InputTitle>
            </td>
            <td>
              <InputBox
                placeholder="https 또는 http를 포함하는 링크 전체를 입력해주세요"
                max={200}
                name="깃허브"
                onChange={handleChange}
                value={gitHubLink}
                width="46.99vw"
              />
            </td>
          </tr>
          <tr>
            <td>
              <InputTitle>프로젝트 설명</InputTitle>
            </td>
            <td>
              <TextAreaBox
                placeholder="프로젝트를 설명해주세요! (1000자이내)"
                name="설명"
                onChange={handleChange}
                value={projectExplain}
              />
              <WordLength>{projectExplain.length}</WordLength>
            </td>
          </tr>
          <tr>
            <td>
              <InputTitle>프로젝트 이미지</InputTitle>
            </td>
            <td>
              <InputBox
                type="file"
                accept="image/*"
                ref={ImgRef}
                display="none"
                onChange={handleFileInputChange}
              />
              <InputBox
                type="text"
                placeholder="이미지 파일 업로드"
                readonly={true}
                ref={ImgRefName}
                width="46.99vw"
              />
            </td>
            <td>
              <Button btnColor="gray" onClick={onClickImgBtn}>
                파일 선택
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
      <Button btnColor="blue">확인</Button>
    </Section>
  );
};
