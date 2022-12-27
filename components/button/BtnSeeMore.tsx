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

const StyledButton = styled(Button)(({ theme }) => {
  return {
    padding: "16px 24px",
    background: theme.palette.primary.main,
    borderRadius: "90px",
    color: "#FCFCFD",
    fontSize: "16px",
    lineHeight: "16px",
    fontWeight: "700",
    marginTop: "40px",
    position: "relative",
    left: "50%",
    transform: "translate(-50%,0)",
  }
})


