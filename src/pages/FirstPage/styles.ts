"use client"
import styled from "styled-components";

export const Container = styled.div`
    background-color: rgba(128, 244, 218, 0.16);
    color: rgba(0, 150, 116, 1);
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 2rem;
    padding: 40px;
    div.button-area{
        display: flex;
        align-items: center;
        gap: 10px;
    }
    div.area-text{
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: 35rem;
    }
    img{
        width: 22rem;
    }
`