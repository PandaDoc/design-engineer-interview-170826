"use client";

import Link from "next/link";
import styled from "styled-components";
import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { SearchInput } from "@/components/SearchInput";
import { Wordmark } from "@/components/Wordmark";

const Bar = styled.header`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
  height: 80px;
  /* Transparent on purpose: the bar sits on the hero's grid backdrop. */
  background: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.color.sandHover};
`;

const Row = styled(Container)`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  text-decoration: none;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2px;
  flex: 1;
  margin-left: 12px;

  @media (max-width: ${({ theme }) => theme.bp.md}) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  padding: 4px 6px;
  border-radius: ${({ theme }) => theme.radius.md};
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: ${({ theme }) => theme.color.inkSoft};
  white-space: nowrap;
  text-decoration: none;
  transition: background 150ms ease-out;

  &:hover {
    background: rgba(28, 25, 23, 0.06);
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
`;

const SearchBox = styled.div`
  width: 220px;

  @media (max-width: ${({ theme }) => theme.bp.md}) {
    display: none;
  }
`;

const LoginButton = styled(Button)`
  @media (max-width: ${({ theme }) => theme.bp.md}) {
    display: none;
  }
`;

export function NavHeader() {
  return (
    <Bar>
      <Row>
        <LogoLink href="/">
          <Wordmark />
        </LogoLink>
        <Nav>
          <NavLink href="/skills">Skills</NavLink>
          <NavLink href="/connectors">Connectors</NavLink>
        </Nav>
        <Actions>
          <SearchBox>
            <SearchInput placeholder="Search" />
          </SearchBox>
          <LoginButton $variant="ghost">Log in</LoginButton>
          <Button $variant="primary">Create free account</Button>
        </Actions>
      </Row>
    </Bar>
  );
}
