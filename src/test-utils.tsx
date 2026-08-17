import type { ReactElement } from "react";
import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/theme";

/**
 * RTL's render with the app ThemeProvider — required for anything styled,
 * since components read tokens via `${({ theme }) => …}`.
 */
export function renderWithTheme(ui: ReactElement) {
  return render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>);
}
