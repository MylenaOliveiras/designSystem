import { Meta, Story } from "@storybook/react";
import Select from "../Input/Select";
import Checkbox from "../Input/Checkbox";
import TextField from "../Input/TextField";
import { Stack } from "@mui/material";
import React, { useState } from "react";
import ContainedButton from "../Button/Contained";
import { FormWithMethods, useMethods } from "./Form";
import Dialog from "../Feedback/Dialog";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import { StyledTypography } from "./styled";
import { Theme } from "../Theme";

const meta: Meta<typeof Select> = {
  title: "Form/Form",
};
export default meta;

const Template: Story = () => {
  const [open, setOpen] = useState(false);

  const methods = useMethods();
  const {
    formState: { isSubmitting, isValid },
  } = methods;

  function onSubmit(data) {
    console.log(data);
    methods.reset();
    setOpen(true);
  }
  return (
    <Stack alignItems="center">
      <StyledTypography variant="h1">Formulário para contato</StyledTypography>
      <FormWithMethods methods={methods} onSubmit={onSubmit}>
        <TextField
          name="name"
          label="Nome"
          placeholder="Digite seu nome"
          fullWidth
          required
        />
        <TextField
          name="email"
          label="E-mail"
          placeholder="Digite seu e-mail"
          fullWidth
          required
        />
        <TextField
          name="phone"
          label="Celular"
          placeholder="Digite seu número de celular"
          fullWidth
          required
        />
        <TextField name="subject" label="Assunto" fullWidth required />
        <Checkbox
          name="checkbox"
          label="Declaro que li e estou de acordo com os Termos de Uso e Política de Privacidade"
          required
        />
        <ContainedButton type="submit" disabled={!isValid || isSubmitting}>
          Enviar
        </ContainedButton>
      </FormWithMethods>

      <Dialog
        open={open}
        titleItem={
          <Stack flexDirection="row" gap={1} alignItems="center">
            <StyledTypography variant="inherit">Sucesso</StyledTypography>
            <ThumbUpAltIcon
              sx={{ color: `${Theme.palette.success01}`, fontSize: "20px" }}
            />
          </Stack>
        }
        contentItem={
          <Stack alignItems="center">
            <StyledTypography variant="body2">
              Sua mensagem foi enviada com sucesso!
            </StyledTypography>
          </Stack>
        }
        onClose={() => {
          setOpen(false);
        }}
      ></Dialog>
    </Stack>
  );
};

export const Playground: Story = Template.bind({});
