import { Meta, Story } from "@storybook/react";
import Dialog, { IDialogProps } from "./Dialog";
import { ContainedButton } from "../Button/Contained";
import { useState } from "react";

const meta: Meta<typeof Dialog> = {
  title: "Feedback/Dialog",
  component: Dialog,
  parameters: {
    controls: {
      include: ["title", "content", "hiddenCloseButton"],
    },
  },
};
export default meta;

type StoryArgs = IDialogProps;

const Template: Story<StoryArgs> = (args) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ContainedButton
        onClick={() => {
          setOpen(true);
        }}
      >
        Abrir modal
      </ContainedButton>

      <Dialog
        {...args}
        open={open}
        onClose={() => {
          setOpen(false);
        }}
      />
    </>
  );
};

export const Playground: Story<StoryArgs> = Template.bind({});
Playground.args = {
  title: "Título",
  actions: [
    {
      text: "Botão",
      onClick: () => {},
    },
    {
      text: "Botão 2",
      onClick: () => {},
    },
  ],
  content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  hiddenCloseButton: false,
};
