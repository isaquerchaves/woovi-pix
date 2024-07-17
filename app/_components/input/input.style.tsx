"use client"
import styled from "styled-components";

export const StyledInput = styled.input`
  display: flex;
  height: 40px;
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid var(--input-border-color, #ccc);
  background-color: var(--background-color, #fff);
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  outline: none;
  transition: all 0.2s;

  &::placeholder {
    color: var(--muted-foreground-color, #6c757d);
  }

  &:focus-visible {
    ring: 2px;
    ring-color: var(--ring-color, #3b82f6);
    ring-offset: 2px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &::-webkit-file-upload-button {
    border: none;
    background-color: transparent;
    font-size: 0.875rem;
    font-weight: 500;
  }
`;
