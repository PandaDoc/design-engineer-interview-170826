"use client";

import { useState } from "react";
import styled from "styled-components";
import { Accordion } from "@/components/Accordion";
import { Button } from "@/components/Button";
import { Card } from "@/components/Card";
import { Chip } from "@/components/Chip";
import { ConnectorCard } from "@/components/ConnectorCard";
import { Container } from "@/components/Container";
import { SearchInput } from "@/components/SearchInput";
import { SectionHeader } from "@/components/SectionHeader";
import { SkillCard } from "@/components/SkillCard";
import { Wordmark } from "@/components/Wordmark";
import * as icons from "@/components/icons";
import { CONNECTORS } from "@/content/connectors";
import { theme } from "@/theme";

const Page = styled.main`
  padding: 64px 0 96px;
  display: flex;
  flex-direction: column;
  gap: 56px;
`;

const H1 = styled.h1`
  font-size: 36px;
  font-weight: 700;
  letter-spacing: -0.72px;
  color: ${({ theme }) => theme.color.ink};
`;

const Intro = styled.p`
  margin-top: 8px;
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.color.body};
`;

const Group = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Label = styled.h2`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.muted};
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px;
`;

const DarkStrip = styled(Row)`
  padding: 16px;
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.color.dark};
`;

const DemoCard = styled(Card)`
  padding: 24px;
  max-width: 280px;
  font-size: 14px;
  color: ${({ theme }) => theme.color.body};
`;

const Swatch = styled.div<{ $bg: string }>`
  width: 120px;
  font-size: 12px;
  color: ${({ theme }) => theme.color.body};

  &::before {
    content: "";
    display: block;
    height: 48px;
    margin-bottom: 6px;
    border-radius: ${({ theme }) => theme.radius.md};
    border: 1px solid ${({ theme }) => theme.color.border};
    background: ${({ $bg }) => $bg};
  }
`;

const TypeSpecimen = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  color: ${({ theme }) => theme.color.ink};
`;

const TypeRow = styled.p<{ $size: number; $lh: number; $weight: number }>`
  font-size: ${({ $size }) => $size}px;
  line-height: ${({ $lh }) => $lh}px;
  font-weight: ${({ $weight }) => $weight};
`;

const Narrow = styled.div<{ $max: number }>`
  max-width: ${({ $max }) => $max}px;
`;

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const IconCell = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  width: 96px;
  font-size: 11px;
  color: ${({ theme }) => theme.color.muted};
`;

const FAQ_DEMO = [
  { title: "What is this page?", body: "A live inventory of the base kit. Everything here is built from src/components and src/theme.ts." },
  { title: "Can I change these components?", body: "Yes — they're a starting point, not a contract. Extend or restyle them as your design needs." },
];

const TYPE_SCALE: Array<[string, number, number, number]> = [
  // label, size, line-height, weight
  ["display 60/72 · 700", 60, 72, 700],
  ["h2 36/44 · 700", 36, 44, 700],
  ["lead 20/30 · 400", 20, 30, 400],
  ["body 16/24 · 400", 16, 24, 400],
  ["small 14/20 · 400", 14, 20, 400],
  ["caption 13/20 · 400", 13, 20, 400],
];

export default function ComponentsPage() {
  const [query, setQuery] = useState("");
  const demo = CONNECTORS[0];

  return (
    <Container>
      <Page>
        <div>
          <H1>Component kit</H1>
          <Intro>
            Every building block in the scaffold, in one place. Tokens live in{" "}
            <code>src/theme.ts</code>; components in <code>src/components</code>.
          </Intro>
        </div>

        <Group>
          <Label>Buttons — $variant × $size</Label>
          <Row>
            <Button>Primary lg</Button>
            <Button $size="md">Primary md</Button>
            <Button $variant="secondary">Secondary lg</Button>
            <Button $variant="secondary" $size="md">Secondary md</Button>
            <Button $variant="ghost">Ghost lg</Button>
            <Button $variant="ghost" $size="md">Ghost md</Button>
            <Button as="a" href="#" $variant="secondary" $size="md">
              As a link
            </Button>
          </Row>
          <DarkStrip>
            <Button $variant="outlined">Outlined — for dark surfaces</Button>
          </DarkStrip>
        </Group>

        <Group>
          <Label>Chip</Label>
          <Row>
            <Chip href="#">
              <icons.ToolMarkAsterisk size={16} /> Add to Claude
            </Chip>
            <Chip as="button" type="button">
              As a button
            </Chip>
          </Row>
        </Group>

        <Group>
          <Label>Card — default / $tinted / $interactive</Label>
          <Row>
            <DemoCard>Default surface card.</DemoCard>
            <DemoCard $tinted>Tinted — for white backgrounds.</DemoCard>
            <DemoCard $interactive>Interactive — hover me.</DemoCard>
          </Row>
        </Group>

        <Group>
          <Label>ConnectorCard</Label>
          <Row>
            <Narrow $max={320}>
              <ConnectorCard
                icon={<demo.Mark size={28} color={demo.accent} />}
                name={demo.name}
                category={demo.category}
                desc={demo.desc}
              />
            </Narrow>
          </Row>
        </Group>

        <Group>
          <Label>SkillCard — Free / Business / Enterprise</Label>
          <Narrow $max={560}>
            <Stack>
              <SkillCard
                title="Send an NDA in one motion"
                subtitle="Get an NDA signed before the call ends."
                team="Sales"
                plan="Free"
                whoRunsIt="Sales rep"
              />
              <SkillCard
                title="Build and send a quote or proposal"
                subtitle="Turn agreed pricing into something the customer can sign."
                team="Sales"
                plan="Business"
                whoRunsIt="Sales rep"
              />
              <SkillCard
                title="Review and respond to counterparty redlines"
                subtitle="Handle the other side’s edits in one place."
                team="Legal"
                plan="Enterprise"
                whoRunsIt="Legal counsel"
              />
            </Stack>
          </Narrow>
        </Group>

        <Group>
          <Label>SearchInput — controlled</Label>
          <Narrow $max={320}>
            <SearchInput value={query} onChange={setQuery} placeholder="Type to test…" />
          </Narrow>
          {query && <Intro>value: “{query}”</Intro>}
        </Group>

        <Group>
          <Label>Accordion</Label>
          <Narrow $max={560}>
            <Accordion items={FAQ_DEMO} />
          </Narrow>
        </Group>

        <Group>
          <Label>SectionHeader</Label>
          <SectionHeader eyebrow="Eyebrow" title="A centered section heading" />
        </Group>

        <Group>
          <Label>Wordmark & icons</Label>
          <Row>
            <Wordmark />
          </Row>
          <Row>
            {Object.entries(icons).map(([name, Icon]) => (
              <IconCell key={name}>
                <Icon size={22} />
                {name}
              </IconCell>
            ))}
          </Row>
        </Group>

        <Group>
          <Label>Theme colors</Label>
          <Row>
            {Object.entries(theme.color).map(([name, value]) => (
              <Swatch key={name} $bg={value}>
                {name}
                <br />
                {value}
              </Swatch>
            ))}
          </Row>
        </Group>

        <Group>
          <Label>Type scale</Label>
          <TypeSpecimen>
            {TYPE_SCALE.map(([label, size, lh, weight]) => (
              <TypeRow key={label} $size={size} $lh={lh} $weight={weight}>
                {label}
              </TypeRow>
            ))}
          </TypeSpecimen>
        </Group>
      </Page>
    </Container>
  );
}
