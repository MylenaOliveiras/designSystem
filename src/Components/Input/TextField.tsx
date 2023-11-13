import React from "react";
import styled from "styled-components";
import { Control, FieldValues, useController } from "react-hook-form";
import {
  InputBase,
  InputBaseProps,
  InputLabel,
  inputLabelClasses,
  inputBaseClasses,
  FormHelperText,
  formHelperTextClasses,
} from "@mui/material";

const StyledTextField = styled(InputBase)`
  &.${inputBaseClasses.root} {
    border-radius: 8px;
    border: 1px solid #ececec;
    padding: 11px;
    font-size: 16px;

    &:hover {
      border: 1px solid #cfcfcf;
    }

    &.${inputBaseClasses.disabled} {
      background: #e4e4e4;
      border: none;
    }

    &.${inputBaseClasses.focused} {
      border: 2px solid #4894ff;
    }
  }

  &.${inputBaseClasses.error} {
    border: 2px solid #de0000;
  }
`;

export const StyledInputLabel = styled(InputLabel)`
  &.${inputLabelClasses.root} {
    color: #898989;
    line-height: 24px;
  }
`;

export const StyledFormHelperText = styled(FormHelperText)`
  &.${formHelperTextClasses.root} {
    color: #de0000;
    line-height: 24px;
  }
`;

export interface IBaseProps extends InputBaseProps {
  label?: string;
  name: string;
  control: Control<FieldValues>;
}

export const Base: React.FC<IBaseProps> = ({
  name,
  disabled,
  label,
  control,
  required,
  ...rest
}) => {
  const {
    fieldState: { error, isTouched },
    field: { onChange, onBlur, value },
  } = useController({
    control,
    name,
    defaultValue: "",
    rules: {
      required: {
        value: true,
        message: "Campo obrigatório",
      },
    },
  });

  return (
    <>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextField
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        required={required}
        error={isTouched && !!error}
        {...rest}
      />
      {error && isTouched && (
        <StyledFormHelperText>{error.message}</StyledFormHelperText>
      )}
    </>
  );
};
