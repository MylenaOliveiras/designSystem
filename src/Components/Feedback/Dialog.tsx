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
import { ContainedButton } from "../Button/Contained";
import { IActionProps } from "./Snackbar";
import { OutlinedButton } from "../Button/Outlined";
import { Close } from "@mui/icons-material";
import styled from "styled-components";

export interface IDialogProps extends DialogProps {
  title: string;
  actions?: [primary: IActionProps, secondary?: IActionProps | null];
  hiddenCloseButton?: boolean;
  open: boolean;
  setOpen: () => void;
}

export const StyledDialog = styled(MUIDialog)`
  font-family: "Montserrat", sans-serif;

  .${dialogClasses.paper} {
    border-radius: 8px;
    padding: 16px;
    max-width: 328px;
  }
  .${dialogTitleClasses.root} {
    padding: 0;
    font-size: 18px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #1f1f1f;
  }

  .${dialogContentClasses.root} {
    color: #5c5c5c;
    padding: 0;
  }

  .${dialogActionsClasses.root} {
    padding: 0;
    margin-top: 16px;
  }
`;

export default function Dialog({
  title,
  content,
  actions,
  hiddenCloseButton,
  open,
  setOpen,
}: IDialogProps) {
  return (
    <StyledDialog open={open}>
      <DialogTitle>
        {title}
        {!hiddenCloseButton && (
          <IconButton onClick={() => setOpen()}>
            <Close sx={{ color: "#000", fontSize: "16px" }} />
          </IconButton>
        )}
      </DialogTitle>
      <DialogContent>{content}</DialogContent>
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
