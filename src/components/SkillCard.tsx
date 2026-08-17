"use client";

import styled, { css } from "styled-components";
import type { Plan, Team } from "@/data/skills";
import { Card } from "./Card";
import { PersonIcon } from "./icons";

const Shell = styled(Card)<{ $plan: Plan }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;

  /* Paid plans pick up a left accent so they scan in a long list. */
  ${({ $plan, theme }) =>
    $plan === "Business" &&
    css`
      box-shadow: inset 4px 0 0 ${theme.color.brand};
    `}

  ${({ $plan, theme }) =>
    $plan === "Enterprise" &&
    css`
      box-shadow: inset 4px 0 0 ${theme.color.purple};
    `}
`;

const Copy = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  color: ${({ theme }) => theme.color.ink};
`;

const Subtitle = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.color.body};
`;

const Meta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
`;

const Badges = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

const Badge = styled.span<{ $tone?: "brand" | "purple" }>`
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: ${({ theme }) => theme.radius.pill};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surfaceAlt};
  font-size: 13px;
  font-weight: 600;
  line-height: 20px;
  color: ${({ theme }) => theme.color.inkSoft};

  ${({ $tone, theme }) =>
    $tone === "brand" &&
    css`
      background: ${theme.color.brandTint};
      border-color: ${theme.color.brandFoam};
      color: ${theme.color.brand};
    `}

  ${({ $tone, theme }) =>
    $tone === "purple" &&
    css`
      background: color-mix(in srgb, ${theme.color.purple} 12%, ${theme.color.surface});
      border-color: color-mix(in srgb, ${theme.color.purple} 28%, ${theme.color.surface});
      color: ${theme.color.purple};
    `}
`;

const Runner = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  line-height: 20px;
  color: ${({ theme }) => theme.color.muted};
`;

const PLAN_TONE: Record<Plan, "brand" | "purple" | undefined> = {
  Free: undefined,
  Business: "brand",
  Enterprise: "purple",
};

/**
 * Archive row for a document skill. Business and Enterprise plans get an
 * accent bar and a tinted plan badge so paid skills scan as such.
 */
export function SkillCard({
  title,
  subtitle,
  team,
  plan,
  whoRunsIt,
}: {
  title: string;
  subtitle?: string;
  team: Team;
  plan: Plan;
  whoRunsIt: string;
}) {
  return (
    <Shell as="article" $tinted={plan !== "Free"} $plan={plan}>
      <Copy>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </Copy>
      <Meta>
        <Badges>
          <Badge>{team}</Badge>
          <Badge $tone={PLAN_TONE[plan]}>{plan}</Badge>
        </Badges>
        <Runner>
          <PersonIcon size={16} />
          {whoRunsIt}
        </Runner>
      </Meta>
    </Shell>
  );
}
