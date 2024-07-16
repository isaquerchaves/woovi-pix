import styled from "styled-components";

export const PaymentContainer = styled.div`
  .test {
    width: 310px;
  }
  .items-center {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 0rem 0rem 0rem;
  }

  .copy-code {
    background: #133a6f;
    width: 100%;
    height: 39px;
    border-radius: 8px;
    opacity: 0px;
    color: white;
    border: none;
    cursor: pointer;

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
    position: relative; /* Added for the pseudo-element positioning */
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

  .pix {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2px;
  }

  .circle-connector {
    position: relative;
  }

  .circle-connector::before {
    content: "";
    position: absolute;
    width: 2px;
    height: calc(100% + 3px);
    background-color: #e5e5e5;
    top: 18px;
    left: 50%;
    transform: translateX(-50%);
  }
`;
