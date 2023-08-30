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
        height: "100%",
        fontWeight: 600,
        fontSize: "18px",
        backgroundColor: "#FF9900",
        width: "100%",
        padding: 0,
      }}
    >
      {text}
    </Button>
  );
};

export default DisabledButton;
