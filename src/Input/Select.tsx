import {
  Select as UnstyledSelect,
  SelectProps,
  MenuItem,
  menuItemClasses,
  inputBaseClasses,
} from "@mui/material";
import { StyledInputLabel } from "./TextField";
import styled from "styled-components";
import { Control, FieldValues, useController } from "react-hook-form";
import { Theme } from "../Theme";
import React from "react";

export interface ISelectProps extends SelectProps {
  options: string[];
  label: string;
  name: string;
  control: Control<FieldValues>;
}

export const StyledSelect = styled(UnstyledSelect)`
  &.${inputBaseClasses.root} {
    border-radius: 8px;
    min-width: 220px;

    fieldset {
      border: 1px solid ${Theme.palette.white03};
    }

    &:hover {
      fieldset {
        border: 1px solid ${Theme.palette.gray01};
      }
    }
    &.${inputBaseClasses.disabled} {
      background: ${Theme.palette.white03};
      border: none;
    }

    &.${inputBaseClasses.focused} {
      fieldset {
        border: 2px solid ${Theme.palette.blue02};
      }
    }
  }

  &.${inputBaseClasses.error} {
    border: 2px solid ${Theme.palette.error01};
  }
`;

export const StyledMenuItem = styled(MenuItem)`
  &.${menuItemClasses.root} {
    border-radius: 0px 0px 8px 8px;
  }
`;

export default function Select({
  options,
  label,
  name,
  control,
  required,
  disabled,
  ...props
}: ISelectProps) {
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
      <StyledSelect
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        required={required}
        error={isTouched && !!error}
        placeholder={label}
        {...props}
      >
        {options.map((option) => (
          <StyledMenuItem value={option}>{option}</StyledMenuItem>
        ))}
      </StyledSelect>
    </>
  );
}
