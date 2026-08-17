"use client";

import Link from "next/link";
import styled from "styled-components";
import { Container } from "@/components/Container";
import { SkillDetail } from "@/components/SkillDetail";
import type { Skill } from "@/content/skills";
import { NavHeader } from "./NavHeader";
import { SiteFooter } from "./SiteFooter";

const Main = styled.main`
  padding: 64px 0 96px;
  background: ${({ theme }) => theme.color.surface};
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  max-width: 768px;
  margin-inline: auto;
`;

const Back = styled(Link)`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: ${({ theme }) => theme.color.brand};

  &:hover {
    color: ${({ theme }) => theme.color.brandHover};
  }
`;

/** Standalone skill page: nav, article, footer. */
export function SkillArticle({ skill }: { skill: Skill }) {
  return (
    <>
      <NavHeader />
      <Main>
        <Container>
          <Column>
            <Back href="/skills">All skills</Back>
            <SkillDetail skill={skill} />
          </Column>
        </Container>
      </Main>
      <SiteFooter />
    </>
  );
}
