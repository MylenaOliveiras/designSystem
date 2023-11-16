import type { Preview } from "@storybook/react";
import { ThemeProvider } from "../src/Theme";
import { StyledEngineProvider } from "@mui/material/styles";
import type { Meta } from "@storybook/react";
import React from "react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

export const decorators: Meta["decorators"] = [
  (Story) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];
