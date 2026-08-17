"use client";

import { useState } from "react";
import styled from "styled-components";
import { MinusCircleIcon, PlusCircleIcon } from "./icons";

const Item = styled.div<{ $first?: boolean }>`
  border-top: ${({ $first, theme }) =>
    $first ? "none" : `1px solid ${theme.color.borderWarm}`};
`;

const Row = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  width: 100%;
  padding: 24px 0;
  border: none;
  background: none;
  cursor: pointer;
  text-align: left;
  color: ${({ theme }) => theme.color.faint};
`;

const Question = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 19px;
  color: ${({ theme }) => theme.color.ink};
`;

const Answer = styled.p`
  padding-bottom: 24px;
  font-size: 14px;
  line-height: 21px;
  color: ${({ theme }) => theme.color.body};
`;

export type AccordionItem = { title: string; body: string };

/** Single-open accordion (the FAQ pattern). First item open by default. */
export function Accordion({
  items,
  defaultOpen = 0,
}: {
  items: AccordionItem[];
  defaultOpen?: number | null;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <Item key={item.title} $first={i === 0}>
            <Row
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <Question>{item.title}</Question>
              {isOpen ? <MinusCircleIcon /> : <PlusCircleIcon />}
            </Row>
            {isOpen && <Answer>{item.body}</Answer>}
          </Item>
        );
      })}
    </div>
  );
}
