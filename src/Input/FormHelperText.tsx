import { FormHelperText, formHelperTextClasses } from "@mui/material";
import { Theme } from "../Theme";
import styled from "styled-components";

export const StyledFormHelperText = styled(FormHelperText)`
  &.${formHelperTextClasses.root} {
    color: ${Theme.palette.error01};
  }
`;

export function FormHelperTextError({ children }) {
  return <StyledFormHelperText>{children}</StyledFormHelperText>;
}
