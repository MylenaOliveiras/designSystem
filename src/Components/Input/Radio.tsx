import { RadioProps, Radio as UnStyledRadio } from "@mui/material";
import { Theme } from "../../Theme";
import React from "react";

export default function Radio({ disabled }: RadioProps) {
  return (
    <UnStyledRadio
      sx={{
        color: `${Theme.palette.gray02}`,
        "&.Mui-checked": {
          color: `${Theme.palette.blue02}`,

          "&.Mui-disabled": {
            color: `${Theme.palette.gray01}`,
          },
        },
        "&.Mui-disabled": {
          color: `${Theme.palette.gray01}`,
        },
      }}
      disabled={disabled}
    />
  );
}
