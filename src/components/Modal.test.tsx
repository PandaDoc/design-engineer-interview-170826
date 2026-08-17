import { describe, expect, it, vi } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithTheme } from "@/test-utils";
import { Modal } from "./Modal";

describe("Modal", () => {
  it("shows its title and content, then closes from the close button", async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();

    renderWithTheme(
      <Modal title="Send an NDA in one motion" onClose={onClose}>
        <p>Get an NDA signed before the call ends.</p>
      </Modal>,
    );

    expect(
      screen.getByRole("dialog", { name: /send an nda in one motion/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Get an NDA signed before the call ends."),
    ).toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: /close/i }));
    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
