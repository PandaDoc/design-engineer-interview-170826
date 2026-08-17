"use client";

import Link from "next/link";
import styled, { keyframes } from "styled-components";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { RotatingText } from "@/components/RotatingText";
import { Wordmark } from "@/components/Wordmark";
import { ArrowRightIcon, ChevronDownIcon } from "@/components/icons";
import { useCycle } from "@/components/useCycle";
import { CONNECTORS } from "@/content/connectors";
import { SKILLS } from "@/content/skills";
import { PRODUCT_NAME } from "@/theme";

const ARCHIVE_HREF = "/skills";
const AGENT = PRODUCT_NAME.toLowerCase();

/** The swappable half of "Skills make … smarter". */
const JOBS = ["sending an NDA", "building a quote", "contract renewals"];

/** The free tier is the hook, so those are the skills the carousel spins. */
const FREE_SKILLS = SKILLS.filter((skill) => skill.plan === "Free");

/** How long one skill holds the middle of the carousel. */
const CENTER_MS = 2000;
const JOB_MS = 2600;
const TOOL_MS = 1800;

/** Token color at reduced alpha — the dark bands reuse brand colors this way. */
const tint = (color: string, pct: number) =>
  `color-mix(in srgb, ${color} ${pct}%, transparent)`;

/* Dots slide down one pitch of the rail's pattern, then repeat seamlessly. */
const flow = keyframes`
  to { background-position-y: 14px; }
`;

/* One ring leaving the hub — two of them, offset, read as a steady pulse. The
   ring is a spreading box-shadow (in currentColor, so the token stays in the
   styled component) rather than a scale, which would skew the rounded corners. */
const pulse = keyframes`
  from { box-shadow: 0 0 0 0 currentColor; opacity: 0.55; }
  to   { box-shadow: 0 0 0 26px currentColor; opacity: 0; }
`;

/* Same dark, glow-lit treatment as the chat showcase band. */
const Band = styled.section`
  position: relative;
  padding-block: 96px;
  overflow: hidden;
  background: ${({ theme }) => theme.color.dark};
`;

const Glow = styled.div`
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
`;

const GlowGreen = styled(Glow)`
  top: -30%;
  left: -15%;
  width: 65%;
  height: 110%;
  background: radial-gradient(
    closest-side,
    ${({ theme }) => tint(theme.color.brandBright, 45)},
    ${({ theme }) => tint(theme.color.brandBright, 20)} 55%,
    transparent
  );
  filter: blur(100px);
`;

const GlowPurple = styled(Glow)`
  right: -15%;
  bottom: -35%;
  width: 70%;
  height: 115%;
  background: radial-gradient(
    closest-side,
    ${({ theme }) => tint(theme.color.purple, 50)},
    ${({ theme }) => tint(theme.color.purple, 22)} 55%,
    transparent
  );
  filter: blur(110px);
`;

const Inner = styled(Container)`
  position: relative; /* paints above the glows */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
`;

/* Not SectionHeader — this headline carries a rotating phrase, not a string. */
const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  max-width: 768px;
  text-align: center;
`;

const Eyebrow = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: ${({ theme }) => theme.color.brandFoam};
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: -0.72px;
  color: #ffffff;

  @media (max-width: ${({ theme }) => theme.bp.md}) {
    font-size: 28px;
    line-height: 36px;
  }
`;

/* brandBright is the green that survives the dark band — `brand` itself sinks
   into it, and 36px/700 clears the 3:1 contrast bar at this value. */
const Job = styled(RotatingText)`
  color: ${({ theme }) => theme.color.brandBright};
`;

const Label = styled.p`
  font-size: 11px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.45);
`;

/* The carousel is one ring of cards seen edge-on: the perspective belongs to
   the viewport, the mask hands the outermost cards off to the page. */
const Carousel = styled.div`
  position: relative;
  width: 100%;
  height: 116px;
  perspective: 760px;
  mask-image: linear-gradient(
    to right,
    transparent,
    #000 18%,
    #000 82%,
    transparent
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    #000 18%,
    #000 82%,
    transparent
  );

  /* Phones have no room for the flanking seats — fade them out sooner. */
  @media (max-width: ${({ theme }) => theme.bp.md}) {
    mask-image: linear-gradient(
      to right,
      transparent,
      #000 32%,
      #000 68%,
      transparent
    );
    -webkit-mask-image: linear-gradient(
      to right,
      transparent,
      #000 32%,
      #000 68%,
      transparent
    );
  }
`;

