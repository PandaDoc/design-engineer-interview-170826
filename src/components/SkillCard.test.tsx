import { describe, expect, it, vi } from "vitest";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { renderWithTheme } from "@/test-utils";
import { SkillCard } from "./SkillCard";

const BASE = {
  title: "Send an NDA in one motion",
  team: "Sales" as const,
  whoRunsIt: "Sales rep",
};

describe("SkillCard", () => {
  it("renders title, team, plan, and who runs it", () => {
    renderWithTheme(<SkillCard {...BASE} plan="Free" />);

    expect(
      screen.getByRole("heading", { name: /send an nda in one motion/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("Sales")).toBeInTheDocument();
    expect(screen.getByText("Free")).toBeInTheDocument();
    expect(screen.getByText("Sales rep")).toBeInTheDocument();
    expect(screen.queryByRole("link")).not.toBeInTheDocument();
    expect(screen.queryByText(/read more/i)).not.toBeInTheDocument();
  });

  it("renders the subtitle when provided", () => {
    renderWithTheme(
      <SkillCard
        {...BASE}
        plan="Business"
        subtitle="Get an NDA signed before the call ends."
      />,
    );

    expect(
      screen.getByText("Get an NDA signed before the call ends."),
    ).toBeInTheDocument();
    expect(screen.getByText("Business")).toBeInTheDocument();
  });

  it("omits the subtitle when not provided", () => {
    renderWithTheme(<SkillCard {...BASE} plan="Enterprise" />);

    expect(screen.getByText("Enterprise")).toBeInTheDocument();
    expect(
      screen.queryByText("Get an NDA signed before the call ends."),
    ).not.toBeInTheDocument();
  });

  it("is a real link with Read more that onOpen intercepts", async () => {
    const user = userEvent.setup();
    const onOpen = vi.fn();

    renderWithTheme(
      <SkillCard
        {...BASE}
        plan="Free"
        href="/skills/send-an-nda-in-one-motion"
        onOpen={onOpen}
      />,
    );

    const link = screen.getByRole("link", { name: /send an nda in one motion/i });
    expect(link).toHaveAttribute("href", "/skills/send-an-nda-in-one-motion");
    expect(screen.getByText(/read more/i)).toBeInTheDocument();

    await user.click(link);
    expect(onOpen).toHaveBeenCalledTimes(1);
  });
});
