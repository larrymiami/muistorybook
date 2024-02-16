"use client";
import { useEffect, useState } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Inter } from "next/font/google";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "../theme";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }) {
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    const preferredColorScheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches
      ? "dark"
      : "light";
    setTheme(preferredColorScheme === "dark" ? darkTheme : lightTheme);
    console.log("Theme set to", preferredColorScheme);
  }, []);
  return (
    <html lang="en">
      <body className={inter.className}>
        <MuiThemeProvider theme={theme}>
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </MuiThemeProvider>
      </body>
    </html>
  );
}
