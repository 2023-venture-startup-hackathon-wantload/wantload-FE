import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export default function JackPot() {
  const navigate = useNavigate();

  return (
    <StyledJackPot>
      <JackPotItem
        src="/assets/swiper/swiper1.jpeg"
        onClick={() => navigate("/fortuneResult")}
      />
      <JackPotItem2
        src="/assets/swiper/swiper2.jpeg"
        onClick={() => navigate("/fortuneResult")}
      />
      <JackPotItem
        src="/assets/swiper/swiper3.jpeg"
        onClick={() => navigate("/fortuneResult")}
      />
    </StyledJackPot>
  );
}

const StyledJackPot = styled.div`
  display: flex;
  gap: 7px;
`;

const bounce1 = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(3px);
  }
  50% {
    transform: translateY(3px);
  }
`;

const bounce2 = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-3px);
  }
  50% {
    transform: translateY(-3px);
  }
`;

const JackPotItem = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  animation: ${bounce2} 1.5s ease infinite;
`;

const JackPotItem2 = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 8px;
  animation: ${bounce1} 1.5s ease infinite;
`;
