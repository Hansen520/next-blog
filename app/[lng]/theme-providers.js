/*
 * @Date: 2024-05-22 17:13:54
 * @Description: description
 */
"use client";

import { ThemeProvider } from "next-themes";

export function ThemeProviders({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      {children}
    </ThemeProvider>
  );
}
