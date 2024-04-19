"use client"
import styled from "styled-components";

export const Container = styled.div`

    display: flex;
    justify-content: space-between;
    background-color: rgba(243, 240, 255, 1);
    color:rgba(82, 61, 157, 1) ;
    @media screen and (max-width: 700px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    img.image{
        width: 40rem;
        @media screen and (max-width: 700px){
        display: none;
    }
    }

    div.text-title{
        display: flex;
        flex-direction: column;
        gap: 30px;
        padding: 70px;
        div.links-app{
            display: flex;
            align-items: center;
            gap: 5px;
        }
        a{
            img{
                width: 10rem;
            }
        }
    }

`