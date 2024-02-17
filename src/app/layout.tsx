import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Inter } from "next/font/google";
import { Experimental_CssVarsProvider as CssVarsProvider } from "@mui/material/styles";
import theme from "@/theme";

const inter = Inter({ subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CssVarsProvider
          theme={theme}
        >
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </CssVarsProvider>
      </body>
    </html >
  );
}
