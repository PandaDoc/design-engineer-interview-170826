"use client";

import styled from "styled-components";
import { PRODUCT_NAME } from "@/theme";
import { ProductMark } from "./icons";

const Row = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

const Tile = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  border-radius: ${({ theme }) => theme.radius.md};
  color: #ffffff;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.color.purple} 0%,
    ${({ theme }) => theme.color.blue} 55%,
    ${({ theme }) => theme.color.brandBright} 100%
  );
`;

const Name = styled.span`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.2px;
  color: ${({ theme }) => theme.color.ink};
`;

/** The product logo: gradient tile + name. */
export function Wordmark() {
  return (
    <Row>
      <Tile>
        <ProductMark size={16} />
      </Tile>
      <Name>{PRODUCT_NAME}</Name>
    </Row>
  );
}
