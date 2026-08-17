"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

function subscribeMotion(onChange: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

function reducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Steps an index through 0…length-1 on an interval, wrapping at the end — the
 * clock behind the rotating headline, the skill carousel, and the CLI slider.
 *
 * Starts at 0 on the server and on the first client render, so the static
 * export hydrates without a mismatch. Auto-advancing content is motion in its
 * own right, not just the transition that carries it, so the cycle holds still
 * for `prefers-reduced-motion: reduce`.
 */
export function useCycle(length: number, intervalMs: number) {
  const [index, setIndex] = useState(0);
  const still = useSyncExternalStore(subscribeMotion, reducedMotion, () => false);

  useEffect(() => {
    if (still || length < 2) return;

    const id = setInterval(
      () => setIndex((i) => (i + 1) % length),
      intervalMs,
    );
    return () => clearInterval(id);
  }, [still, length, intervalMs]);

  return index;
}
