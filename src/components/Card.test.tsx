import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/test-utils";
import { Card } from "./Card";

describe("Card", () => {
  it("renders its content", () => {
    renderWithTheme(<Card>Card content</Card>);

    expect(screen.getByText("Card content")).toBeInTheDocument();
  });

  it("keeps transient styling props off the DOM", () => {
    renderWithTheme(
      <Card $tinted $interactive>
        Tinted card
      </Card>,
    );

    const card = screen.getByText("Tinted card");
    expect(card).not.toHaveAttribute("$tinted");
    expect(card).not.toHaveAttribute("$interactive");
  });
});
