import Button, { buttonClasses } from "@mui/material/Button";
import styled from "styled-components";
import theme from "../../Theme/Theme";

export const ButtonBase = styled(Button)`
  &.${buttonClasses.root} {
    font-family: "Montserrat", sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    text-transform: none;
    padding: 16px;
    border-radius: 8px;
    color: ${theme.palette.primary["white01"]};

    &:hover {
      background-color: ${theme.palette.primary.blue03};
    }

    &:active {
      border: 2px solid #4894ff;
      background: ${theme.palette.primary.blue04};
    }

    &:focus {
      border: 2px solid #4894ff;
      padding: 14px;
      background: ${theme.palette.primary.blue05};
      box-shadow: ${theme.boxShadow.shadow01};
    }

    &:disabled {
      background: ${theme.palette.primary.gray01};
      box-shadow: ${theme.boxShadow.shadow01};
    }
  }

  &.${buttonClasses.sizeSmall} {
    font-size: 12px;
    line-height: 24px;
    padding: 8px;
  }

  &.${buttonClasses.sizeLarge} {
    font-size: 18px;
    line-height: 24px;
    padding: 20px;
  }

  &.${buttonClasses.outlined} {
    color: ${theme.palette.primary.blue03};
  }
`;
