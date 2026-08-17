"use client";

import type { ComponentType } from "react";
import styled from "styled-components";
import { Container } from "@/components/Container";
import {
  ChevronDownIcon,
  DesktopGlyph,
  GlobeIcon,
  GlyphDiamond,
  GlyphDots,
  GlyphGrid,
  GlyphRing,
  GlyphWave,
  MobileGlyph,
} from "@/components/icons";
import { PRODUCT_NAME } from "@/theme";

const COLUMNS: { title: string; links: string[] }[] = [
  {
    title: "Product",
    links: ["Pricing", "Integrations", "Features", "Updates", "Security", "HIPAA"],
  },
  {
    title: "Use cases",
    links: [
      "Proposals",
      "eSignatures",
      "Quotes",
      "Contracts",
      "Payments",
      "Forms",
      "Notary",
      "API",
      "CPQ",
      "Workspaces",
      "All use cases ›",
    ],
  },
  {
    title: "Resources",
    links: [
      "Help center",
      "Templates",
      "Blog",
      "Electronic signature law",
      "How to guides",
      "Developer center",
      "System status",
      "Onboarding services",
      "Partner directory",
      "Community",
    ],
  },
  {
    title: "Compare",
    links: [
      "vs InkSign",
      "vs PaperTrail",
      "vs SignDesk",
      "vs QuillPort",
      "vs DraftHub",
      "All alternatives ›",
    ],
  },
  {
    title: "Company",
    links: [
      "About us",
      "Culture",
      "Careers",
      "Become a partner",
      "Press",
      "Contact us",
    ],
  },
];

const LEGAL_LINKS = [
  "Terms of Use",
  "Privacy Policy",
  "Cookie Settings",
  "Notice at Collection",
  "Do Not Sell My Info",
  "Accessibility",
];

const COMPLIANCE_LABELS = ["HIPAA", "SOC 2", "GDPR", "eIDAS"];

const SOCIAL_MARKS: ComponentType<{ size?: number }>[] = [
  GlyphRing,
  GlyphDots,
  GlyphWave,
  GlyphGrid,
  GlyphDiamond,
];

const Footer = styled.footer`
  width: 100%;
  background: ${({ theme }) => theme.color.surface};
  border-top: 1px solid ${({ theme }) => theme.color.borderWarm};
`;

const Inner = styled(Container)`
  display: flex;
  flex-direction: column;
  gap: 48px;
  padding-block: 64px 40px;
`;

const ColumnGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 32px;

  @media (max-width: ${({ theme }) => theme.bp.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    grid-template-columns: 1fr;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
`;

const ColumnTitle = styled.p`
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
  color: ${({ theme }) => theme.color.ink};
`;

/* Every footer link is a stub, so they render as buttons, not dead anchors. */
const LinkButton = styled.button`
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
`;

const ColumnLink = styled(LinkButton)`
  font-size: 15px;
  line-height: 20px;
  color: ${({ theme }) => theme.color.body};
  white-space: nowrap;
`;

const BadgeRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
`;

const StoreGroup = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
`;

const StorePill = styled(LinkButton)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 0 14px;
  border-radius: ${({ theme }) => theme.radius.md};
  background: ${({ theme }) => theme.color.ink};
  color: #ffffff;
`;

const PillLabel = styled.span`
  display: flex;
  flex-direction: column;
  line-height: 1;
`;

const PillHint = styled.span`
  font-size: 8px;
  opacity: 0.8;
`;

const PillName = styled.span`
  font-size: 13px;
  font-weight: 600;
`;

const ComplianceGroup = styled.div`
  display: flex;
  gap: 10px;
`;

const ComplianceSeal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: ${({ theme }) => theme.radius.pill};
  /* Not a theme color: this navy appears only on the footer's compliance seals. */
  background: #1e3a5f;
  color: #ffffff;
  font-size: 8px;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-align: center;
`;

const Divider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.color.borderWarm};
`;

const BottomStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Copyright = styled.p`
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.color.muted};
`;

const BottomRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  flex-wrap: wrap;
`;

const LegalLinks = styled.div`
  display: flex;
  gap: 24px;
  flex-wrap: wrap;
`;

const LegalLink = styled(LinkButton)`
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.color.muted};
`;

const LocaleGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const SocialRow = styled.div`
  display: flex;
  gap: 16px;
`;

const SocialButton = styled(LinkButton)`
  display: flex;
  color: ${({ theme }) => theme.color.ink};
`;

const LocaleButton = styled(LinkButton)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
  color: ${({ theme }) => theme.color.ink};
`;

/** Site-wide footer: link columns, app pills, compliance seals, legal row. */
export function SiteFooter() {
  return (
    <Footer>
      <Inner>
        <ColumnGrid>
          {COLUMNS.map((col) => (
            <Column key={col.title}>
              <ColumnTitle>{col.title}</ColumnTitle>
              {col.links.map((link) => (
                <ColumnLink key={link}>{link}</ColumnLink>
              ))}
            </Column>
          ))}
        </ColumnGrid>

        <BadgeRow>
          <StoreGroup>
            <StorePill>
              <DesktopGlyph size={18} />
              <PillLabel>
                <PillHint>Get the</PillHint>
                <PillName>Desktop app</PillName>
              </PillLabel>
            </StorePill>
            <StorePill>
              <MobileGlyph size={18} />
              <PillLabel>
                <PillHint>Get the</PillHint>
                <PillName>Mobile app</PillName>
              </PillLabel>
            </StorePill>
          </StoreGroup>
          <ComplianceGroup>
            {COMPLIANCE_LABELS.map((label) => (
              <ComplianceSeal key={label}>{label}</ComplianceSeal>
            ))}
          </ComplianceGroup>
        </BadgeRow>

        <Divider />

        <BottomStack>
          <Copyright>© 2026 {PRODUCT_NAME}, Inc. All rights reserved.</Copyright>
          <BottomRow>
            <LegalLinks>
              {LEGAL_LINKS.map((link) => (
                <LegalLink key={link}>{link}</LegalLink>
              ))}
            </LegalLinks>
            <LocaleGroup>
              <SocialRow>
                {SOCIAL_MARKS.map((Mark, i) => {
                  const label = `Social link ${i + 1}`;
                  return (
                    <SocialButton key={label} aria-label={label}>
                      <Mark size={20} />
                    </SocialButton>
                  );
                })}
              </SocialRow>
              <LocaleButton>
                <GlobeIcon size={18} />
                English (United States)
                <ChevronDownIcon size={16} />
              </LocaleButton>
            </LocaleGroup>
          </BottomRow>
        </BottomStack>
      </Inner>
    </Footer>
  );
}
