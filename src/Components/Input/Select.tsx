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

export interface ISelectProps extends SelectProps {
  options: string[];
  label: string;
  name: string;
  control: Control<FieldValues>;
}

export const StyledSelect = styled(UnstyledSelect)`
  &.${inputBaseClasses.root} {
    border-radius: 8px;
    min-width: 200px;

    &:hover {
      border: 1px solid #cfcfcf;
    }

    &.${inputBaseClasses.disabled} {
      background: #f3f3f3;
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
