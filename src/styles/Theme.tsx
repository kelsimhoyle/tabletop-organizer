import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    main: "#4059ad",
    mainLight: "#6b9ac4",
    secondary: "#97d8c4",
    white: "#eff2f1",
    yellow: "#f4b942"
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "1.5em",
    large: "2.25em",
  },
};

const Theme: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
export default Theme;
