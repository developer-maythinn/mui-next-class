import * as React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";
import CustomAppBar from "@/components/CustomAppBar";
import CustomButtomNavBar from "@/components/CustomButtomNavBar";
import { Provider } from "react-redux";
import ReduxLayout from "@/components/ReduxLayout";
export default function RootLayout(props) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ReduxLayout>
            <ThemeProvider theme={theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <CustomAppBar></CustomAppBar>
              {/* position buttom moh loh cat nay tr */}
              {/* <CustomButtomNavBar></CustomButtomNavBar> */}
              {props.children}
              <CustomButtomNavBar></CustomButtomNavBar>
            </ThemeProvider>
          </ReduxLayout>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
