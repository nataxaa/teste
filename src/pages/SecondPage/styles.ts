"use client"
import styled from "styled-components";

interface ItemsProps{
    colorText: string;
    colorBackground: string;
}

export const Container = styled.div`
    background-color: rgba(247, 247, 255, 1);
    display: grid;
    grid-template-columns: 4fr 1fr;
    padding: 60px;
    gap: 2rem;

    @media screen and (max-width: 700px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    
    h1{
        color: rgba(76, 54, 152, 1);
    }
    p{
        color: rgba(76, 54, 152, 1);
    }
    div.title-text-area{
        display: flex;
        flex-direction: column;
        gap:20px;
        margin-bottom: 20px;
    }
    div.area-items{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 15px;
        @media screen and (max-width: 700px){
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }

    img.image-second-page{
        position: relative;
        width: 22rem;
        bottom: -6rem;
        @media screen and (max-width: 700px){
            display: none;
        }
    }
    img.elipse{
        position: absolute;
        right: 0;
        transform: rotate(180deg);
        @media screen and (max-width: 700px){
            display: none;
        }
    }
`

export const Items = styled.div<ItemsProps>`
    color: ${({colorText}) => colorText };
    background-color: ${({colorBackground}) => colorBackground};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 2rem;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 40px;
    p{
        width: 10rem;
        color: ${({colorText}) => colorText };
    }
    span{
        font-weight: bold;
        font-size: 1.4rem;
        width: fit-content;
    }
    img{
        margin-left: -6rem;
        width: 5rem;
    }
`