"use client";

import styled from "styled-components";
import { SearchIcon } from "./icons";

const Shell = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px 14px;
  border-radius: ${({ theme }) => theme.radius.md};
  border: 1px solid ${({ theme }) => theme.color.borderSand};
  background: ${({ theme }) => theme.color.surface};
  color: ${({ theme }) => theme.color.muted};
  transition:
    border-color 150ms ease-out,
    box-shadow 150ms ease-out;

  &:focus-within {
    border-color: ${({ theme }) => theme.color.borderStrong};
    box-shadow: ${({ theme }) => theme.shadow.xs};
  }
`;

const Field = styled.input`
  flex: 1;
  min-width: 0;
  border: none;
  outline: none;
  background: transparent;
  font-family: ${({ theme }) => theme.font.sans};
  font-size: 15px;
  line-height: 22px;
  color: ${({ theme }) => theme.color.ink};

  &::placeholder {
    color: ${({ theme }) => theme.color.muted};
  }
`;

/**
 * Search field. Controlled when `value`/`onChange` are passed (see the
 * connectors page for live filtering); decorative otherwise. Parents own the
 * width — wrap it in a sized box.
 */
export function SearchInput({
  value,
  onChange,
  placeholder = "Search",
  ...rest
}: {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, "onChange" | "value">) {
  return (
    <Shell>
      <SearchIcon size={18} />
      <Field
        type="text"
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        placeholder={placeholder}
        {...rest}
      />
    </Shell>
  );
}
