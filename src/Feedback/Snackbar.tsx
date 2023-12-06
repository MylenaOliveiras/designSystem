import { Alert, Stack } from "@mui/material";
import { Snackbar as MUISnackbar } from "@mui/material";
import OutlinedButton from "../Button/Outlined";
import ContainedButton from "../Button/Contained";
import { AlertProps } from "@mui/material";
import { useState } from "react";
import { Theme } from "../Theme";
import React from "react";

export interface IActionProps {
  text: string;
  onClick(this: void): void;
  disableButton?: boolean;
}

export interface SnackbarProps extends AlertProps {
  open: boolean;
  message: string;
  type: "success" | "info" | "warning" | "error";
  actions?: [primary: IActionProps, secondary?: IActionProps | null];
}

export default function Snackbar({ type, message, actions }: SnackbarProps) {
  const [open, setOpen] = useState(true);

  return (
    <MUISnackbar
      open={open}
      onClick={() => {
        setOpen(!open);
      }}
    >
      <Alert
        severity={type}
        sx={{
          backgroundColor: `${Theme.palette.white01}`,
          color: "black",
          fontSize: "16px",
          lineHeight: `${Theme.typography.h2.lineHeight}px`,
          boxShadow: `${Theme.shadows[3]}`,
          gap: "1rem",
          padding: "1rem",
          flexDirection: "column",
          borderRadius: "8px",

          ".MuiAlert-message": {
            maxWidth: "296px",
            padding: "0",
            paddingLeft: "40px",
          },

          ".MuiAlert-icon": {
            position: "absolute",
          },

          ".MuiAlert-action": {
            padding: "0",
          },

          svg: {
            width: "24px",
            height: "24px",
          },
        }}
        action={
          actions && (
            <Stack flexDirection="row" gap="16px" marginRight={1} padding={0}>
              {actions[1] && (
                <OutlinedButton
                  onClick={actions[1].onClick}
                  disabled={actions[1].disableButton}
                >
                  {actions[1].text}
                </OutlinedButton>
              )}
              <ContainedButton
                autoFocus
                onClick={actions[0].onClick}
                disabled={actions[0].disableButton}
              >
                {actions[0].text}
              </ContainedButton>
            </Stack>
          )
        }
      >
        {message}
      </Alert>
    </MUISnackbar>
  );
}
