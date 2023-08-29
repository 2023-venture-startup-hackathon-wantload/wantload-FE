import React from "react";
import Button from "@mui/material/Button";

const DisabledButton = ({ text }: { text: string }) => {
  return (
    <Button
      variant="contained"
      fullWidth
      disableElevation
      disabled
      sx={{
        color: "white",
        height: "60px",
        fontWeight: 600,
        fontSize: "18px",
        position: "absolute",
        minWidth: "375px",
        maxWidth: "450px",
        bottom: 20,
      }}
    >
      {text}
    </Button>
  );
};

export default DisabledButton;
