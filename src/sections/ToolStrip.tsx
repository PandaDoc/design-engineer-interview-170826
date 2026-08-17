"use client";

import type { ComponentType } from "react";
import styled from "styled-components";
import { Chip } from "@/components/Chip";
import { Container } from "@/components/Container";
import {
  ToolMarkAsterisk,
  ToolMarkBrackets,
  ToolMarkOrbit,
  ToolMarkPrism,
} from "@/components/icons";
import { PRODUCT_NAME } from "@/theme";

const TOOLS: {
  name: string;
  Mark: ComponentType<{ size?: number; color?: string }>;
  /** Evocative of the tool's brand — deliberately not theme tokens. */
  accent: string;
}[] = [
  { name: "Claude", Mark: ToolMarkAsterisk, accent: "#d97757" },
  { name: "ChatGPT", Mark: ToolMarkOrbit, accent: "#10a37f" },
  { name: "Cursor", Mark: ToolMarkPrism, accent: "#7c9cf5" },
  { name: "VS Code", Mark: ToolMarkBrackets, accent: "#007acc" },
];

const Strip = styled.section`
  padding: 32px 0;
  background: ${({ theme }) => theme.color.surface};
  border-bottom: 1px solid ${({ theme }) => theme.color.sandHover};
`;

const Row = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const Label = styled.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: ${({ theme }) => theme.color.muted};
  white-space: nowrap;
`;

const Divider = styled.div`
  width: 1px;
  height: 20px;
  flex-shrink: 0;
  background: ${({ theme }) => theme.color.border};

  @media (max-width: ${({ theme }) => theme.bp.md}) {
    display: none;
  }
`;

const Chips = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

/** Thin "works with your tools" strip: label, divider, add-to-tool chips. */
export function ToolStrip() {
  return (
    <Strip>
      <Row>
        <Label>{PRODUCT_NAME} works with your tools</Label>
        <Divider />
        <Chips>
          {TOOLS.map(({ name, Mark, accent }) => (
            <Chip key={name} href="#">
              <Mark size={16} color={accent} />
              Add to {name}
            </Chip>
          ))}
        </Chips>
      </Row>
    </Strip>
  );
}
