"use client";

import styled from "styled-components";

/** Page shell: caps content at 1440px with responsive gutters. */
export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin-inline: auto;
  padding-inline: 32px;

  @media (max-width: ${({ theme }) => theme.bp.lg}) {
    padding-inline: 16px;
  }
`;
