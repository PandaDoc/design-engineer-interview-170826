import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/test-utils";
import { ToolMarkAsterisk } from "./icons";
import { ConnectorCard } from "./ConnectorCard";

const PROPS = {
  icon: <ToolMarkAsterisk size={28} />,
  name: "Claude",
  desc: "Draft, send, and track documents from your agent.",
};

describe("ConnectorCard", () => {
  it("renders name, description, and optional category", () => {
    renderWithTheme(<ConnectorCard {...PROPS} category="AI assistant" />);

    expect(screen.getByText("Claude")).toBeInTheDocument();
    expect(screen.getByText(PROPS.desc)).toBeInTheDocument();
    expect(screen.getByText("AI assistant")).toBeInTheDocument();
  });

  it("omits the category line when not provided", () => {
    renderWithTheme(<ConnectorCard {...PROPS} />);

    expect(screen.queryByText("AI assistant")).not.toBeInTheDocument();
  });

  it("renders the footer slot", () => {
    renderWithTheme(
      <ConnectorCard {...PROPS} footer={<button type="button">Connect</button>} />,
    );

    expect(
      screen.getByRole("button", { name: /connect/i }),
    ).toBeInTheDocument();
  });
});
