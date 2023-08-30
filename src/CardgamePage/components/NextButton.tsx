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
    <div style={{ width: "100%", height: "60px", position: "relative" }}>
      {isAbled ? (
        <EnabledButton text={text} onClick={onClick} />
      ) : (
        <DisabledButton text={text} />
      )}
    </div>
  );
};

export default NextButton;
