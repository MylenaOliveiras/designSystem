import { ButtonProps, buttonClasses } from "@mui/material/Button";
import styled from "styled-components";
import { ButtonBase } from "./styled";
import theme from "../../Theme/Theme";

export const StyledOutLinedButton = styled(ButtonBase)`
  &.${buttonClasses.root} {
    padding: 14px;
    border: 2px solid #4894ff;

    &:hover {
      border: 2px solid #4894ff;
    }

    &:hover,
    &:focus,
    &:active {
      color: ${theme.palette.};
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
