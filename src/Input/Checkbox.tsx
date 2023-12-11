import {
  CheckboxProps,
  InputLabel,
  Stack,
  Checkbox as UnStyledCheckbox,
} from "@mui/material";
import { Theme } from "../Theme";
import { useController } from "react-hook-form";
import { FormHelperTextError } from "./FormHelperText";

export interface ICheckboxProps extends CheckboxProps {
  label?: string;
  name: string;
}

export function Checkbox({ disabled, label, name, required }: ICheckboxProps) {
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
      <Stack display="flex" flexDirection="row" alignItems="center">
        <UnStyledCheckbox
          required={required}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
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
        <InputLabel>{label}</InputLabel>
      </Stack>
      {error && isTouched && (
        <FormHelperTextError>{error.message}</FormHelperTextError>
      )}
    </div>
  );
}
