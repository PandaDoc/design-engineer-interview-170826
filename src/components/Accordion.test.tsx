import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithTheme } from "@/test-utils";
import { Accordion } from "./Accordion";

const ITEMS = [
  { title: "What is a prompt?", body: "Instructions you give an AI tool." },
  { title: "What is a skill?", body: "A pre-built prompt for one task." },
];

describe("Accordion", () => {
  it("keeps a single item open: default open, switch, then collapse", async () => {
    const user = userEvent.setup();
    renderWithTheme(<Accordion items={ITEMS} />);

    // first item is open by default
    const first = screen.getByRole("button", { name: /what is a prompt/i });
    expect(first).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText(ITEMS[0].body)).toBeInTheDocument();

    // opening the second closes the first
    const second = screen.getByRole("button", { name: /what is a skill/i });
    await user.click(second);
    expect(screen.getByText(ITEMS[1].body)).toBeInTheDocument();
    expect(screen.queryByText(ITEMS[0].body)).not.toBeInTheDocument();

    // clicking the open item collapses it — nothing stays open
    await user.click(second);
    expect(screen.queryByText(ITEMS[1].body)).not.toBeInTheDocument();
    expect(second).toHaveAttribute("aria-expanded", "false");
  });
});
