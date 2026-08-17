"use client";

import { useEffect, useRef, type ReactNode } from "react";
import styled, { keyframes } from "styled-components";
import { Button } from "./Button";
import { CloseIcon } from "./icons";

const rise = keyframes`
  from { opacity: 0; transform: translateY(12px) scale(0.98); }
  to   { opacity: 1; transform: none; }
`;

const Dialog = styled.dialog`
  width: min(640px, calc(100vw - 32px));
  max-height: min(800px, calc(100vh - 48px));
  overflow: auto;
  margin: auto;
  padding: 20px 28px 32px;
  border: none;
  border-radius: ${({ theme }) => theme.radius.xl};
  background: ${({ theme }) => theme.color.surface};
  box-shadow: ${({ theme }) => theme.shadow.lift};
  color: ${({ theme }) => theme.color.ink};
  animation: ${rise} 180ms ease-out;

  &::backdrop {
    background: color-mix(
      in srgb,
      ${({ theme }) => theme.color.ink} 48%,
      transparent
    );
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Toolbar = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: -8px -12px 8px 0;
`;

const CloseButton = styled(Button)`
  width: 36px;
  padding: 0;
`;

/**
 * Native dialog overlay. The parent mounts/unmounts it — Escape, the close
 * button, and a backdrop click all call `onClose`.
 */
export function Modal({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: ReactNode;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    try {
      if (!node.open) node.showModal();
    } catch {
      node.setAttribute("open", "");
    }

    return () => {
      if (node.open) {
        try {
          node.close();
        } catch {
          /* unmounting */
        }
      }
    };
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const close = () => onClose();

    const onCancel = (event: Event) => {
      event.preventDefault();
      close();
    };

    const onBackdropClick = (event: MouseEvent) => {
      const box = node.getBoundingClientRect();
      const inside =
        event.clientX >= box.left &&
        event.clientX <= box.right &&
        event.clientY >= box.top &&
        event.clientY <= box.bottom;
      if (!inside) close();
    };

    node.addEventListener("cancel", onCancel);
    node.addEventListener("click", onBackdropClick);
    return () => {
      node.removeEventListener("cancel", onCancel);
      node.removeEventListener("click", onBackdropClick);
    };
  }, [onClose]);

  return (
    <Dialog ref={ref} aria-label={title}>
      <Toolbar>
        <CloseButton
          type="button"
          $variant="ghost"
          $size="md"
          aria-label="Close"
          onClick={onClose}
        >
          <CloseIcon size={16} />
        </CloseButton>
      </Toolbar>
      {children}
    </Dialog>
  );
}
