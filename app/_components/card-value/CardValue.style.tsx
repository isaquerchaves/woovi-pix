import styled from "styled-components";

export const SingleInstallmentContainer = styled.div`
  border: 2px solid #e5e5e5;
  border-radius: 10px;
  width: 370px;
  height: 137px;
  margin-bottom: 2rem;
`;

export const CardsContainer = styled.div`
  border: 2px solid #e5e5e5;
  border-radius: 10px;
  width: 100%;
  max-width: 429px;
  display: flex;
  flex-direction: column;
  gap: 0;
`;

export const Card = styled.div`
  width: 100%;
  max-width: 429px;
  padding: 1rem;
  position: relative;
  cursor: pointer;
  border-bottom: 2px solid #e5e5e5;

  &:last-child {
    border-bottom: none;
  }

  &.multiple-installments {
    height: 105px;
  }

  & input {
    position: absolute;
    top: 2rem;
    right: 2rem;
    width: 20px;
    height: 20px;
    appearance: none;
    border: 2px solid #e5e5e5;
    border-radius: 50%;
    background: transparent;
    cursor: pointer;
  }

  & input:checked {
    background: #03d69d;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & input:checked::after {
    content: "\\2714";
    color: white;
    font-size: 12px;
  }

  & .title {
    font-size: 24px;
    font-weight: 600;
    color: #4d4d4d;
  }

  & .sub-title {
    font-size: 16px;
    font-weight: 600;
    color: #4d4d4d;
    color: #03d69d;
    padding-bottom: 7px;
  }

  & span {
    font-weight: 800;
  }

  & .cashback-value {
    position: relative;
    height: 33px;
    max-width: 389px;
    background-color: #133a6f;
    clip-path: polygon(0 0, 100% 0, 95% 50%, 100% 100%, 0 100%);
    color: white;
    display: flex;
    align-items: center;
    font-size: 14px;

    @media (max-width: 768px) {
      padding-left: 5px;
    }
  }
`;
