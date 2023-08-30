import React from "react";
import Button from "@mui/material/Button";

const EnabledButton = ({
  text,
  onClick,
}: {
  text: string;
  onClick: () => void;
}) => {
  return (
    <Button
      variant="contained"
      disableElevation
      sx={{
        color: "white",
        height: "100%",
        fontWeight: 600,
        fontSize: "18px",
        backgroundColor: "#FF9900",
        width: "100%",
        padding: 0,
        ":hover": { backgroundColor: "#FFC266" },
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default EnabledButton;
