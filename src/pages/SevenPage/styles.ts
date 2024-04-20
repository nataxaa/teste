"use client"
import styled from "styled-components";

 const Container = styled.div`
    background-color: rgba(191, 251, 237, 1);
    color: rgba(99, 145, 162, 1);
    padding: 60px;
    h1{
        margin-bottom: 20px;
        color: rgba(68, 105, 116, 1);
    }
    div.area-items{
        background-color: rgba(69, 205, 176, 1);
        border-radius: 10px;
        padding: 10px 30px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 30px;
        @media screen and (max-width: 700px){
            display: flex;
            flex-direction: column;
            align-items: center;
            
    }
    }
`

export const ItemDoctor = styled.div`
    color: rgba(115, 115, 115, 1);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15px;
    padding: 0px 0px 10px 0px;
    background-color: #FFFFFF;
    border-radius: 10px ;
    box-sizing: border-box;
    width: 17rem;
    button{
        color: #FFFFFF;
        background-color: rgba(0, 113, 89, 1);
        border-radius: 8px;
        padding: 10px 15px;
        border: none;
        font-weight: bold;
        cursor: pointer;
        transition: 0.2s;
        &:hover{
            opacity: 0.8;
        }
    }
    img{
       width: 17rem;
        border-radius: 10px 10px 0 0;
    }
`


export default Container;