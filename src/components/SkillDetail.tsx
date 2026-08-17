"use client";

import styled, { css } from "styled-components";
import type { Plan, Skill } from "@/content/skills";
import { Chip } from "./Chip";
import { PersonIcon } from "./icons";

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
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

const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: -0.72px;
  color: ${({ theme }) => theme.color.ink};

  @media (max-width: ${({ theme }) => theme.bp.md}) {
    font-size: 28px;
    line-height: 36px;
  }
`;

const Subtitle = styled.p`
  font-size: 20px;
  line-height: 30px;
  color: ${({ theme }) => theme.color.body};
`;

const Runner = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  line-height: 20px;
  color: ${({ theme }) => theme.color.muted};
`;

const Block = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.h2`
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.muted};
`;

const Body = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.color.body};
`;

const Steps = styled.ol`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-left: 20px;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.color.body};
`;

const Needs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Need = styled(Chip)`
  cursor: default;

  &:hover {
    background: ${({ theme }) => theme.color.surfaceAlt};
    border-color: ${({ theme }) => theme.color.border};
    box-shadow: none;
  }
`;

const Note = styled.p`
  padding: 16px;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.sand};
  border: 1px solid ${({ theme }) => theme.color.borderWarm};
  font-size: 14px;
  line-height: 21px;
  color: ${({ theme }) => theme.color.body};
`;

const PLAN_TONE: Record<Plan, "brand" | "purple" | undefined> = {
  Free: undefined,
  Business: "brand",
  Enterprise: "purple",
};

/** Shared body of a skill — used on the standalone page and in the archive modal. */
export function SkillDetail({ skill }: { skill: Skill }) {
  const { title, team, plan, whoRunsIt, detail } = skill;

  return (
    <Stack>
      <Intro>
        <Badges>
          <Badge>{team}</Badge>
          <Badge $tone={PLAN_TONE[plan]}>{plan}</Badge>
        </Badges>
        <Title>{title}</Title>
        {detail?.subtitle && <Subtitle>{detail.subtitle}</Subtitle>}
        <Runner>
          <PersonIcon size={16} />
          {whoRunsIt}
        </Runner>
      </Intro>

      {detail && (
        <>
          <Block>
            <Label>The job</Label>
            <Body>{detail.theJob}</Body>
          </Block>
          <Block>
            <Label>How it runs</Label>
            <Steps>
              {detail.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </Steps>
          </Block>
          <Block>
            <Label>Needs</Label>
            <Needs>
              {detail.needs.map((need) => (
                <Need as="span" key={need}>
                  {need}
                </Need>
              ))}
            </Needs>
          </Block>
          <Note>{detail.note}</Note>
        </>
      )}
    </Stack>
  );
}
