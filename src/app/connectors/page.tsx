"use client";

import { useState } from "react";
import styled from "styled-components";
import { Button } from "@/components/Button";
import { ConnectorCard } from "@/components/ConnectorCard";
import { Container } from "@/components/Container";
import { SearchInput } from "@/components/SearchInput";
import { CONNECTORS } from "@/content/connectors";
import { NavHeader } from "@/sections/NavHeader";
import { SiteFooter } from "@/sections/SiteFooter";
import { PRODUCT_NAME } from "@/theme";

const Hero = styled.section`
  background: ${({ theme }) => theme.color.brand};
  padding: 96px 0;
`;

const HeroStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  text-align: center;
`;

const HeroText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: 768px;
`;

const Eyebrow = styled.p`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${({ theme }) => theme.color.brandFoam};
`;

const Title = styled.h1`
  margin-top: 12px;
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -0.8px;
  color: #ffffff;

  @media (max-width: ${({ theme }) => theme.bp.md}) {
    font-size: 32px;
    line-height: 40px;
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  line-height: 27px;
  color: ${({ theme }) => theme.color.brandFoam};
`;

const SearchBox = styled.div`
  width: 100%;
  max-width: 480px;
  box-shadow: ${({ theme }) => theme.shadow.sm};
  border-radius: ${({ theme }) => theme.radius.md};
`;

const GridSection = styled.section`
  padding: 64px 0 96px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px 24px;

  @media (max-width: ${({ theme }) => theme.bp.lg}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${({ theme }) => theme.bp.sm}) {
    grid-template-columns: 1fr;
  }
`;

const CtaRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: auto;
  padding-top: 8px;
`;

const EmptyState = styled.p`
  padding: 64px 0;
  text-align: center;
  font-size: 16px;
  color: ${({ theme }) => theme.color.muted};
`;

// A worked example of interactive state under SSG: a controlled input
// deriving a filtered list, entirely client-side.
export default function ConnectorsPage() {
  const [query, setQuery] = useState("");

  const q = query.toLowerCase();
  const filtered = CONNECTORS.filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.category.toLowerCase().includes(q) ||
      c.desc.toLowerCase().includes(q),
  );

  return (
    <>
      <NavHeader />
      <Hero>
        <Container>
          <HeroStack>
            <HeroText>
              <Eyebrow>Connectors</Eyebrow>
              <Title>Connect {PRODUCT_NAME} to the tools you use</Title>
              <Subtitle>
                Add the {PRODUCT_NAME} MCP to your AI client and start
                automating document workflows with a single prompt.
              </Subtitle>
            </HeroText>
            <SearchBox>
              <SearchInput
                value={query}
                onChange={setQuery}
                placeholder="Search connectors..."
                aria-label="Search connectors"
              />
            </SearchBox>
          </HeroStack>
        </Container>
      </Hero>

      <GridSection>
        <Container>
          {filtered.length > 0 ? (
            <Grid>
              {filtered.map((c) => (
                <ConnectorCard
                  key={c.id}
                  tinted
                  icon={<c.Mark size={28} color={c.accent} />}
                  name={c.name}
                  category={c.category}
                  desc={c.desc}
                  footer={
                    // Candidate hook: wire these up to a connector detail page.
                    <CtaRow>
                      <Button $variant="secondary" $size="md">
                        Connect
                      </Button>
                      <Button $variant="ghost" $size="md">
                        Learn more
                      </Button>
                    </CtaRow>
                  }
                />
              ))}
            </Grid>
          ) : (
            <EmptyState>
              No connectors found for &ldquo;{query}&rdquo;
            </EmptyState>
          )}
        </Container>
      </GridSection>

      <SiteFooter />
    </>
  );
}
