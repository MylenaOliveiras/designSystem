import React from "react";
import { ButtonProps, buttonClasses } from "@mui/material/Button";
import styled from "styled-components";
import { ButtonBase } from "./styled";
import theme from "../../Theme/Theme";

export const StyledContainedButton = styled(ButtonBase)`
  &.${buttonClasses.root} {
    background-color: ${theme.palette.primary.blue02};
  }
`;

export const ContainedButton: React.FC<ButtonProps> = ({
  disabled = false,
  ...rest
}) => (
  <StyledContainedButton
    disabled={disabled}
    variant="contained"
    disableElevation
    {...rest}
  />
);
