"use client"
import styled from "styled-components"

export const HomeContainer = styled.div`
    padding: 2rem;
    height: 100vh;
    position: relative;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`

export const ButtonContainer = styled.button`
    position: absolute;
    bottom: 2rem;
    right: 2rem;

    border: none;
    border-radius: 50%;
    height: 45px;
    width: 45px;
    color: white;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
    background: #03D69D;
`