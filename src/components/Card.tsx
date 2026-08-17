"use client";

import styled, { css } from "styled-components";

/**
 * Surface card.
 * - `$tinted` — sand fill + warm border, for cards sitting on white.
 * - `$interactive` — hover lift, for cards that link somewhere.
 */
export const Card = styled.div<{ $tinted?: boolean; $interactive?: boolean }>`
  border-radius: ${({ theme }) => theme.radius.xl};
  background: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => `${theme.shadow.xs}, ${theme.shadow.lg}`};

  ${({ $tinted }) =>
    $tinted &&
    css`
      background: ${({ theme }) => theme.color.sand};
      border: 1px solid ${({ theme }) => theme.color.borderWarm};
      box-shadow: none;
    `}

  ${({ $interactive }) =>
    $interactive &&
    css`
      cursor: pointer;
      transition:
        transform 150ms ease-out,
        box-shadow 150ms ease-out;

      &:hover {
        transform: translateY(-2px);
        box-shadow: ${({ theme }) => theme.shadow.lift};
      }
    `}
`;
