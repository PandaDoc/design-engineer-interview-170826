"use client";

import styled, { keyframes } from "styled-components";
import { Button } from "@/components/Button";
import { PRODUCT_NAME } from "@/theme";

/* translate3d comes before the Figma rotate/skew so the sweep runs in screen
   space rather than along the rotated axis. */
const drift = keyframes`
  0%, 100% {
    transform: translate3d(0, 0, 0) rotate(141.4deg) skewX(-1deg) scale(1);
    opacity: 0.7;
  }
  35% {
    transform: translate3d(75%, 22%, 0) rotate(141.4deg) skewX(-1deg) scale(1.35);
    opacity: 1;
  }
  70% {
    transform: translate3d(22%, -14%, 0) rotate(141.4deg) skewX(-1deg) scale(1.1);
    opacity: 0.85;
  }
`;

const Panel = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  border-radius: ${({ theme }) => theme.radius.xl};
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.color.brand} 0%,
    ${({ theme }) => theme.color.brandBright} 100%
  );
`;

const Glow = styled.div`
  position: absolute;
  left: -32.6%;
  top: -55.7%;
  width: 46.4%;
  height: 96.3%;
  border-radius: 300px;
  background: ${({ theme }) => theme.color.purple};
  filter: blur(124px);
  pointer-events: none;
  will-change: transform, opacity;
  animation: ${drift} 9s ease-in-out infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Inner = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  padding: 32px 40px;

  @media (max-width: ${({ theme }) => theme.bp.md}) {
    flex-direction: column;
    align-items: flex-start;
    padding: 32px;
  }
`;

const Copy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  max-width: 560px;
`;

const Title = styled.p`
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
  color: #ffffff;
`;

const Subtitle = styled.p`
  font-size: 18px;
  line-height: 28px;
  color: ${({ theme }) => theme.color.brandFoam};
`;

const Cta = styled(Button)`
  margin-top: 16px;
`;

/* Decorative stand-in for the reference's PNG composition. */
const Art = styled.svg`
  flex-shrink: 0;
  color: ${({ theme }) => theme.color.brandFoam};
`;

/** Gradient signup promo: copy + CTA left, document-and-spark art right. */
export function SignupPromoCard() {
  return (
    <Panel>
      <Glow />
      <Inner>
        <Copy>
          <Title>Create a free {PRODUCT_NAME} account</Title>
          <Subtitle>
            For small businesses who need professional eSign without the price
            tag.
          </Subtitle>
          <Cta $variant="outlined">Start for free</Cta>
        </Copy>
        <Art width={166} height={127} viewBox="0 0 166 127" fill="none" aria-hidden>
          <rect
            x="14"
            y="30"
            width="70"
            height="90"
            rx="8"
            transform="rotate(-8 14 30)"
            fill="#fff"
            opacity="0.16"
          />
          <rect x="64" y="16" width="76" height="100" rx="8" fill="#fff" opacity="0.3" />
          <path
            d="M78 36h48M78 52h48M78 68h30"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.7"
          />
          <path
            d="M146 2c.7 6.5 5.5 11.3 12 12-6.5.7-11.3 5.5-12 12-.7-6.5-5.5-11.3-12-12 6.5-.7 11.3-5.5 12-12Z"
            fill="#fff"
            opacity="0.9"
          />
        </Art>
      </Inner>
    </Panel>
  );
}
