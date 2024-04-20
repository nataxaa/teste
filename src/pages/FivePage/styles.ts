"use client"
import styled from "styled-components";

 const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px;
    background-color: rgba(243, 250, 255, 1);
    color: rgba(3, 109, 186, 1);
    gap: 20px;

    img.boll{
       width: 4rem;
        position: absolute;
        left: 0;
        margin-bottom: -52rem;
    }
    img{
        
    @media screen and (max-width: 700px){
        display: none;
    }
    }

`

 export const SectionPage = styled.div`
    background: linear-gradient(125.65deg, #F4B261 0.81%, #FFF5E8 100%);
    border-radius: 176.08px 26.41px 26.41px 26.41px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    color: rgba(112, 135, 141, 1);
    padding: 40px;
    margin-top: 1rem;
    
    @media screen and (max-width: 700px){
        border-radius: 40px;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    }
    ul{
        display: flex;
        flex-direction: column;
        gap: 20px;
        li{
            display: flex;
            align-items: center;
            gap: 10px;
            p{
                font-weight: bold;
                color: rgba(59, 87, 95, 1);
                font-size: 1.3rem;
            }
            img{
                width: 7rem;
            }
            div.text-icon{
                display: flex;
                flex-direction: column;
                gap: 5px;
            }
        }
    }
;

`

export default Container;