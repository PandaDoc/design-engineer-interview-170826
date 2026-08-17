import { describe, expect, it, vi } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithTheme } from "@/test-utils";
import { Button } from "./Button";

describe("Button", () => {
  it("renders an accessible button and handles clicks", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();
    renderWithTheme(<Button onClick={onClick}>Create free account</Button>);

    const button = screen.getByRole("button", {
      name: /create free account/i,
    });
    await user.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it.each([
    ["primary", "md"],
    ["primary", "lg"],
    ["secondary", "md"],
    ["secondary", "lg"],
    ["ghost", "md"],
    ["ghost", "lg"],
    ["outlined", "md"],
    ["outlined", "lg"],
  ] as const)("renders the %s / %s variant as a button", ($variant, $size) => {
    renderWithTheme(
      <Button $variant={$variant} $size={$size}>
        Label
      </Button>,
    );

    expect(screen.getByRole("button", { name: "Label" })).toBeInTheDocument();
  });

  it("renders as a link via the `as` prop", () => {
    renderWithTheme(
      <Button as="a" href="/pricing" $variant="secondary">
        Pricing
      </Button>,
    );

    expect(screen.getByRole("link", { name: /pricing/i })).toHaveAttribute(
      "href",
      "/pricing",
    );
  });
});
