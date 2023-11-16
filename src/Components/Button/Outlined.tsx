import { ButtonProps, buttonClasses } from "@mui/material/Button";
import styled from "styled-components";
import { ButtonBase } from "./styled";
import { Theme } from "../../Theme";
import React from "react";

export const StyledOutLinedButton = styled(ButtonBase)`
  &.${buttonClasses.root} {
    border: 2px solid #4894ff;

    &:hover {
      border: 2px solid #4894ff;
    }

    &:hover,
    &:focus,
    &:active {
      color: ${Theme.palette.blue03};
    }
  }
`;

export const OutlinedButton: React.FC<ButtonProps> = ({
  disabled,
  ...rest
}) => (
  <StyledOutLinedButton
    variant="outlined"
    disabled={disabled}
    disableElevation
    {...rest}
  />
);
