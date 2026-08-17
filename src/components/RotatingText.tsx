"use client";

import styled from "styled-components";
import { useCycle } from "./useCycle";

/* Every phrase sits in the same grid cell, so the slot is as wide and as tall
   as the longest one and the surrounding line never reflows mid-swap. */
const Slot = styled.span`
  display: inline-grid;
`;

/* The outgoing phrase clears out before the incoming one arrives — a true
   cross-fade would show both strings stacked on top of each other. */
const Phrase = styled.span<{ $active: boolean }>`
  grid-area: 1 / 1;
  opacity: ${({ $active }) => ($active ? 1 : 0)};
  transition: opacity 320ms ease-out
    ${({ $active }) => ($active ? "300ms" : "0ms")};

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

/**
 * Cross-fades through a list of phrases in place — used for the swappable half
 * of a headline. Inactive phrases stay in the DOM (they hold the slot open) but
 * are hidden from assistive tech, so the heading reads as one sentence.
 */
export function RotatingText({
  items,
  interval = 2600,
  className,
}: {
  items: readonly string[];
  interval?: number;
  className?: string;
}) {
  const active = useCycle(items.length, interval);

  return (
    <Slot className={className}>
      {items.map((item, i) => (
        <Phrase key={item} $active={i === active} aria-hidden={i !== active}>
          {item}
        </Phrase>
      ))}
    </Slot>
  );
}
