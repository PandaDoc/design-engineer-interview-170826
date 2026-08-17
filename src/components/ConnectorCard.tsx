"use client";

import type { ReactNode } from "react";
import styled, { css } from "styled-components";

const Body = styled.div<{ $tinted?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex: 1;
  width: 100%;
  padding: 52px 24px 32px;
  border-radius: ${({ theme }) => theme.radius.xl};
  background: ${({ theme }) => theme.color.surface};
  transition: box-shadow 150ms ease-out;

  ${({ $tinted }) =>
    $tinted &&
    css`
      background: ${({ theme }) => theme.color.sand};
      border: 1px solid ${({ theme }) => theme.color.borderWarm};
    `}
`;

const Outer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 24px;
  transition: transform 150ms ease-out;

  &:hover {
    transform: translateY(-4px);
  }

  /* Parent-hover-child: lifting the wrapper deepens the card's shadow. */
  &:hover ${Body} {
    box-shadow: ${({ theme }) => theme.shadow.lg};
  }
`;

const IconTile = styled.div`
  position: absolute;
  top: -32px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  border-radius: ${({ theme }) => theme.radius.lg};
  border: 1px solid ${({ theme }) => theme.color.borderStrong};
  background: ${({ theme }) => theme.color.surface};
  box-shadow:
    0 1px 2px rgba(23, 20, 18, 0.05),
    inset 0 -2px 0 rgba(23, 20, 18, 0.05);
  color: ${({ theme }) => theme.color.ink};
`;

const Name = styled.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 28px;
  color: ${({ theme }) => theme.color.ink};
  text-align: center;
`;

const Category = styled.p`
  margin-top: -12px;
  font-size: 13px;
  font-weight: 500;
  line-height: 20px;
  color: ${({ theme }) => theme.color.muted};
  text-align: center;
`;

const Desc = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.color.body};
  text-align: center;
`;

/**
 * Connector card with the floating icon tile. `footer` renders below the
 * description — the connectors page puts its CTA row there.
 */
export function ConnectorCard({
  icon,
  name,
  category,
  desc,
  footer,
  tinted,
}: {
  icon: ReactNode;
  name: string;
  category?: string;
  desc: string;
  footer?: ReactNode;
  tinted?: boolean;
}) {
  return (
    <Outer>
      <Body $tinted={tinted}>
        <IconTile>{icon}</IconTile>
        <Name>{name}</Name>
        {category && <Category>{category}</Category>}
        <Desc>{desc}</Desc>
        {footer}
      </Body>
    </Outer>
  );
}
