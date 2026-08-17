import { describe, expect, it } from "vitest";
import { render } from "@testing-library/react";
import * as icons from "./icons";

// Icons are decorative (aria-hidden), so they have no ARIA role to query —
// this sweep checks the raw <svg> contract for every export instead.
describe("icons", () => {
  it.each(Object.entries(icons))(
    "%s renders a decorative svg that honors `size`",
    (_name, Icon) => {
      const { container } = render(<Icon size={20} />);

      const svg = container.firstElementChild;
      expect(svg?.tagName).toBe("svg");
      expect(svg).toHaveAttribute("aria-hidden", "true");
      expect(svg).toHaveAttribute("width", "20");
      expect(svg).toHaveAttribute("height", "20");
    },
  );
});
