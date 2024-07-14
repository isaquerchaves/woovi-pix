import styled from "styled-components";

export const Card = styled.div`
  & {
    border: 2px solid #e5e5e5;
    border-radius: 10px;
    width: 429px;
    height: 137px;
    padding: 1rem;
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
    width: 387px;
    height: 33px;
    background-color: #133a6f;
    clip-path: polygon(0 0, 100% 0, 95% 50%, 100% 100%, 0 100%);
    color: white;

    display: flex;
    align-items: center;
  }
`;
