import React, { ReactNode } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Mulish"].join(","),
  },
  palette: {
    primary: {
      light: "#CFFAFA",
      main: "#5ACCCC",
      dark: "#28B8B8",
      contrastText: "#FFFFFF",
    },
    secondary: {
      light: "#FABD33",
      main: "#FABD33",
      dark: "#F76434",
      contrastText: "#FFFFFF",
    },
    warning: {
      light: "#FFE6DC",
      main: "#F76434",
      dark: "#F76434",
      contrastText: "#FFFFFF",
    },
  },
});

interface ThemeProviderComponentProps {
  children: ReactNode;
}

const ThemeProviderComponent: React.FC<ThemeProviderComponentProps> = ({
  children,
}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProviderComponent;
