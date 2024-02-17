import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Inter } from "next/font/google";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { lightTheme } from "@/theme";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MuiThemeProvider
          theme={
            // Use the light theme by default
            lightTheme
          }
        >
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </MuiThemeProvider>
      </body>
    </html>
  );
}
