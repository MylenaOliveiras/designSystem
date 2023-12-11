import { Typography, typographyClasses } from "@mui/material";
import styled from "styled-components";
import { Theme } from "../Theme";

export const StyledTypography = styled(Typography)`
  &.${typographyClasses.h1} {
    line-height: normal;
    font-size: 24px;
    padding: 8px 0;
    color: ${Theme.palette.blue02};
  }
`;
