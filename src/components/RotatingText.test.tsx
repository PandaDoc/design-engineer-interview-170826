import { afterEach, describe, expect, it, vi } from "vitest";
import { act, screen } from "@testing-library/react";
import { renderWithTheme } from "@/test-utils";
import { RotatingText } from "./RotatingText";

const PHRASES = ["sending an NDA", "building a quote", "contract renewals"];

afterEach(() => {
  vi.useRealTimers();
});

describe("RotatingText", () => {
  it("exposes one phrase at a time, advancing on the interval and wrapping", () => {
    vi.useFakeTimers();
    renderWithTheme(<RotatingText items={PHRASES} interval={1000} />);

    // every phrase is rendered — only the active one is read out
    const [first, second, third] = PHRASES.map((p) => screen.getByText(p));
    expect(first).toHaveAttribute("aria-hidden", "false");
    expect(second).toHaveAttribute("aria-hidden", "true");

    act(() => vi.advanceTimersByTime(1000));
    expect(first).toHaveAttribute("aria-hidden", "true");
    expect(second).toHaveAttribute("aria-hidden", "false");

    // past the last phrase it cycles back to the first
    act(() => vi.advanceTimersByTime(2000));
    expect(third).toHaveAttribute("aria-hidden", "true");
    expect(first).toHaveAttribute("aria-hidden", "false");
  });
});
