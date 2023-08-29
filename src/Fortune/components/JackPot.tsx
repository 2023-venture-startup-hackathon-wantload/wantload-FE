import styled, { keyframes } from "styled-components";
import Heart from "../../assets/icon/icon_love.svg";
import Money from "../../assets/icon/icon_money.svg";
import Thumbs from "../../assets/icon/icon_thumbs_up.svg";
import { FortuneProductData, FORTUNE_TYPE } from "../../data/type";

export const JackPot = ({
  setClick,
}: {
  fortune: FortuneProductData[];
  setClick: (fortune: FORTUNE_TYPE) => void;
}) => {
  const handleJackPotItemClick = (type: FORTUNE_TYPE) => {
    setClick(type);
  };

  return (
    <StyledJackPot>
      <JackPotItem onClick={() => handleJackPotItemClick("LOVE")}>
        <img src={Heart} />
        <div className="text">애정운</div>
      </JackPotItem>
      <JackPotItem2 onClick={() => handleJackPotItemClick("MONEY")}>
        <img src={Money} />
        <div className="text">금전운</div>
      </JackPotItem2>
      <JackPotItem onClick={() => handleJackPotItemClick("SUCCESS")}>
        <img src={Thumbs} />
        <div className="text">성공운</div>
      </JackPotItem>
    </StyledJackPot>
  );
};

const StyledJackPot = styled.div`
  display: flex;
  gap: 15px;
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

const JackPotItem = styled.div`
  width: 90px;
  height: 118px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f2f4f6;
  animation: ${bounce2} 1.5s ease infinite;

  & .text {
    margin-top: 8px;
    font-size: 15px;
    font-weight: 600;
    color: #ff9900;
  }
`;

const JackPotItem2 = styled.div`
  width: 90px;
  height: 118px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f2f4f6;
  border-radius: 8px;
  animation: ${bounce1} 1.5s ease infinite;

  & .text {
    margin-top: 8px;
    font-size: 15px;
    font-weight: 600;
    color: #ff9900;
  }
`;

export default JackPot;
