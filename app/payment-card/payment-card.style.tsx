import styled from "styled-components";

export const PaymentCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;

  .form-field {
    position: relative;
    margin-top: 0.5;
  }

  label {
    position: absolute;
    top: 0.75rem;
    left: 0.75rem;
    background-color: white;
    padding: 0 0.25rem;
    color: #4d4d4d;
    font-size: 14px;
    transition: 0.2s ease all;
    pointer-events: none;
  }

  input,
  select {
    width: 100%;
    padding: 1rem 0.5rem 0.5rem 0.5rem;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    font-size: 14px;
  }

  input:focus,
  input:not(:placeholder-shown),
  select:focus,
  select:not(:placeholder-shown) {
    border: 1px solid #03d69d;
  }

  input:focus ~ label,
  input:not(:placeholder-shown) ~ label,
  select:focus ~ label,
  select:not(:placeholder-shown) ~ label {
    top: -0.5rem;
    left: 0.5rem;
    font-size: 12px;
    color: #03d69d;
  }

  .vencimento-cvv {
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    .form-field-alternative {
      position: relative;
      width: 500px;
    }
  }

  @media (min-width: 1024px) {
    .form-field-alternative {
      position: relative;
    }
  }
`;
