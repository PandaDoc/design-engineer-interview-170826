import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/test-utils";
import { PRODUCT_NAME } from "@/theme";
import { Wordmark } from "./Wordmark";

describe("Wordmark", () => {
  it("renders the product name", () => {
    renderWithTheme(<Wordmark />);

    expect(screen.getByText(PRODUCT_NAME)).toBeInTheDocument();
  });
});
