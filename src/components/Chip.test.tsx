import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/test-utils";
import { Chip } from "./Chip";

describe("Chip", () => {
  it("renders as a link by default", () => {
    renderWithTheme(<Chip href="/connectors">Add to Claude</Chip>);

    expect(
      screen.getByRole("link", { name: /add to claude/i }),
    ).toHaveAttribute("href", "/connectors");
  });

  it("renders as a button via the `as` prop", () => {
    renderWithTheme(
      <Chip as="button" type="button">
        Filter
      </Chip>,
    );

    expect(screen.getByRole("button", { name: /filter/i })).toBeInTheDocument();
  });
});
