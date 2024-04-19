"use client"
import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 15px 0;
    background-color: white;

    div.button-area{
        display: flex;
        gap: 10px;
    }
`

export const ButtonRegister  = styled.button`
    background-color: rgba(0, 150, 116, 1);
    border: none;
    border-radius: 8px;
    padding: 0.8rem 2rem;
    color: #FFFFFF;
    cursor: pointer;
    transition: 0.2s;
    &:hover{
        opacity: 0.8;
    }
    @media screen and (max-width: 700px){
        padding: 10px;
    }
`
export const ButtonLogin = styled.button`
    background-color: #FFFFFF;
    border: 1px solid rgba(0, 150, 116, 1);
    padding: 0.8rem 2rem;
    color: rgba(0, 150, 116, 1);
    border-radius: 8px;
    cursor: pointer;
    transition: 0.2s;
    &:hover{
        opacity: 0.8;
    }
    @media screen and (max-width: 700px){
        padding: 10px;
    }
    
`