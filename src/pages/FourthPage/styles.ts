"use client"
import styled from "styled-components";

interface ItemsProps{
    colorBackground: string;
    color: string;
}

 const Container = styled.div`

    padding: 60px;
    display: grid;
    grid-template-columns: 3fr 1fr;
    background-color: rgba(234, 255, 252, 1);
    color: rgba(0, 150, 116, 1);
    gap: 2rem;
    
    @media screen and (max-width: 700px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    h1{
        font-weight: bold;
    }
    div.text-area{
        display: flex;
        flex-direction: column;
        gap: 30px;
        p.text-p{
            margin-bottom: 2rem;
        }
    }
    div.area-icons{
        display: flex;
        align-items: center;
        gap: 15px;
        
    @media screen and (max-width: 700px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    }
    img.image{
        width: 27rem;
        
    @media screen and (max-width: 700px){
        display: none;
    }
    }
    

`

 export const Items = styled.div<ItemsProps>`
    background-color: ${({colorBackground}) => colorBackground};
    color: ${({color}) => color};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    padding: 10px;
    text-align: center;
    img{
        width: 3rem;
    }
    p{
        font-weight: bold;
        margin-bottom: 10px;
    }
    

`

export default Container;