/* $offset is the card's signed distance from the middle: 0 is front and centre,
   ±1 flanks it, anything further is parked out of sight behind the fade. */
const SkillPill = styled.span<{ $offset: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  max-width: 280px;
  padding: 12px 20px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ $offset }) =>
    $offset === 0 ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.04)"};
  backdrop-filter: blur(4px);
  font-size: 15px;
  line-height: 21px;
  text-align: center;
  /* One fixed step per seat, wider than the cards, so long titles can't crowd
     the middle one — the breakpoint tightens the ring instead of the geometry. */
  --step: 330px;
  transform: translate(-50%, -50%)
    translateX(calc(${({ $offset }) => $offset} * var(--step)))
    translateZ(${({ $offset }) => Math.abs($offset) * -220}px)
    rotateY(${({ $offset }) => $offset * -30}deg);
  opacity: ${({ $offset }) =>
    Math.abs($offset) > 1 ? 0 : Math.abs($offset) === 1 ? 0.5 : 1};
  color: ${({ $offset }) =>
    $offset === 0 ? "#ffffff" : "rgba(255, 255, 255, 0.75)"};
  font-weight: ${({ $offset }) => ($offset === 0 ? 600 : 500)};
  box-shadow: ${({ $offset }) =>
    $offset === 0 ? "0 12px 28px rgba(0, 0, 0, 0.35)" : "none"};
  transition:
    transform 600ms cubic-bezier(0.4, 0, 0.2, 1),
    opacity 600ms ease-out,
    background 600ms ease-out,
    box-shadow 600ms ease-out;

  @media (max-width: ${({ theme }) => theme.bp.md}) {
    --step: 250px;
    max-width: 240px;
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

const RailStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: rgba(255, 255, 255, 0.4);
`;

const Dots = styled.div`
  width: 4px;
  height: 44px;
  border-radius: ${({ theme }) => theme.radius.pill};
  background-image: repeating-linear-gradient(
    to bottom,
    ${({ theme }) => theme.color.brandFoam} 0 6px,
    transparent 6px 14px
  );
  animation: ${flow} 800ms linear infinite;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

/** Dotted rail with an arrowhead: one hop down the chain. */
function Rail() {
  return (
    <RailStack aria-hidden>
      <Dots />
      <ChevronDownIcon size={16} />
    </RailStack>
  );
}

const Hub = styled.div`
  position: relative;
  display: flex;
`;

const Ring = styled.span<{ $delay: string }>`
  position: absolute;
  inset: 0;
  border-radius: ${({ theme }) => theme.radius.lg};
  color: ${({ theme }) => theme.color.brandBright};
  animation: ${pulse} 2400ms ease-out infinite;
  animation-delay: ${({ $delay }) => $delay};
  pointer-events: none;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 0;
  }
`;

/* The one light node in the chain: everything routes through the product. */
const HubCard = styled.div`
  position: relative; /* paints above the rings */
  display: flex;
  align-items: center;
  padding: 12px 20px;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.surface};
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  transition: box-shadow 150ms ease-out;
`;

const Cli = styled.div`
  width: 100%;
  max-width: 420px;
  border-radius: ${({ theme }) => theme.radius.xl};
  background: ${({ theme }) => theme.color.darkPanel};
  box-shadow:
    0 24px 48px -12px rgba(0, 0, 0, 0.5),
    0 0 0 1px rgba(255, 255, 255, 0.08);
  overflow: hidden;
  transition:
    transform 150ms ease-out,
    box-shadow 150ms ease-out;
`;

const CliBar = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 14px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  background: rgba(255, 255, 255, 0.03);
`;

const Light = styled.span<{ $color: string }>`
  width: 9px;
  height: 9px;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ $color }) => $color};
`;

const CliTitle = styled.span`
  margin-left: auto;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 11px;
  font-weight: 500;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.45);
`;

const CliBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px;
  font-family: ${({ theme }) => theme.font.mono};
  font-size: 13px;
  line-height: 20px;
`;

const CliLine = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
  color: rgba(255, 255, 255, 0.5);
