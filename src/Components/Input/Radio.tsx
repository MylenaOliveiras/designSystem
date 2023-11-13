import { RadioProps, Radio as UnStyledRadio } from "@mui/material";
import theme from "../../Theme/Theme";

export default function Radio({ disabled }: RadioProps) {
  return (
    <UnStyledRadio
      sx={{
        color: `${theme.palette.primary.gray02}`,
        "&.Mui-checked": {
          color: `${theme.palette.primary.blue02}`,

          "&.Mui-disabled": {
            color: `${theme.palette.primary.gray01}`,
          },
        },
        "&.Mui-disabled": {
          color: `${theme.palette.primary.gray01}`,
        },
      }}
      disabled={disabled}
    />
  );
}
