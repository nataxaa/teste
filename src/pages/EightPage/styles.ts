"use client"
import styled from "styled-components";
import image from '@/assets/background.png'

export const Container = styled.div`

    background-image: url(${image.src});
    background-size: cover;
    color: rgba(49, 60, 69, 1);
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    padding: 80px 60px;
    div.area-items{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;
        @media screen and (max-width: 700px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    }

`

export const ItemsComments = styled.div`
    background-color: #FFFFFF;
    padding: 20px;
    color: rgba(49, 60, 69, 1);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 40px 20px;
    
    img.icon{
        width: 3rem;
        margin-left: -16rem;
    }
`