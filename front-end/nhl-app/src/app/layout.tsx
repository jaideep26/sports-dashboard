import theme from "@/theme";
import SportsHockeyIcon from "@mui/icons-material/SportsHockey";
import { Box, Button } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";
import { ThemeProvider } from "@mui/material/styles";
import Link from "next/link";
import * as React from "react";
import ModeSwitch from "./components/ModeSwitch/ModeSwitch";
export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <InitColorSchemeScript attribute="class" />
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box padding={1}>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Link href="/" passHref>
                <Button
                  variant="text"
                  color="primary"
                  startIcon={<SportsHockeyIcon fontSize="large" />}
                >
                  NHL Dashboard
                </Button>
              </Link>
              <ModeSwitch />
            </Box>
            {props.children}
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
