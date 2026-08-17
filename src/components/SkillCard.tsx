"use client";

import type { MouseEvent } from "react";
import Link from "next/link";
import styled, { css } from "styled-components";
import type { Plan, Team } from "@/content/skills";
import { Card } from "./Card";
import { ArrowRightIcon, PersonIcon } from "./icons";

const Shell = styled(Card)<{ $plan: Plan; $clickable?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  color: inherit;
  text-decoration: none;
  background: ${({ theme }) => theme.color.surface};

  /* Paid plans keep a left accent; the fill stays white. */
  ${({ $plan, theme }) =>
    $plan === "Business" &&
    css`
      box-shadow: ${theme.shadow.xs}, ${theme.shadow.lg},
        inset 4px 0 0 ${theme.color.brand};
    `}

  ${({ $plan, theme }) =>
    $plan === "Enterprise" &&
    css`
      box-shadow: ${theme.shadow.xs}, ${theme.shadow.lg},
        inset 4px 0 0 ${theme.color.purple};
    `}

  ${({ $clickable }) =>
    $clickable &&
    css`
      cursor: pointer;
      transition: transform 150ms ease-out;

      &:hover {
        transform: translateY(-2px);
      }

      &:focus-visible {
        outline: 2px solid ${({ theme }) => theme.color.brand};
        outline-offset: 2px;
      }
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

const More = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: ${({ theme }) => theme.color.brand};
`;

const PLAN_TONE: Record<Plan, "brand" | "purple" | undefined> = {
  Free: undefined,
  Business: "brand",
  Enterprise: "purple",
};

/**
 * Archive row for a document skill. Pass `href` only when the skill has
 * detail — that makes the whole card a link and shows Read more.
 * `onOpen` intercepts unmodified clicks (used to open the archive modal).
 */
export function SkillCard({
  title,
  subtitle,
  team,
  plan,
  whoRunsIt,
  href,
  onOpen,
}: {
  title: string;
  subtitle?: string;
  team: Team;
  plan: Plan;
  whoRunsIt: string;
  href?: string;
  onOpen?: () => void;
}) {
  const body = (
    <>
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
      {href && (
        <More>
          Read more
          <ArrowRightIcon size={16} />
        </More>
      )}
    </>
  );

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!onOpen) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    onOpen();
  };

  if (href) {
    return (
      <Shell
        as={Link}
        href={href}
        onClick={handleClick}
        $plan={plan}
        $clickable
      >
        {body}
      </Shell>
    );
  }

  return (
    <Shell as="article" $plan={plan}>
      {body}
    </Shell>
  );
}
