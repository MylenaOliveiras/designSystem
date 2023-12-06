import React from "react";
import { ButtonProps, buttonClasses } from "@mui/material/Button";
import styled from "styled-components";
import { ButtonBase } from "./styled";
import { Theme } from "../Theme";

export const StyledContainedButton = styled(ButtonBase)`
  &.${buttonClasses.root} {
    background-color: ${Theme.palette.blue02};
  }
`;

const ContainedButton: React.FC<ButtonProps> = ({
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

export default ContainedButton;
