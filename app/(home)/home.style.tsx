"use client";
import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;
  height: 100vh;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ButtonContainer = styled.button`
  border: none;
  border-radius: 50%;
  height: 45px;
  width: 45px;
  color: white;
  cursor: pointer;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #03d69d;
`;
