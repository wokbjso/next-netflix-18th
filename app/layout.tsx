"use client";

import StyledComponentsRegistry from "@/app/lib/registry";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <ThemeProvider theme={theme}>
          <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
        </ThemeProvider>
      </body>
    </html>
  );
}
