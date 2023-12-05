import {
  DialogTitle,
  DialogProps,
  DialogContent,
  DialogActions,
  dialogClasses,
  dialogTitleClasses,
  dialogActionsClasses,
  dialogContentClasses,
  IconButton,
} from "@mui/material";
import MUIDialog from "@mui/material/Dialog";
import ContainedButton from "../Button/Contained";
import { IActionProps } from "./Snackbar";
import OutlinedButton from "../Button/Outlined";
import { Close } from "@mui/icons-material";
import styled from "styled-components";
import { Theme } from "../../Theme";
import React from "react";

export interface IDialogProps extends DialogProps {
  titleItem: string | React.ReactElement;
  actions?: [primary: IActionProps, secondary?: IActionProps | null];
  hiddenCloseButton?: boolean;
  open: boolean;
  onClose: () => void;
  contentItem: string | React.ReactElement;
}

export const StyledDialog = styled(MUIDialog)`
  .${dialogClasses.paper} {
    border-radius: 8px;
    padding: 16px;
    max-width: 328px;
  }
  .${dialogTitleClasses.root} {
    padding: 0;
    font-size: ${Theme.typography.h1.fontSize}px;
    font-weight: ${Theme.typography.h1.fontWeight};
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${Theme.palette.gray05};
  }

  .${dialogContentClasses.root} {
    color: ${Theme.palette.gray03};
    padding: 0;
  }

  .${dialogActionsClasses.root} {
    padding: 0;
    margin-top: 16px;
  }
`;

export default function Dialog({
  titleItem,
  contentItem,
  actions,
  hiddenCloseButton,
  open,
  onClose,
}: IDialogProps) {
  return (
    <StyledDialog open={open}>
      <DialogTitle>
        {titleItem}
        {!hiddenCloseButton && (
          <IconButton onClick={onClose}>
            <Close
              sx={{ color: `${Theme.palette.gray04}`, fontSize: "16px" }}
            />
          </IconButton>
        )}
      </DialogTitle>
      <DialogContent>{contentItem}</DialogContent>
      {actions && (
        <DialogActions>
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
        </DialogActions>
      )}
    </StyledDialog>
  );
}
