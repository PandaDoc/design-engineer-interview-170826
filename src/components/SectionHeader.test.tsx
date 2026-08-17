import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/test-utils";
import { SectionHeader } from "./SectionHeader";

describe("SectionHeader", () => {
  it("renders the title as a level-2 heading with an eyebrow", () => {
    renderWithTheme(
      <SectionHeader eyebrow="Connectors" title="Connect your tools" />,
    );

    expect(
      screen.getByRole("heading", { level: 2, name: /connect your tools/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("Connectors")).toBeInTheDocument();
  });

  it("renders without an eyebrow", () => {
    renderWithTheme(<SectionHeader title="Plain heading" />);

    expect(
      screen.getByRole("heading", { level: 2, name: /plain heading/i }),
    ).toBeInTheDocument();
    expect(screen.queryByText("Connectors")).not.toBeInTheDocument();
  });
});
