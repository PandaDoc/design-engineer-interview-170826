"use client";

import styled from "styled-components";

const Stack = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  max-width: 768px;
  margin-inline: auto;
  text-align: center;
`;

const Eyebrow = styled.p`
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: ${({ theme }) => theme.color.brandHover};
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: -0.72px;
  color: ${({ theme }) => theme.color.ink};

  @media (max-width: ${({ theme }) => theme.bp.md}) {
    font-size: 28px;
    line-height: 36px;
  }
`;

/** Green eyebrow + section heading, centered. */
export function SectionHeader({
  eyebrow,
  title,
}: {
  eyebrow?: string;
  title: string;
}) {
  return (
    <Stack>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Title>{title}</Title>
    </Stack>
  );
}
