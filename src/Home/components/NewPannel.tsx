import styled from "styled-components";

export default function NewPannel() {
  return (
    <StyledNewPannel>
      <img
        src="/assets/icons/waiting.svg"
        style={{ width: "20px", marginBottom: "20px" }}
      />
      <Comment>아직 서비스 준비 중입니다.</Comment>
    </StyledNewPannel>
  );
}

const StyledNewPannel = styled.div`
  min-width: 375px;
  max-width: 450px;
  height: 714px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Comment = styled.div`
  color: #000;
  font-family: Noto Sans;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: 0.018px;
`;
