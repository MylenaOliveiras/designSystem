import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface PaletteColorOptions {
    white01: string;
    white02: string;
    white03: string;

    gray01: string;
    gray02: string;

    blue01: string;
    blue02: string;
    blue03: string;
    blue04: string;
    blue05: string;

    error01: string;
    error02: string;

    success: string;
  }
}

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
  palette: {
    primary: {
      white01: "#FFFFFF",
      white02: "#F8F8F8",
      white03: "#F3F3F3",

      gray01: "#b9b9b9",
      gray02: "#898989",

      blue01: "#57A4FF",
      blue02: "#4894FF",
      blue03: "#4786f0",
      blue04: "#4373DC",
      blue05: "#4062C9",

      error01: "#DE0000",
      error02: "#F24A4A",

      success: "#17B51C",
    },
  },
  shadows: [
    "none",
    "0px 4px 16px 0px rgba(72, 148, 255, 0.16)",
    "0px -8px 16px 0px rgba(0, 0, 0, 0.08)",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
    "none",
  ],
});

export default theme;
