import Button, { buttonClasses } from "@mui/material/Button";
import styled from "styled-components";
import { Theme } from "../Theme";

export const ButtonBase = styled(Button)`
  &.${buttonClasses.root} {
    font-weight: ${Theme.typography.h2.fontWeight};
    font-size: ${Theme.typography.h2.fontSize}px;
    text-transform: none;
    padding: 16px;
    border-radius: 8px;
    color: ${Theme.palette.white01};

    &:hover {
      background-color: ${Theme.palette.blue03};
    }

    &:active {
      padding: 14px;
      border: 2px solid #4894ff;
      background: ${Theme.palette.blue04};
    }

    &:focus {
      padding: 14px;
      border: 2px solid #4894ff;
      background: ${Theme.palette.blue05};
      box-shadow: ${Theme.shadows[1]};
    }

    &:disabled {
      background: ${Theme.palette.gray01};
      box-shadow: ${Theme.shadows[1]};
    }
  }

  &.${buttonClasses.outlined} {
    color: ${Theme.palette.blue03};
    padding: 14px;

    &:active,
    &:focus {
      padding: 14px;
      border: 2px solid #4894ff;
      background: ${Theme.palette.blue04};
    }

    &.${buttonClasses.sizeSmall} {
      font-size: ${Theme.typography.h3.fontSize}px;
      padding: 8px;

      &:active,
      &:focus {
        padding: 8px;
      }
    }

    &.${buttonClasses.sizeLarge} {
      font-size: ${Theme.typography.h1.fontSize}px;
      padding: 20px;

      &:active,
      &:focus {
        padding: 20px;
      }
    }
  }

  &.${buttonClasses.sizeSmall} {
    font-size: ${Theme.typography.h3.fontSize}px;
    padding: 8px;

    &:active,
    &:focus {
      padding: 6px;
    }
  }

  &.${buttonClasses.sizeLarge} {
    font-size: ${Theme.typography.h1.fontSize}px;
    padding: 20px;

    &:active,
    &:focus {
      padding: 18px;
    }
  }
`;
