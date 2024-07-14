import styled from "styled-components";

export const PaymentContainer = styled.div`
  .items-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0rem;
  }

  .copy-code {
    background: #133a6f;
    width: 310px;
    height: 39px;
    border-radius: 8px;
    opacity: 0px;
    color: white;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .itens-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.5rem;
  }

  .title {
    font-size: 16px;
    font-weight: 600;
    color: #b2b2b2;
  }

  .sub-title {
    font-size: 16px;
    font-weight: 800;
    color: #4d4d4d;
  }

  .installments-section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 1.5rem;

    border-bottom: 2px solid #e5e5e5;
  }

  .installments-itens {
    font-size: 18px;
    font-weight: 600;
    color: #4d4d4d;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  span {
    font-weight: 800;
  }

  .section-cet {
    font-size: 14px;
    font-weight: 600;
    color: #4d4d4d;
    margin: 0rem;
    padding: 1rem 0rem;
    border-bottom: 2px solid #e5e5e5;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    span {
      font-size: 18px;
    }
  }

  .identifier {
    text-align: center;
    padding: 1rem;
  }
`;
