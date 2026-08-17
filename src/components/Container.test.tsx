import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/test-utils";
import { Container } from "./Container";

describe("Container", () => {
  it("renders its children", () => {
    renderWithTheme(
      <Container>
        <p>Page content</p>
      </Container>,
    );

    expect(screen.getByText("Page content")).toBeInTheDocument();
  });
});
