import React from "react";
import { Button, styled } from "@mui/material";

type BtnSeeMoreProps = {
  children: React.ReactNode,
  onClick?: () => void,
  disable?: boolean,
  style?: string

};

export default function BtnSeeMore({ children, onClick, disable, style }: BtnSeeMoreProps) {
  return (
    <StyledButton
      style={{ display: style }}
      disabled={disable}
      onClick={onClick}
      disableRipple={true}
      variant="contained"
    >
      {children}
    </StyledButton>
  );
}

const StyledButton = styled(Button)(() => {
  return {
    padding: "16px 24px",
    background: "#00A859 !important",
    borderRadius: "90px",
    color: "#FCFCFD",
    fontSize: "16px",
    lineHeight: "16px",
    fontFamily: "Lato",
    fontWeight: "700",
    marginTop: "40px",
    position: "relative",
    left: "50%",
    transform: "translate(-50%,0)",
  }
})


