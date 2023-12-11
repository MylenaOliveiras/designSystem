import { Stack } from "@mui/material";
import React from "react";
import {
  FormProvider,
  FieldValues,
  UseFormProps,
  useForm,
  SubmitHandler,
  UseFormReturn,
} from "react-hook-form";
import styled from "styled-components";

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export type FormWithMethodsProperties<
  TFieldValues extends FieldValues = FieldValues
> = React.PropsWithChildren<{
  methods: UseFormReturn<TFieldValues>;
  onSubmit: SubmitHandler<TFieldValues>;
}>;

export function useMethods<TFieldValues extends FieldValues = FieldValues>(
  options?: UseFormProps<TFieldValues>
) {
  return useForm<TFieldValues>({
    mode: "all",
    ...options,
  });
}
export function FormWithMethods({ children, onSubmit, methods }) {
  return (
    <Stack alignItems="center">
      <FormProvider {...methods}>
        <StyledForm onSubmit={methods.handleSubmit(onSubmit)}>
          {children}
        </StyledForm>
      </FormProvider>
    </Stack>
  );
}

export function Form({ children, onSubmit }) {
  const methods = useForm();
  return (
    <Stack alignItems="center">
      <FormProvider {...methods}>
        <StyledForm onSubmit={methods.handleSubmit(onSubmit)}>
          {children}
        </StyledForm>
      </FormProvider>
    </Stack>
  );
}
