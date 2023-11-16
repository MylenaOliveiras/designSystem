import { CheckboxProps, Checkbox as UnStyledCheckbox } from "@mui/material";
import { Theme } from "../../Theme";

export default function Checkbox({ disabled }: CheckboxProps) {
  return (
    <UnStyledCheckbox
      sx={{
        color: `${Theme.palette.gray02}`,

        "&.Mui-checked": {
          color: `${Theme.palette.blue02}`,
        },
        "&.Mui-disabled": {
          color: `${Theme.palette.gray01}`,
        },
      }}
      disabled={disabled}
    />
  );
}
