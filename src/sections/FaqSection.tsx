"use client";

import styled from "styled-components";
import { Accordion, type AccordionItem } from "@/components/Accordion";
import { Container } from "@/components/Container";
import { PRODUCT_NAME } from "@/theme";
import { SignupPromoCard } from "./SignupPromoCard";

const FAQ_ITEMS: AccordionItem[] = [
  {
    title: "What is a prompt?",
    body: `A prompt is a set of instructions you give to an AI tool — like ChatGPT, Claude, or Cursor — telling it exactly what to do. Copy a prompt into your AI tool of choice, or connect it to ${PRODUCT_NAME} to run it directly from your workspace.`,
  },
  {
    title: "What is a skill?",
    body: `A skill is a pre-built AI prompt designed to help you complete a specific task — like drafting a proposal, summarizing a contract, or generating a follow-up email. You can copy a skill's prompt directly into your AI tool of choice, or connect it to ${PRODUCT_NAME} to run it right from your workspace.`,
  },
  {
    title: "How can I connect my tool?",
    body: "You can connect your tools via the Connectors section. We support native integrations with CRMs, communication tools, and more.",
  },
  {
    title: `What can ${PRODUCT_NAME} AI do for my team?`,
    body: `${PRODUCT_NAME} AI helps your team automate document creation, extract key information from contracts, and streamline approval workflows — saving hours of manual work every week.`,
  },
  {
    title: "What are agents?",
    body: "Agents are automated AI workflows that can run on a schedule or in response to triggers, performing multi-step tasks like drafting proposals, monitoring document status, or generating reports.",
  },
  {
    title: `How can I learn more about how to use AI with ${PRODUCT_NAME}?`,
    body: `Visit our resources section for guides, tutorials, and webinars on how to make the most of AI features in ${PRODUCT_NAME}.`,
  },
];

const Section = styled.section`
  padding: 96px 0;
  background: ${({ theme }) => theme.color.surface};
  border-top: 1px solid ${({ theme }) => theme.color.borderWarm};
`;

const Inner = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
`;

/* Not SectionHeader — this heading has no eyebrow. */
const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: -0.72px;
  text-align: center;
  color: ${({ theme }) => theme.color.ink};

  @media (max-width: ${({ theme }) => theme.bp.md}) {
    font-size: 28px;
    line-height: 36px;
  }
`;

const Column = styled.div`
  width: 100%;
  max-width: 768px;
`;

export function FaqSection() {
  return (
    <Section id="faq">
      <Inner>
        <Title>Frequently asked questions</Title>
        <Column>
          <Accordion items={FAQ_ITEMS} />
        </Column>
        <SignupPromoCard />
      </Inner>
    </Section>
  );
}
