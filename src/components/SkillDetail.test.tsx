import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { renderWithTheme } from "@/test-utils";
import { SKILLS } from "@/content/skills";
import { SkillDetail } from "./SkillDetail";

const withDetail = SKILLS.find((skill) => skill.detail)!;
const withoutDetail = SKILLS.find((skill) => !skill.detail)!;

describe("SkillDetail", () => {
  it("renders the job, steps, and needs when a skill has detail", () => {
    renderWithTheme(<SkillDetail skill={withDetail} />);

    expect(
      screen.getByRole("heading", { level: 1, name: withDetail.title }),
    ).toBeInTheDocument();
    expect(screen.getByText(withDetail.detail!.theJob)).toBeInTheDocument();
    expect(screen.getByText(withDetail.detail!.steps[0])).toBeInTheDocument();
    expect(screen.getByText(withDetail.detail!.needs[0])).toBeInTheDocument();
    expect(screen.getByText(withDetail.detail!.note)).toBeInTheDocument();
  });

  it("renders title and plan when a skill has no detail", () => {
    renderWithTheme(<SkillDetail skill={withoutDetail} />);

    expect(
      screen.getByRole("heading", { level: 1, name: withoutDetail.title }),
    ).toBeInTheDocument();
    expect(screen.getByText(withoutDetail.plan)).toBeInTheDocument();
    expect(screen.queryByText(/the job/i)).not.toBeInTheDocument();
  });
});
