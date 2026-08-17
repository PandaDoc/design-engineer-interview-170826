"use client";

import styled from "styled-components";
import { PRODUCT_NAME } from "@/theme";
import { ConnectorCard } from "@/components/ConnectorCard";
import { Container } from "@/components/Container";
import { SectionHeader } from "@/components/SectionHeader";
import { CONNECTORS } from "@/content/connectors";

const Band = styled.section`
  background: ${({ theme }) => theme.color.sand};
  border-top: 1px solid ${({ theme }) => theme.color.borderWarm};
  padding-block: 96px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* Row gap is 64 (not 32) because each card's icon tile floats 32px above it. */
  row-gap: 64px;
  column-gap: 32px;
  margin-top: 64px;
`;

const Cell = styled.div`
  /* grid so the card stretches to fill the cell in both axes */
  display: grid;
  flex: 1 0 0;
  min-width: 280px;
`;

export function ConnectorsBand() {
  return (
    <Band>
      <Container>
        <SectionHeader
          eyebrow="Connectors"
          title={`Connect ${PRODUCT_NAME} to the AI tools you already use`}
        />
        <Row>
          {CONNECTORS.map((c) => (
            <Cell key={c.id}>
              <ConnectorCard
                icon={<c.Mark size={28} color={c.accent} />}
                name={c.name}
                desc={c.desc}
              />
            </Cell>
          ))}
        </Row>
      </Container>
    </Band>
  );
}
