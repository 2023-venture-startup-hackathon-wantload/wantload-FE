import React from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../../assets/icon/icon_logo.svg";

interface CardProps {
  img: string;
  isFlipped: boolean;
  onClick: () => void;
}

const Card = ({ img, isFlipped, onClick }: CardProps) => {
  return (
    <FlipCard>
      <div className={`card ${isFlipped ? "active" : ""}`} onClick={onClick}>
        <div className="front">
          <img src={img} alt="카드 앞면" />
        </div>
        <div className="back">
          <Logo />
        </div>
      </div>
    </FlipCard>
  );
};

const FlipCard = styled.div`
  width: 70px;
  height: 92px;
  border-radius: 8px;
  position: relative;
  perspective: 1100px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  & .card {
    width: 100%;
    height: 100%;
    position: relative;
    transition: all 0.4s;
    transform-style: preserve-3d;
    transform: rotateY(180deg);

    &.active {
      transform: rotateY(0deg);
    }

    & .front,
    & .back {
      position: absolute;
      width: 100%;
      height: 100%;
      backface-visibility: hidden;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #ffffff;
      border-radius: 8px;

      & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
      }
    }

    & .front {
      /* background-color: black; */
    }

    & .back {
      background-color: rgba(255, 153, 0, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      transform: rotateY(180deg);
    }
  }
`;

export default Card;
