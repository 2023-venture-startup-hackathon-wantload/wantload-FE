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
  return isAbled ? (
    <EnabledButton text={text} onClick={onClick} />
  ) : (
    <DisabledButton text={text} />
  );
};

export default NextButton;
