import theme from "./Theme";
import { ThemeProvider as StyledThemeProvider } from "styled-components";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>;
}
