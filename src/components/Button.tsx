"use client";

import styled, { css, type RuleSet } from "styled-components";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outlined";
type ButtonSize = "md" | "lg";

const variants: Record<ButtonVariant, RuleSet<object>> = {
  primary: css`
    background: ${({ theme }) => theme.color.brand};
    color: #ffffff;

    &:hover {
      background: ${({ theme }) => theme.color.brandHover};
    }
  `,
  secondary: css`
    background: ${({ theme }) => theme.color.surface};
    color: ${({ theme }) => theme.color.inkSoft};
    border: 1px solid ${({ theme }) => theme.color.borderStrong};

    &:hover {
      background: ${({ theme }) => theme.color.surfaceAlt};
      box-shadow: ${({ theme }) => theme.shadow.xs};
    }
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.color.inkSoft};

    &:hover {
      background: rgba(28, 25, 23, 0.06);
    }
  `,
  /* For dark / gradient surfaces (e.g. the signup promo card). */
  outlined: css`
    background: transparent;
    color: #ffffff;
    border: 2px solid rgba(255, 255, 255, 0.6);
    border-radius: 4px;

    &:hover {
      background: rgba(255, 255, 255, 0.14);
      border-color: #ffffff;
    }
  `,
};

const sizes: Record<ButtonSize, RuleSet<object>> = {
  md: css`
    height: 36px;
    padding: 0 14px;
    font-size: 14px;
  `,
  lg: css`
    height: 44px;
    padding: 0 20px;
    font-size: 16px;
  `,
};

/**
 * The house button. Styling props are transient (`$`-prefixed) so they never
 * leak into the DOM. Renders as a link via `as`: <Button as="a" href="…">.
 */
export const Button = styled.button<{
  $variant?: ButtonVariant;
  $size?: ButtonSize;
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  border: none;
  border-radius: ${({ theme }) => theme.radius.md};
  font-weight: 600;
  line-height: 1;
  cursor: pointer;
  white-space: nowrap;
  transition:
    background 150ms ease-out,
    border-color 150ms ease-out,
    box-shadow 150ms ease-out;

  &:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
  }

  ${({ $size = "lg" }) => sizes[$size]}
  ${({ $variant = "primary" }) => variants[$variant]}
`;