`;

const Prompt = styled.span`
  color: ${({ theme }) => theme.color.brandFoam};
`;

const Command = styled.span`
  color: rgba(255, 255, 255, 0.9);
`;

/* The tools stack in one grid cell, so the line holds its width while they
   cross-fade — the incoming name rises into the slot the outgoing one leaves. */
const ToolSlot = styled.span`
  display: inline-grid;
  justify-items: start;
`;

const Tool = styled.span<{ $offset: number }>`
  grid-area: 1 / 1;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-weight: 600;
  color: #ffffff;
  white-space: nowrap;
  opacity: ${({ $offset }) => ($offset === 0 ? 1 : 0)};
  transform: translateY(${({ $offset }) => $offset * 8}px);
  transition:
    opacity 450ms ease-out,
    transform 450ms cubic-bezier(0.4, 0, 0.2, 1);

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    transform: none;
  }
`;

/* One link over the whole diagram: hovering anywhere lifts the entire chain. */
const Flow = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
  border-radius: ${({ theme }) => theme.radius.xl};
  text-decoration: none;

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.color.brandFoam};
    outline-offset: 16px;
  }

  &:hover ${HubCard} {
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.32);
  }

  &:hover ${Cli} {
    transform: translateY(-2px);
    box-shadow:
      0 32px 64px -12px rgba(0, 0, 0, 0.55),
      0 0 0 1px ${({ theme }) => tint(theme.color.brandBright, 35)};
  }
`;

/** Signed distance from the active index around a ring of `total` items. */
function ringOffset(index: number, active: number, total: number) {
  const half = Math.floor(total / 2);
  let offset = index - active;
  if (offset > half) offset -= total;
  if (offset < -half) offset += total;
  return offset;
}

/**
 * Skills band: a rotating headline over the chain that runs a skill — free
 * skills on a perspective carousel, down the rails through {PRODUCT_NAME},
 * out to whichever CLI is listening. The whole diagram links to the archive.
 */
export function SkillsBand() {
  const skill = useCycle(FREE_SKILLS.length, CENTER_MS);
  const tool = useCycle(CONNECTORS.length, TOOL_MS);

  return (
    <Band id="skills">
      <GlowGreen />
      <GlowPurple />
      <Inner>
        <Header>
          <Eyebrow>Skills</Eyebrow>
          <Title>
            Skills make <Job items={JOBS} interval={JOB_MS} /> smarter
          </Title>
        </Header>

        <Flow
          href={ARCHIVE_HREF}
          aria-label={`Browse all ${SKILLS.length} skills`}
        >
          <Label>Free skills</Label>
          <Carousel>
            {FREE_SKILLS.map((item, i) => (
              <SkillPill
                key={item.id}
                $offset={ringOffset(i, skill, FREE_SKILLS.length)}
              >
                {item.title}
              </SkillPill>
            ))}
          </Carousel>

          <Rail />

          <Hub>
            <Ring $delay="0ms" />
            <Ring $delay="1200ms" />
            <HubCard>
              <Wordmark />
            </HubCard>
          </Hub>

          <Rail />

          <Cli>
            <CliBar>
              {/* macOS traffic lights — OS colors, not theme tokens */}
              <Light $color="#ff5f57" />
              <Light $color="#febc2e" />
              <Light $color="#28c840" />
              <CliTitle>CLI</CliTitle>
            </CliBar>
            <CliBody>
              <CliLine>
                <Prompt>$</Prompt>
                <Command>{AGENT} skills run</Command>
              </CliLine>
              <CliLine>
                <ArrowRightIcon size={13} />
                ready in
                <ToolSlot>
                  {CONNECTORS.map((connector, i) => (
                    <Tool
                      key={connector.id}
                      $offset={ringOffset(i, tool, CONNECTORS.length)}
                      aria-hidden={i !== tool}
                    >
                      <connector.Mark size={15} color={connector.accent} />
                      {connector.name}
                    </Tool>
                  ))}
                </ToolSlot>
              </CliLine>
            </CliBody>
          </Cli>
        </Flow>

        {/* `outlined` is the variant meant for dark surfaces. */}
        <Button as={Link} href={ARCHIVE_HREF} $variant="outlined">
          Read more
        </Button>
      </Inner>
    </Band>
  );
}
