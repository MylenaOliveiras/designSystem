import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";

interface ISharedPalette {
  white01: string;
  white02: string;
  white03: string;

  gray01: string;
  gray02: string;
  gray03: string;
  gray04: string;
  gray05: string;
  gray06: string;

  blue01: string;
  blue02: string;
  blue03: string;
  blue04: string;
  blue05: string;

  error01: string;
  error02: string;

  success01: string;
}

declare module "@mui/material/styles" {
  interface Palette extends ISharedPalette {}
  interface PaletteOptions extends ISharedPalette {}
}

export const Theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",

    h1: {
      fontWeight: 700,
      fontSize: 18,
      lineHeight: 24,
    },

    h2: {
      fontWeight: 700,
      fontSize: 16,
      lineHeight: 24,
    },

    h3: {
      fontSize: 12,
      lineHeight: 24,
    },
  },
  palette: {
    white01: "#FFFFFF",
    white02: "#F8F8F8",
    white03: "#F3F3F3",

    gray01: "#cfcfcf",
    gray02: "#b9b9b9",
    gray03: "#898989",
    gray04: "#5c5c5c",
    gray05: "#464646",
    gray06: "#1f1f1f",

    blue01: "#57A4FF",
    blue02: "#4894FF",
    blue03: "#4786f0",
    blue04: "#4373DC",
    blue05: "#4062C9",

    error01: "#DE0000",
    error02: "#F24A4A",

    success01: "#17B51C",
  },

  shadows: [
    "none",
    "0px 4px 16px 0px rgba(72, 148, 255, 0.16)",
    "0px -8px 16px 0px rgba(0, 0, 0, 0.08)",
    "0px 8px 16px 0px rgba(0, 0, 0, 0.08)",
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

interface ThemeProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProps> = ({ children }) => (
  <MUIThemeProvider theme={Theme}>{children}</MUIThemeProvider>
);
