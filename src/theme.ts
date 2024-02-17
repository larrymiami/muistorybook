"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
  },
  palette: {
    primary: {
      main: "#187F78",
    },
    secondary: {
      main: "#2AF2DC",
    },
  },
})

const darkTheme = createTheme({
  ...theme,
  palette: {
    ...theme.palette,
    mode: "dark",
  },
});

const lightTheme = createTheme({
  ...theme,
  palette: {
    ...theme.palette,
    mode: "light",
  },
});


export { theme, darkTheme, lightTheme };
