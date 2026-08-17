"use client";

import styled, { css, keyframes } from "styled-components";
import { ProductMark } from "@/components/icons";
import { PRODUCT_NAME } from "@/theme";
import { NavHeader } from "./NavHeader";

/* All three blobs leave the same pose and drift apart; rotate() sits before
   translate() so each drifts along its own tilted axes. */
const drift1 = keyframes`
  from { transform: rotate(35deg) translate(0, 0) scale(1); opacity: 0.8; }
  to   { transform: rotate(55deg) translate(18px, -14px) scale(1.28); opacity: 1; }
`;

const drift2 = keyframes`
  from { transform: rotate(35deg) translate(0, 0) scale(1); opacity: 0.8; }
  to   { transform: rotate(16deg) translate(-16px, 14px) scale(0.76); opacity: 0.6; }
`;

const drift3 = keyframes`
  from { transform: rotate(35deg) translate(0, 0) scale(1); opacity: 0.8; }
  to   { transform: rotate(50deg) translate(16px, 16px) scale(1.25); opacity: 1; }
`;

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  background: ${({ theme }) => theme.color.surface};
`;

/* 96px grid lines fading out toward the bottom via a radial mask. */
const GridBackdrop = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background-image:
    linear-gradient(
      to right,
      ${({ theme }) => theme.color.borderWarm} 1px,
      transparent 1px
    ),
    linear-gradient(
      to bottom,
      ${({ theme }) => theme.color.borderWarm} 1px,
      transparent 1px
    );
  background-size: 96px 96px;
  background-position: center top;
  mask-image: radial-gradient(
    ellipse 90% 70% at 50% 0%,
    #000 0%,
    transparent 95%
  );
  -webkit-mask-image: radial-gradient(
    ellipse 90% 70% at 50% 0%,
    #000 0%,
    transparent 95%
  );
`;

/* Lifts the nav (and hero content) above the grid layer. */
const Foreground = styled.div`
  position: relative;
  z-index: 2;
`;

const Content = styled(Foreground)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 72px 0;
`;

const MarkScene = styled.div`
  position: relative;
  width: 132px;
  height: 116px;
`;

const blob = css`
  position: absolute;
  border-radius: 50%;
  filter: blur(27px);
  opacity: 0.8;
`;

const BlobPurple = styled.div`
  ${blob};
  left: 10%;
  top: 5%;
  width: 55%;
  height: 70%;
  background: ${({ theme }) => theme.color.purple};
  animation: ${drift1} 4s ease-in-out infinite alternate;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const BlobBlue = styled.div`
  ${blob};
  left: 30%;
  top: 15%;
  width: 45%;
  height: 65%;
  background: ${({ theme }) => theme.color.blue};
  animation: ${drift2} 5s ease-in-out infinite alternate;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const BlobGreen = styled.div`
  ${blob};
  left: 45%;
  top: 25%;
  width: 50%;
  height: 60%;
  background: ${({ theme }) => theme.color.brandBright};
  animation: ${drift3} 6s ease-in-out infinite alternate;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const GlassCard = styled.div`
  position: absolute;
  inset: 20% 25% 20% 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${({ theme }) => theme.radius.xl};
  border: 1px solid rgba(255, 255, 255, 0.6);
  background: linear-gradient(105deg, #ffffff 4%, rgba(255, 255, 255, 0.4) 82%);
  backdrop-filter: blur(3px);
  color: ${({ theme }) => theme.color.brand};
`;

const TextStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 0 32px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 60px;
  font-weight: 700;
  line-height: 72px;
  letter-spacing: -1.2px;
  color: ${({ theme }) => theme.color.ink};

  /* The reference nowraps the headline, which overflows phones — stepping
     down and letting it wrap is the deliberate fix. */
  @media (max-width: ${({ theme }) => theme.bp.md}) {
    font-size: 40px;
    line-height: 48px;
  }
`;

const Subtitle = styled.p`
  max-width: 700px;
  font-size: 20px;
  line-height: 30px;
  color: ${({ theme }) => theme.color.body};
`;

/** Hero: fading grid backdrop, nav, blob-lit product mark, and the headline. */
export function Hero() {
  return (
    <Section>
      <GridBackdrop />
      <Foreground>
        <NavHeader />
      </Foreground>
      <Content>
        <MarkScene>
          <BlobPurple />
          <BlobBlue />
          <BlobGreen />
          <GlassCard>
            <ProductMark size={42} />
          </GlassCard>
        </MarkScene>
        <TextStack>
          <Title>Less clicking, more closing</Title>
          <Subtitle>
            Use {PRODUCT_NAME} AI to power your document workflow. Proposals,
            contracts, and NDAs — drafted, sent, and signed without manual work.
          </Subtitle>
        </TextStack>
      </Content>
    </Section>
  );
}
