import React from "react";
import styled from "styled-components";
import { useController } from "react-hook-form";
import {
  InputBase,
  InputBaseProps,
  InputLabel,
  inputLabelClasses,
  inputBaseClasses,
  FormHelperText,
  formHelperTextClasses,
} from "@mui/material";
import { Theme } from "../Theme";

const StyledTextField = styled(InputBase)`
  &.${inputBaseClasses.root} {
    border-radius: 8px;
    border: 1px solid ${Theme.palette.white03};
    padding: 11px;
    font-size: ${Theme.typography.h2.fontSize};

    &:hover {
      border: 1px solid ${Theme.palette.gray01};
    }

    &.${inputBaseClasses.disabled} {
      background: ${Theme.palette.white02};
      border: none;
    }

    &.${inputBaseClasses.focused} {
      border: 2px solid ${Theme.palette.blue02};
    }
  }

  &.${inputBaseClasses.error} {
    border: 2px solid ${Theme.palette.error01};
  }
`;

export const StyledInputLabel = styled(InputLabel)`
  &.${inputLabelClasses.root} {
    color: ${Theme.palette.gray02};
  }
`;

export const StyledFormHelperText = styled(FormHelperText)`
  &.${formHelperTextClasses.root} {
    color: ${Theme.palette.error01};
  }
`;

export interface ITextFieldProps extends InputBaseProps {
  label?: string;
  name: string;
}

export const TextField: React.FC<ITextFieldProps> = ({
  name,
  disabled,
  label,
  required,
  ...rest
}) => {
  const {
    fieldState: { error, isTouched },
    field: { onChange, onBlur, value },
  } = useController({
    name,
    defaultValue: "",
    rules: {
      required: {
        value: required ? true : false,
        message: "Este campo é obrigatório",
      },
    },
  });

  return (
    <div>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextField
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        required={required}
        error={!!error && isTouched}
        {...rest}
      />
      {error && isTouched && !disabled && (
        <StyledFormHelperText>{error.message}</StyledFormHelperText>
      )}
    </div>
  );
};
