"use client";

import { experimental_extendTheme as extendTheme } from "@mui/material/styles";

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
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
    },
    dark: {
      palette: {
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
    },
  },
});

export default theme;
