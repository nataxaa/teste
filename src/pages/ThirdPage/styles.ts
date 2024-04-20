"use client"
import styled from "styled-components";

 const Container = styled.div`
    
    background-color:rgba(255, 245, 232, 1) ;
    color: rgba(201, 118, 11, 1);
    display: grid;
    grid-template-columns: 1fr 3fr;
    position: relative;
    gap: 20px;
    padding: 80px 60px;
    
    @media screen and (max-width: 700px){
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    img.image{
        width: 25rem;
        position: relative;
        bottom: -3rem;
        
    @media screen and (max-width: 700px){
        display: none;
    }
    }

    div.text-title{
        text-align: left;
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 40px;
    }


    div.area-items{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        width: 60%;
        gap: 15px;
        
    @media screen and (max-width: 700px){
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
        
    }
    img.side{
        position: absolute;
        left: 0;
        width: 19rem;
    @media screen and (max-width: 700px){
        display: none;
    }
    }

`
 export const ItemsThirdPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: bold;
    gap: 15px;
    img{
        width: 15rem;
    }
`

export default Container