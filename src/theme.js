"use client";
import { createTheme } from "@mui/material/styles";

// Define the light theme
export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#187F78", // Primary color
    },
    secondary: {
      main: "#2AF2DC", // Secondary color
    },
    brand: {
      main: "#5CBCA9", // Brand color
      dark: "#003F3F", // Darker shade of brand color
    },
    // Other theme options as needed
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

// Define the dark theme
export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#187F78", // Primary color
    },
    secondary: {
      main: "#2AF2DC", // Secondary color
    },
    brand: {
      main: "#5CBCA9", // Brand color
      dark: "#003F3F", // Darker shade of brand color
    },
    // Other theme options as needed
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});
