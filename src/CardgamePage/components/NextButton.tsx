import React from "react";
import DisabledButton from "./DisabledButton";
import EnabledButton from "./EnabledButton";

const NextButton = ({
  isAbled,
  text,
  onClick,
}: {
  isAbled: boolean;
  text: string;
  onClick: () => void;
}) => {
  return (
    <div
      style={{
        width: "auto",
        height: "60px",
        position: "absolute",
        bottom: "20px",
        left: 20,
        right: 20,
      }}
    >
      {isAbled ? (
        <EnabledButton text={text} onClick={onClick} />
      ) : (
        <DisabledButton text={text} />
      )}
    </div>
  );
};

export default NextButton;
