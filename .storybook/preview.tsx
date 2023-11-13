import type { Preview } from "@storybook/react";
import ThemeProvider from "../src/Theme/ThemeProvider";
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

const decorators = [
  (Story) => (
    <ThemeProvider >
      <Story />
    </ThemeProvider>
  ),
];
