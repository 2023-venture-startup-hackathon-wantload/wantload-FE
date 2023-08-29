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
      fullWidth
      disableElevation
      sx={{
        color: "white",
        height: "60px",
        fontWeight: 600,
        fontSize: "18px",
        backgroundColor: "#FF9900",
        position: "absolute",
        minWidth: "375px",
        maxWidth: "450px",
        bottom: 20,
        ":hover": { backgroundColor: "#FFC266" },
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default EnabledButton;
