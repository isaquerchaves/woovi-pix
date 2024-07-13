import styled from "styled-components";

export const Card = styled.div`
    & {
        border: 2px solid #E5E5E5;
        border-radius: 10px;
        width: 429px;
        height: 137px;
        padding: 1rem;
    }

    & .title {
        font-size: 24px;
        font-weight: 600;
        color: #4D4D4D;
    };

    & .sub-title {
        font-size: 16px;
        font-weight: 600;
        color: #4D4D4D;
        color: #03D69D;
    };

    & span {
        font-weight: 800;
    }

    & .cashback-value {
        position: relative;
        width: 387px;
        height: 33px;
        background-color: #133A6F;
        clip-path: polygon(0 0, 100% 0, 95% 50%, 100% 100%, 0 100%);
        color: white;

        display: flex;
        align-items: center;
    }
`