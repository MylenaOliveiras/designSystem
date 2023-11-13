import { CheckboxProps, Checkbox as UnStyledCheckbox } from "@mui/material";
import theme from "../../Theme/Theme";

export default function Checkbox({ disabled }: CheckboxProps) {
  return (
    <UnStyledCheckbox
      sx={{
        color: `${theme.palette.primary.gray02}`,

        "&.Mui-checked": {
          color: `${theme.palette.primary.blue02}`,
        },
        "&.Mui-disabled": {
          color: `${theme.palette.primary.gray01}`,
        },
      }}
      disabled={disabled}
    />
  );
}
