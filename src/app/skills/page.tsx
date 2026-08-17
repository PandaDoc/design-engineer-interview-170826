"use client";

import { useState } from "react";
import styled, { css } from "styled-components";
import { Chip } from "@/components/Chip";
import { Container } from "@/components/Container";
import { SearchInput } from "@/components/SearchInput";
import { SkillCard } from "@/components/SkillCard";
import { PLANS, SKILLS, TEAMS, type Plan, type Team } from "@/data/skills";
import { NavHeader } from "@/sections/NavHeader";
import { SiteFooter } from "@/sections/SiteFooter";
import { PRODUCT_NAME } from "@/theme";

const Hero = styled.section`
  background: ${({ theme }) => theme.color.brand};
  padding: 96px 0;
`;

const HeroStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 768px;
`;

const Eyebrow = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.brandFoam};
`;

const Title = styled.h1`
  margin-top: 12px;
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -0.8px;
  color: ${({ theme }) => theme.color.surface};

  @media (max-width: ${({ theme }) => theme.bp.md}) {
    font-size: 32px;
    line-height: 40px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  line-height: 27px;
  color: ${({ theme }) => theme.color.brandFoam};
`;

const Archive = styled.section`
  padding: 64px 0 96px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 800px;
  margin-inline: auto;
`;

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const FilterBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const FilterRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const FilterLabel = styled.p`
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.muted};
`;

const ChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const FilterChip = styled(Chip)<{
  $active?: boolean;
  $accent?: "brand" | "purple";
}>`
  ${({ $active, theme }) =>
    $active &&
    css`
      background: ${theme.color.brandTint};
      border-color: ${theme.color.brandFoam};
      color: ${theme.color.brand};
      box-shadow: ${theme.shadow.sm};

      &:hover {
        background: ${theme.color.brandTint};
        border-color: ${theme.color.brandFoam};
      }
    `}

  /* Business / Enterprise stay visually distinct even when unselected. */
  ${({ $accent, $active, theme }) =>
    $accent === "brand" &&
    css`
      color: ${theme.color.brand};
      border-color: ${theme.color.brandFoam};
      ${$active &&
      css`
        background: ${theme.color.brandTint};
      `}
    `}

  ${({ $accent, $active, theme }) =>
    $accent === "purple" &&
    css`
      color: ${theme.color.purple};
      border-color: color-mix(
        in srgb,
        ${theme.color.purple} 32%,
        ${theme.color.surface}
      );
      ${$active &&
      css`
        background: color-mix(
          in srgb,
          ${theme.color.purple} 12%,
          ${theme.color.surface}
        );
        border-color: color-mix(
          in srgb,
          ${theme.color.purple} 32%,
          ${theme.color.surface}
        );
        color: ${theme.color.purple};
        box-shadow: ${theme.shadow.sm};

        &:hover {
          background: color-mix(
            in srgb,
            ${theme.color.purple} 12%,
            ${theme.color.surface}
          );
          border-color: color-mix(
            in srgb,
            ${theme.color.purple} 32%,
            ${theme.color.surface}
          );
        }
      `}
    `}
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  list-style: none;
`;

const EmptyState = styled.p`
  padding: 64px 0;
  text-align: center;
  font-size: 16px;
  color: ${({ theme }) => theme.color.muted};
`;

type TeamFilter = Team | "all";
type PlanFilter = Plan | "all";

const PLAN_ACCENT: Partial<Record<Plan, "brand" | "purple">> = {
  Business: "brand",
  Enterprise: "purple",
};

function matchesQuery(skill: (typeof SKILLS)[number], q: string) {
  if (!q) return true;
  const haystack = [
    skill.title,
    skill.team,
    skill.plan,
    skill.whoRunsIt,
    skill.detail?.subtitle,
    skill.detail?.theJob,
    skill.detail?.note,
    ...(skill.detail?.needs ?? []),
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(q);
}

// Interactive state under SSG: search + filters derive the list client-side.
export default function SkillsPage() {
  const [query, setQuery] = useState("");
  const [team, setTeam] = useState<TeamFilter>("all");
  const [plan, setPlan] = useState<PlanFilter>("all");

  const q = query.trim().toLowerCase();
  const filtered = SKILLS.filter(
    (skill) =>
      matchesQuery(skill, q) &&
      (team === "all" || skill.team === team) &&
      (plan === "all" || skill.plan === plan),
  );

  return (
    <>
      <NavHeader />
      <Hero>
        <Container>
          <HeroStack>
            <HeroText>
              <Eyebrow>Skills</Eyebrow>
              <Title>Document workflows, ready to run</Title>
              <Subtitle>
                Every skill is a job your team already does — send an NDA, chase
                a signature, file a contract. Filter by team or plan to find
                the {PRODUCT_NAME} workflow that fits.
              </Subtitle>
            </HeroText>
          </HeroStack>
        </Container>
      </Hero>

      <Archive>
        <Container>
          <Column>
            <Controls>
              <SearchInput
                value={query}
                onChange={setQuery}
                placeholder="Search skills..."
                aria-label="Search skills"
              />
              <FilterBlock>
                <FilterRow>
                  <FilterLabel>Team</FilterLabel>
                  <ChipRow role="group" aria-label="Filter by team">
                    <FilterChip
                      as="button"
                      type="button"
                      $active={team === "all"}
                      aria-pressed={team === "all"}
                      onClick={() => setTeam("all")}
                    >
                      All
                    </FilterChip>
                    {TEAMS.map((name) => (
                      <FilterChip
                        key={name}
                        as="button"
                        type="button"
                        $active={team === name}
                        aria-pressed={team === name}
                        onClick={() => setTeam(name)}
                      >
                        {name}
                      </FilterChip>
                    ))}
                  </ChipRow>
                </FilterRow>
                <FilterRow>
                  <FilterLabel>Plan</FilterLabel>
                  <ChipRow role="group" aria-label="Filter by plan">
                    <FilterChip
                      as="button"
                      type="button"
                      $active={plan === "all"}
                      aria-pressed={plan === "all"}
                      onClick={() => setPlan("all")}
                    >
                      All
                    </FilterChip>
                    {PLANS.map((name) => (
                      <FilterChip
                        key={name}
                        as="button"
                        type="button"
                        $active={plan === name}
                        $accent={PLAN_ACCENT[name]}
                        aria-pressed={plan === name}
                        onClick={() => setPlan(name)}
                      >
                        {name}
                      </FilterChip>
                    ))}
                  </ChipRow>
                </FilterRow>
              </FilterBlock>
            </Controls>

            {filtered.length > 0 ? (
              <List>
                {filtered.map((skill) => (
                  <li key={skill.id}>
                    <SkillCard
                      title={skill.title}
                      subtitle={skill.detail?.subtitle}
                      team={skill.team}
                      plan={skill.plan}
                      whoRunsIt={skill.whoRunsIt}
                    />
                  </li>
                ))}
              </List>
            ) : (
              <EmptyState>
                No skills found
                {query.trim() ? (
                  <>
                    {" "}
                    for &ldquo;{query.trim()}&rdquo;
                  </>
                ) : null}
              </EmptyState>
            )}
          </Column>
        </Container>
      </Archive>

      <SiteFooter />
    </>
  );
}
