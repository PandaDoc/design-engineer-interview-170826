import { useState } from "react";
import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithTheme } from "@/test-utils";
import { SearchInput } from "./SearchInput";

// Controlled-usage harness, the way pages consume SearchInput.
function Harness() {
  const [value, setValue] = useState("");
  return (
    <SearchInput
      value={value}
      onChange={setValue}
      placeholder="Search connectors..."
      aria-label="Search connectors"
    />
  );
}

describe("SearchInput", () => {
  it("works as a controlled input", async () => {
    const user = userEvent.setup();
    renderWithTheme(<Harness />);

    const input = screen.getByRole("textbox", { name: /search connectors/i });
    await user.type(input, "cursor");

    expect(input).toHaveValue("cursor");
  });
});
