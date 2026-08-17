"use client";

import styled from "styled-components";

/**
 * Pill chip — e.g. the "Add to Claude" row. An anchor by default; use
 * `as="button"` for action chips.
 */
export const Chip = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 7px;
  padding: 7px 14px;
  border-radius: ${({ theme }) => theme.radius.pill};
  border: 1px solid ${({ theme }) => theme.color.border};
  background: ${({ theme }) => theme.color.surfaceAlt};
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.color.inkSoft};
  cursor: pointer;
  transition:
    background 150ms ease-out,
    border-color 150ms ease-out,
    box-shadow 150ms ease-out;

  &:hover {
    background: ${({ theme }) => theme.color.sandHover};
    border-color: ${({ theme }) => theme.color.borderStrong};
    box-shadow: ${({ theme }) => theme.shadow.sm};
  }
`;
